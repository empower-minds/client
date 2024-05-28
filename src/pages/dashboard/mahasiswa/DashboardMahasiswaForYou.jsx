import { ArticleCard } from "../../../components/cards/ArticleCard";
import { NotifikasiFeedback } from "../../../components/feedbacks/NotifikasiFeedback";
import { articles } from "../../../data";

export function DashboardMahasiswaForYou() {
    return (
        <>
            <section>
                <p className='poppins-italic italic text-gray-400 py-4'>Make your day better life</p>
                <p className='raleway-semibold text-2xl text-gray-800 pt-6 pb-2'>For You</p>
                <div className="w-full">
                    <p className='poppins-medium text-[#5182CC] py-4'>Feedback</p>
                    <div className='mr-4 mb-10'>
                        <NotifikasiFeedback />
                    </div>
                </div>
                <div className="w-full">
                    <p className='poppins-medium text-[#5182CC] py-4'>Top Recommendation</p>
                    <div className='flex flex-wrap'>
                        {articles.map((article, index) => (
                            <ArticleCard
                                key={index}
                                imageSrc={article.gambar}
                                title={article.judul}
                                description={article.isi_artikel}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
