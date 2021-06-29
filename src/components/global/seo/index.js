import Head from 'next/head';

const Seo = ({ title = 'Draze Force' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta
        name="description"
        content="Draze Force is blending 8-bit sounds with analog synths to create his own sound in the synthwave world."
      />
      <meta
        name="keywords"
        content="draze, force, draze force, music, 8-bit, artist, streamer, synths, nick morris"
      />
      <meta
        property="og:url"
        content="https://drazeforce.vercel.com"
        key="ogurl"
      />
      <meta property="og:image" content="/logo.png" key="ogimage" />
      <meta
        property="og:site_name"
        content="Draze Force Website"
        key="ogsitename"
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:description"
        content="Draze Force is blending 8-bit sounds with analog synths to create his own sound in the synthwave world."
        key="ogdesc"
      />
      <meta name="twitter:creator" content="@DrazeForce" key="twhandle" />
      <meta name="twitter:card" content="summary" key="twcard" />
    </Head>
  );
};

export default Seo;
