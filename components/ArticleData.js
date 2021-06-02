import Link from 'next/link'
import News from "./News";

export default function ArticleData({ article, articles }) {
    return (
        <div>
            <section className="container">
                <div className="text-center lg:px-24  px-4 py-20">
                    <h2 className="text-4xl text-gray-600 pb-12">{ article.title }</h2>
                    <p className="text-md text-gray-400 pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin.</p>
                    <img src="/anthony-esau-N2zk9yXjmLA-unsplash.jpg" alt="" className="pb-12" />
                    <p className="text-md text-gray-400 pb-12 leading-loose">
                        { article.body }
                    </p>
                    <div className="text-left lg:px-28 pt-12">
                        <hr />
                        <p className="text-md text-gray-600 pb-2 pt-4 pl-4">Izvor:</p>
                        <p className="text-sm text-gray-400 pb-4 pl-4">bijeljina-danas.com</p>
                        <hr />
                    </div>
                </div>
            </section>

            <News articles={ articles } />
        </div>
    )
}
