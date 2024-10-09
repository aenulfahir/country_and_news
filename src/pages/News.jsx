// src/pages/News.jsx  
import  { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { fetchNews } from '../features/newsSlice';  

export default function News() {  
    const dispatch = useDispatch();  
    const { articles, loading, error } = useSelector((state) => state.news);  

    useEffect(() => {  
        dispatch(fetchNews());  
    }, [dispatch]);  

    if (loading) return (  
        <div className="flex items-center justify-center h-screen">  
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-black-500 border-solid"></div>  
        </div>  
    );
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;  
 
    const displayedArticles = Array.isArray(articles) ? articles.slice(0, 10) : [];  

    return (  
        <div className="container mx-auto p-6">  
        <h1 className="text-3xl font-bold mb-6 text-center">Peace Latest News</h1>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
            {displayedArticles.length > 0 ? (  
                displayedArticles.map((article, index) => {  
                    const imageUrl = article.multimedia && article.multimedia.length > 0   
                        ? `https://static01.nyt.com/${article.multimedia[0].url}`   
                        : 'https://via.placeholder.com/150';   
                    return (  
                        <div key={index} className="border rounded-lg p-4 shadow-lg bg-gray-800 transition-transform transform hover:scale-105">  
                            <img src={imageUrl} alt={article.headline?.main} className="w-full h-48 object-cover rounded-t-lg" />  
                            <h2 className="font-semibold text-xl mt-3 text-white">{article.headline?.main}</h2>  
                            <p className="text-gray-300 mt-2">{article.abstract}</p>  
                            <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-4 inline-block font-medium hover:underline">Read more</a>  
                        </div>  
                    );  
                })  
            ) : (  
                <div className="text-center text-gray-500">No articles available.</div>  
            )}  
        </div>  
    </div>
    );  
}