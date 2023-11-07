

const PromotionBanner = () => {
  return (
    <div className="bg-blue-500 text-white text-center py-4 mb-4">
      <h2 className="text-2xl font-bold">Special Offer!</h2>
      <p className="mt-2">Get 30% off on all products. Limited time offer!</p>
      <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Shop Now
      </button>
    </div>
  );
};

export default PromotionBanner;