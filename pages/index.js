import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../redux/actions';

import Head from 'next/head'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Section from '../components/Section.js'
import Location from '../components/Location.js'
import About from '../components/About.js'
import Services from '../components/Services.js'
import Action from '../components/Action.js'
import News from '../components/News.js'
import Info from '../components/Info.js'
import Contact from '../components/Contact.js'

function Home({ articles, fetchArticles }) {
    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div>
            <Head>
                <title>Mediteran</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div className="lg:bg-gradient-to-b from-white to-blue-50">
                <Header />
                <Hero />
            </div>
            <Section />
            <Location />
            <About />
            <Services />
            <Action />
            <News articles={ articles } />
            <Info />
            <hr className="mb-32" />
            <Contact />
        </div>
    )
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

export default connect(
    mapStateToProps,
    { fetchArticles }
)(Home);
