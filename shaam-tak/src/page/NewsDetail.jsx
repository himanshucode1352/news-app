import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { newsDetail } from '../store/features/newsSlice';
import { useDispatch } from 'react-redux';

const NewsDetail = ({ newsData }) => {
  const { id } = useParams();
const dispatch=useDispatch();
const news = useSelector((state) => state.news);
  // Find the selected news article based on the newsId
  console.log('newsId',id)
//   const selectedNews = newsData.find(news => news.id === newsId);
useEffect(() => {
    dispatch(newsDetail(id));
  
}, [dispatch])
//   if (!selectedNews) {
//     // Handle case when news article is not found
//     return <div>News not found</div>;
//   }
console.log(news,'heyyyyyyoooo')
  return (
    <div className="container">
      <img src={selectedNews.urlToImage} alt="News Image" className="article-image" />
      <h1 className="article-title">{selectedNews.title}</h1>
      <div className="article-meta">
        By {selectedNews.author} | Published on {selectedNews.publishedAt}
      </div>
      <p className="article-description">{selectedNews.description}</p>
      <div className="article-content">
        <p>{selectedNews.content}</p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default NewsDetail;
