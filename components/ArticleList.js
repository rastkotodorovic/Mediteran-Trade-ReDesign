import Link from 'next/link'
import ArticleItem from './ArticleItem'

export default function ArticleList({ articles }) {
    return (
        <div>
            <section className="container py-16">
                {articles.map(article => (
                    <div>
                        <ArticleItem article={ article }  key={ article.id } />
                    </div>
                ))}
            </section>
        </div>
        )
    }
