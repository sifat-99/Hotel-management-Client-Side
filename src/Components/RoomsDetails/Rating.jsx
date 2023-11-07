

const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex mb-4">
      {stars.map((star, index) => (
        <svg
          key={index}
          className={`h-6 w-6 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15.27L16.18 21l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;