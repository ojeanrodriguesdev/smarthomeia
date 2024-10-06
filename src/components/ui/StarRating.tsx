
import React from 'react';

interface StarRatingProps {
  rating: number; 
  starColor?: string; 
}

const StarRating: React.FC<StarRatingProps> = ({ rating, starColor = 'text-yellow-500' }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 ${index < rating ? starColor : 'text-gray-400'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.12-6.542L0 6.545l6.545-.955L10 0l3.455 5.59L20 6.545l-5.242 4.003 1.12 6.542L10 15z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;