import React, { useEffect, useState } from 'react';
import './Home.css';
import cardData from '../Landing/cardData'; // Make sure this path is correct
console.log(cardData)
export default function Home() {
  const [bookInfo, setBookInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added to track loading state

  useEffect(() => {
    const bookurl = '/book' + window.location.search;
  
    setTimeout(() => {
      const flatCardData = cardData.flat(Infinity);
      console.log("Flat card data:", flatCardData); // Debugging: Log flattened data
      const foundBookInfo = flatCardData.find(book => {
        console.log("Comparing", book.url, "with", bookurl); // Debugging: Log comparison
        return book.url === bookurl;
      });
  
      if (!foundBookInfo) console.error("Book not found for URL:", bookurl); // Debugging: Log errors
  
      setBookInfo(foundBookInfo);
      setIsLoading(false);
    }, 4000);
  }, []);
  

  // Conditional rendering based on isLoading state
  if (isLoading) {
    return <div className="loading">Loading book details...</div>; // Display a loading message or spinner
  }

  return (
    <div className="book-details-container">
      {bookInfo ? (
        <>
          <div className="book-title">
            <h2>{bookInfo.title}</h2>
          </div>
          <div className="book-image">
            <img src={bookInfo.img} alt={bookInfo.title} />
          </div>
          <div className="book-description">
            <p>{bookInfo.description}</p>
          </div>
        </>
      ) : (
        <p>Book information not found.</p>
      )}
    </div>
  );
}
