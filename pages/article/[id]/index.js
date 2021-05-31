import Head from 'next/head'
import Header from '../../components/Header'
import Hero2 from '../../components/Hero2'
import ArticleData from '../../components/ArticleData'

export default function Article({ article }) {
    return (
        <div>
            <Head>
                <title>Mediteran</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <Header />
            <Hero2 />
            <ArticleData article={ article } />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await response.json();

    return {
        props: {
            article
        }
    }
}
