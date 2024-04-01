import { useEffect, useState } from "react";
import Article from "../Article/Article";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/data/articles.json")
        .then(res => res.json())
        .then(data => setArticles(data))
    }, [])

    return (
        <div className="mt-12">
            <h1 className="text-5xl font-semibold text-center mb-8 font-dm-serif">Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    articles.map(article => <Article
                    key={article.id}
                    article={article}
                    ></Article>)
                }
            </div>
        </div>
    );
};

export default Articles;