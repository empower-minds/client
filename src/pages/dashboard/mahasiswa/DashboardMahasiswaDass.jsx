import { RadioGroup } from '../../../components/buttons/RadioGroup';
import { dass } from '../../../data';

export function DashboardMahasiswaDass() {
    return (
        <>
            <section>
                <p className='raleway-semibold text-xl text-gray-80000 mt-10'>DASS (Depression Anxiety Stress Scale)</p>
                <p className='poppins-italic italic text-gray-400 py-4'>Dalam sebulan ini, seberapa sering kamu...</p>
                <div className='bg-white rounded-[20px] w-full h-fit shadow-md mr-4 p-6'>
                    <div className=''>
                        {dass.map((item, index) => (
                            <div key={index}>
                                <p className='poppins-regular text-[#054578]'>{item.pertanyaan}</p>
                                <RadioGroup/>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-end ml-auto px-4 gap-4 border-t-2 py-6'>
                        <button className='border border-[#5182CC] rounded px-6 py-3 text-[#5182CC] poppins-regular text-sm'>Cancel</button>
                        <button className='bg-[#5182CC] rounded px-6 py-3 text-white poppins-regular text-sm'>Submit</button>
                    </div>
                </div>
            </section>
        </>
    );
}