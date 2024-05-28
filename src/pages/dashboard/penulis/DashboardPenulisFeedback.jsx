import { FaPlus } from "react-icons/fa";
import { FeedbackTable } from "../../../components/tables/FeedbackTable";

export function DashboardPenulisFeedback() {
    return (
        <>
             <section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    {/* Content */}
                    <div className="py-4">
                        <div className="gap-8 mr-8 p-6 bg-white rounded-xl shadow-md">
                            <div className='flex justify-between items-center'>
                                <div className="">
                                    <h1 className="poppins-semibold text-2xl text-[#0B497B]">Data Feedback</h1>
                                    <div className="border-b-2 w-12 border-[#0B497B] pt-4" />
                                </div>
                                <a href="#" className="flex items-center py-2 px-5 bg-[#5182CC] text-white text-center rounded-md poppins-regular">
                                    <FaPlus className="mr-1" />
                                    Add New
                                </a>
                            </div>
                            <div>
                                <FeedbackTable />
                            </div>
                        </div>
                    </div>
                    {/* /End content */}
                </div>
            </section>
        </>
    );
}