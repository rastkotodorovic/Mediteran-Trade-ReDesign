import '../styles/index.css'
import Footer from './components/Footer.js'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

return (
    <div>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
            <link rel="icon" href="141717329_497060598353545_4877675544851051058_n.gif" />
        </Head>
        <Component {...pageProps} />
        <Footer />
    </div>
    )
}

export default MyApp
