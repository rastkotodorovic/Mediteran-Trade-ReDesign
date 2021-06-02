import Link from 'next/link'

export default function ArticleItem({ article }) {
    const renderHtml = () => {
        if (article.id % 2 === 0) {
            return (
                <div className="lg:flex lg:justify-between hidden bg-white rounded-lg mb-10 shadow-md hover:shadow-lg" data-aos="fade-left">
                    <div className="w-1/2 px-6 py-16">
                        <h2 className="text-xl mb-4 text-gray-700">{ article.title }</h2>
                        <p className="text-sm text-gray-400 leading-loose">{ article.body }</p>
                        <hr />
                    </div>
                    <div className="w-1/2">
                        <img src="/sean-pollock-PhYq704ffdA-unsplash.jpg" alt="" className="rounded-r-lg" />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="lg:flex lg:justify-between hidden bg-white rounded-lg mb-10 shadow-md hover:shadow-lg" data-aos="fade-right">
                    <div className="w-1/2">
                        <img src="/sean-pollock-PhYq704ffdA-unsplash.jpg" alt="" className="rounded-l-lg" />
                    </div>
                    <div className="w-1/2 px-6 py-16">
                        <h2 className="text-xl mb-4 text-gray-700">{ article.title }</h2>
                        <p className="text-sm text-gray-400 leading-loose">{ article.body }</p>
                        <hr />
                    </div>
                </div>
            );
        }
    }

    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            { renderHtml() }
        </Link>
    )
}
