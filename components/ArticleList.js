import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import ArticleItem from './ArticleItem'

export default function ArticleList({ articles }) {

    if (articles.data === undefined) {
        return null;
    } else {
        return (
            <div>
                <section className="container pt-16 pb-4">
                    {articles.data.map(article => (
                        <div key={ article.id } >
                            <ArticleItem article={ article } />
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}
