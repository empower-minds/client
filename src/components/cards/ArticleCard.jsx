export function ArticleCard({ imageSrc, title, description }) {
    return (
        <div className="bg-white article-card rounded-lg shadow-md mr-6 my-4">
            <img src={imageSrc} alt={title} className="object-cover h-52 w-full mb-4 rounded-t-lg" />
            <div className="px-6 py-2">
                <h3 className="text-md poppins-medium text-[#054578] mb-4">{title}</h3>
                <p className="text-gray-600 poppins-extralight text-md mb-4">{description}</p>
            </div>
            <div className="mx-6 px-5 py-2 mb-6 bg-[#EDF3FF] rounded-full w-fit">
                <p className="poppins-regular text-sm text-[#5182CC]"><a href="#">Read more</a></p>
            </div>
        </div>
    );
}