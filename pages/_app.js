import '../styles/index.css'
import Footer from './components/Footer.js'


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />
            <Footer />
        </div>
        )
    }

    export default MyApp
