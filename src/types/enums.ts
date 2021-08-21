export enum TickerMode {
  modeFull = 'full', // Full quote including market depth. 164 bytes.
  modeQuote = 'quote', // Quote excluding market depth. 52 bytes.
  modeLTP = 'ltp',
}

export const enum SegmentConstant {
  NseCM = 1,
  NseFO = 2,
  NseCD = 3,
  BseCM = 4,
  BseFO = 5,
  BseCD = 6,
  McxFO = 7,
  McxSX = 8,
  Indices = 9,
}

export const enum OutgoingMessageFlag {
  mSubscribe = 'subscribe',
  mUnSubscribe = 'unsubscribe',
  mSetMode = 'mode',
}

export const enum IncomingMessageFlag {
  mAlert = 10,
  mMessage = 11,
  mLogout = 12,
  mReload = 13,
  mClearCache = 14,
}
