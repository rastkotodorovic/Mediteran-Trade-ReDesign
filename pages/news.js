import Head from 'next/head'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Hero2 from './components/Hero2'

export default function News({ articles }) {
    return (
        <div>
            <Head>
                <title>Mediteran</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div>
                <Header />
                <Hero2 />
                <ArticleList articles={articles} />
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const articles = await response.json();

    return {
        props: {
            articles
        }
    }
};

