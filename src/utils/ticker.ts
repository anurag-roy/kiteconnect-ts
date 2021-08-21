import { SegmentConstant, TickerMode } from '../types/enums';
import {
  Tick,
  TickLtp,
  TickIndexQuote,
  TickIndexFull,
  TickQuote,
  TickFull,
} from '../types/ticker';

// Big endian byte array to long
const buf2long = (buf: ArrayBuffer) => {
  const b: Uint8Array = new Uint8Array(buf);
  const len: number = b.length;
  let val: number = 0;

  for (let i = 0, j = len - 1; i < len; i++, j--) {
    val += b[j] << (i * 8);
  }

  return val;
};

// split one long binary message into individual tick packets
const splitPackets = (bin: ArrayBuffer) => {
  // number of packets
  const num: number = buf2long(bin.slice(0, 2));
  const packets: ArrayBuffer[] = [];
  let j: number = 2;

  for (let i = 0; i < num; i++) {
    // first two bytes is the packet length
    const size: number = buf2long(bin.slice(j, j + 2));
    const packet: ArrayBuffer = bin.slice(j + 2, j + 2 + size);

    packets.push(packet);

    j += 2 + size;
  }

  return packets;
};

// parse received binary message. each message is a combination of multiple tick packets
// [2-bytes num packets][size1][tick1][size2][tick2] ...
export const parseBinary = (binpacks: ArrayBuffer) => {
  const packets: ArrayBuffer[] = splitPackets(binpacks);
  const ticks: Tick[] = [];

  for (let n = 0; n < packets.length; n++) {
    const bin = packets[n];
    const instrumentToken = buf2long(bin.slice(0, 4));
    const segment = instrumentToken & 0xff;

    const tradable = segment === SegmentConstant.Indices ? false : true;

    const divisor = segment === SegmentConstant.NseCD ? 10000000.0 : 100.0;

    // Parse LTP
    if (bin.byteLength === 8) {
      const tick: TickLtp = {
        tradable: tradable,
        mode: TickerMode.modeLTP,
        instrumentToken: instrumentToken,
        lastPrice: buf2long(bin.slice(4, 8)) / divisor,
      };

      ticks.push(tick);

      // Parse indices quote mode
    } else if (bin.byteLength === 28) {
      const tick: TickIndexQuote = {
        tradable: tradable,
        mode: TickerMode.modeQuote,
        instrumentToken: instrumentToken,
        lastPrice: buf2long(bin.slice(4, 8)) / divisor,
        ohlc: {
          high: buf2long(bin.slice(8, 12)) / divisor,
          low: buf2long(bin.slice(12, 16)) / divisor,
          open: buf2long(bin.slice(16, 20)) / divisor,
          close: buf2long(bin.slice(20, 24)) / divisor,
        },
        change: buf2long(bin.slice(24, 28)),
      };

      // Compute the change price using close price and last price
      if (tick.ohlc.close != 0) {
        tick.change =
          ((tick.lastPrice - tick.ohlc.close) * 100) / tick.ohlc.close;
      }

      ticks.push(tick);

      // Parse indices full mode
    } else if (bin.byteLength === 32) {
      const timestamp: number = buf2long(bin.slice(28, 32));

      const tick: TickIndexFull = {
        tradable: tradable,
        mode: TickerMode.modeFull,
        instrumentToken: instrumentToken,
        lastPrice: buf2long(bin.slice(4, 8)) / divisor,
        ohlc: {
          high: buf2long(bin.slice(8, 12)) / divisor,
          low: buf2long(bin.slice(12, 16)) / divisor,
          open: buf2long(bin.slice(16, 20)) / divisor,
          close: buf2long(bin.slice(20, 24)) / divisor,
        },
        change: buf2long(bin.slice(24, 28)),
        timestamp: timestamp || null,
      };

      // Compute the change price using close price and last price
      if (tick.ohlc.close != 0) {
        tick.change =
          ((tick.lastPrice - tick.ohlc.close) * 100) / tick.ohlc.close;
      }

      ticks.push(tick);

      // Parse quote mode
    } else if (bin.byteLength === 44) {
      const tick: TickQuote = {
        tradable: tradable,
        mode: TickerMode.modeQuote,
        instrumentToken: instrumentToken,
        lastPrice: buf2long(bin.slice(4, 8)) / divisor,
        lastQuantity: buf2long(bin.slice(8, 12)),
        averagePrice: buf2long(bin.slice(12, 16)) / divisor,
        volume: buf2long(bin.slice(16, 20)),
        buyQuantity: buf2long(bin.slice(20, 24)),
        sellQuantity: buf2long(bin.slice(24, 28)),
        ohlc: {
          open: buf2long(bin.slice(28, 32)) / divisor,
          high: buf2long(bin.slice(32, 36)) / divisor,
          low: buf2long(bin.slice(36, 40)) / divisor,
          close: buf2long(bin.slice(40, 44)) / divisor,
        },
      };

      ticks.push(tick);

      // Parse full mode
    } else if (bin.byteLength === 184) {
      // Parse last trade time
      const lastTradeTime: number = buf2long(bin.slice(44, 48)) * 1000;

      // Parse timestamp
      const timestamp: number = buf2long(bin.slice(60, 64)) * 1000;

      const tick: TickFull = {
        tradable: tradable,
        mode: TickerMode.modeFull,
        instrumentToken: instrumentToken,
        lastPrice: buf2long(bin.slice(4, 8)) / divisor,
        lastQuantity: buf2long(bin.slice(8, 12)),
        averagePrice: buf2long(bin.slice(12, 16)) / divisor,
        volume: buf2long(bin.slice(16, 20)),
        buyQuantity: buf2long(bin.slice(20, 24)),
        sellQuantity: buf2long(bin.slice(24, 28)),
        ohlc: {
          open: buf2long(bin.slice(28, 32)) / divisor,
          high: buf2long(bin.slice(32, 36)) / divisor,
          low: buf2long(bin.slice(36, 40)) / divisor,
          close: buf2long(bin.slice(40, 44)) / divisor,
        },
        lastTradeTime: lastTradeTime || null,
        oi: buf2long(bin.slice(48, 52)),
        oiDayHigh: buf2long(bin.slice(52, 56)),
        oiDayLow: buf2long(bin.slice(56, 60)),
        timestamp: timestamp,
        depth: {
          buy: [],
          sell: [],
        },
      };

      let s: number = 0;
      const depth: ArrayBuffer = bin.slice(64, 184);
      for (let i = 0; i < 10; i++) {
        s = i * 12;
        tick.depth[i < 5 ? 'buy' : 'sell']?.push({
          quantity: buf2long(depth.slice(s, s + 4)),
          price: buf2long(depth.slice(s + 4, s + 8)) / divisor,
          orders: buf2long(depth.slice(s + 8, s + 10)),
        });
      }

      ticks.push(tick);
    }
  }

  return ticks;
};
