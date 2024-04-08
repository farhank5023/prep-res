import React, { useEffect, useState } from 'react';
import './Home.css';
import { useCardData } from '../Landing/CardContext';// Adjust the import path as needed

export default function Home() {
  const [bookInfo, setBookInfo] = useState(null);
  const { cardData, isLoaded } = useCardData(); // Use the context to access cardData

  useEffect(() => {
    if (!isLoaded) return; // Ensure cardData is loaded

    const bookurl = '/book' + window.location.search;

    // Removed setTimeout unless it's specifically required for other reasons
    const flatCardData = cardData.flat(Infinity);
    const foundBookInfo = flatCardData.find(book => book.url === bookurl);

    if (!foundBookInfo) {
      console.error("Book not found for URL:", bookurl);
    }

    setBookInfo(foundBookInfo);
  }, [isLoaded]); // Rerun this effect when isLoaded changes

  // Conditional rendering based on whether bookInfo is available
  if (!isLoaded) {
    return <div className="loading">Loading book details...</div>; // Show loading state until cardData is ready
  }

  return (
    <div className="book-details-container">
      {bookInfo ? (
        <>
          <div className="book-title"><h2>{bookInfo.title}</h2></div>
          <div className="book-image"><img src={bookInfo.img} alt={bookInfo.title} /></div>
          <div className="book-description"><p>{bookInfo.description}</p></div>
        </>
      ) : (
        <p>Book information not found.</p>
      )}
    </div>
  );
}
