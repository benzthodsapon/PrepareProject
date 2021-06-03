import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Benz eiei</title>
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
  
}



export default MyApp
