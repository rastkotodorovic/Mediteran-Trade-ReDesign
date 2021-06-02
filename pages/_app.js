import { useEffect } from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import AOS from "aos";
import "aos/dist/aos.css";

import '../styles/index.css'
import Head from 'next/head'
import Footer from '../components/Footer.js'


const store = createStore(reducers, applyMiddleware(thunk));

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

return (
    <div>
        <Provider store={store}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
                <link rel="icon" href="141717329_497060598353545_4877675544851051058_n.gif" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </Provider>
    </div>
    )
}

export default MyApp
