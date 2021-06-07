import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../redux/actions';
import { useRouter } from 'next/router';
import Router from 'next/router';

import Head from 'next/head'
import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
import Hero2 from '../components/Hero2'

function News({ articles, fetchArticles }) {
    const router = useRouter();
    const page = router.query.page;

    const [ currentPage, setCurrentPage ] = useState(null);

    useEffect(() => {
        if (page !== undefined) {
            setCurrentPage(page);
            fetchArticles(currentPage);
        }
    }, [currentPage, page]);

    return (
        <div>
            <Head>
                <title>Mediteran</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div>
                <Header />
                <Hero2 title="Najnovije vijesti" body="We always want to hear from you! Let us know how we can best help you and we'll do our very best." />
                <ArticleList articles={articles} />
                <div className="container flex justify-between">
                    <div>
                        <button
                            className="text-lg text-gray-400 mb-11"
                            hidden={currentPage <= 1}
                            onClick={() => Router.push(`/news?page=${+currentPage - 1}`)}
                        >
                            Prethodna
                        </button>
                    </div>
                    <div></div>
                    <div className="flex flex-row">
                        <button
                            className="text-lg text-gray-400 mb-11"
                            hidden={articles.last_page !== undefined ? currentPage >= articles.last_page : ''}
                            onClick={() => Router.push(`/news?page=${+currentPage + 1}`)}
                        >
                            Sledeca
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

export default connect(
    mapStateToProps,
    { fetchArticles }
)(News);

