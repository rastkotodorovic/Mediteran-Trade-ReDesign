import Head from 'next/head'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Section from './components/Section.js'
import Location from './components/Location.js'
import About from './components/About.js'
import Services from './components/Services.js'
import Action from './components/Action.js'
import News from './components/News.js'
import Info from './components/Info.js'
import Contact from './components/Contact.js'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Mediteran</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className="bg-gradient-to-br from-white to-blue-100">
                <Header />
                <Hero />
            </div>
            <Section />
            <Location />
            <About />
            <Services />
            <Action />
            <News />
            <Info />
            <hr class="mb-32" />
            <Contact />
        </div>
        )

    }

