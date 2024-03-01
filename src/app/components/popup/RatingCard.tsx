'use client'
import React from 'react'
import { useState, useEffect } from 'react';

type Props = {
    handleRating: (rating: number) => void;
  };

  const RatingCard: React.FC<Props> = ({ handleRating}) => {

    const [showRating, setShowRating] = useState<boolean>(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowRating(true);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleSelectRating = (rating:number) => {
      handleRating(rating);
      setShowRating(false); 
    };
  
  return (
    <div className={`fixed bottom-10 right-10 p-4 dark:to-blue-50 shadow-lg rounded-lg border-xl border 
    transition-opacity ${showRating ? 'opacity-100' : 'opacity-0'}`}>
      <p className="mb-6 font-semibold">Rate this page:</p>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => handleSelectRating(rating)}
            className="px-3 py-1 text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none"
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingCard;


