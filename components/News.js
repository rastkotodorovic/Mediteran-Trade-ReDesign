import Link from "next/link";
import ArticleItem from "./ArticleItem";
import React from "react";

export default function News({ articles }) {
    if (articles.data === undefined) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <div className="bg-gray-100 pb-24">
                <div className="container lg:px-0 px-5">
                    <div className="flex justify-between lg:pt-44 pt-20 pb-6">
                        <div>
                            <p className="title pb-2">Najnovije vijesti</p>
                            <p className="paragraph">Pogledajte nase vijesti</p>
                        </div>
                        <div>
                            <a href="#" className="btn btn-white lg:flex hidden">Sve vijesti</a>
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        { articles.data.map( article => (
                            <Link href="/article/[id]" as={`/article/${article.id}`} key={ article.id }>
                                <div className="bg-white shadow-md rounded-lg lg:mb-0 mb-6">
                                    <div>
                                        <img src="/anthony-esau-N2zk9yXjmLA-unsplash.jpg" className="rounded-t-lg" />
                                    </div>
                                    <h2 className="blog-title px-6 py-4">
                                        { article.title }
                                    </h2>
                                    <p className="px-6 blog-paragraph pb-12">
                                        { article.body }
                                    </p>
                                    <div className="px-6">
                                        <hr />
                                        <p className="text-sm text-gray-600 pb-1 pt-3">Izvor:</p>
                                        <p className="text-sm text-gray-400 pb-4">bijeljina-danas.com</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}