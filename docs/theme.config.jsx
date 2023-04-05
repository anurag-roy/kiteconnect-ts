export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="kiteconnect-ts" />
      <meta
        property="og:description"
        content="Unofficial library for the Kite Connect trading APIs, written in TypeScript"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – kiteconnect-ts',
    };
  },
  docsRepositoryBase: 'https://github.com/anurag-roy/kiteconnect-ts/blob/docs',
  logo: <b>kiteconnect-ts</b>,
  project: {
    link: 'https://github.com/anurag-roy/kiteconnect-ts',
  },
};
