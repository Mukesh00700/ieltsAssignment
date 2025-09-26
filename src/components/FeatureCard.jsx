export function FeatureCard({ image, title }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500 cursor-pointer group">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold text-center px-4">
          {title}
        </h3>
      </div>
    </div>
  );
}
