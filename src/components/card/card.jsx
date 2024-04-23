export function Card({ imageSrc, title, description }) {
    return (
      <div className="bg-white w-fit p-6 rounded-lg shadow-md mx-auto">
        <img src={imageSrc} alt={title} className="w-52 object-cover mb-4 rounded-lg" />
        <h3 className="text-xl font-semibold mb-2 w-52">{title}</h3>
        <p className="text-gray-600 w-52">{description}</p>
      </div>
    );
}