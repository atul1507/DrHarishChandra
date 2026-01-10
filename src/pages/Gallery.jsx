const Gallery = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9A825] mb-8 text-center">
          Gallery
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery items will be added here */}
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <p className="text-gray-600">Gallery content will be added soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
