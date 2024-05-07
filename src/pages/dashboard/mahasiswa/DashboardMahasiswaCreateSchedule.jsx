import { useForm } from 'react-hook-form';
import { DatePicker } from "../../../components/forms/DatePicker";
import { Input } from "../../../components/forms/Input";
import { RadioButton } from '../../../components/buttons/RadioButton';
import TimeInput from '../../../components/forms/TimeInput';

export function DashboardMahasiswaCreateSchedule() {
    const { handleSubmit, register, setValue, reset } = useForm();

    return (
        <>
            <section>
                <p className='raleway-semibold text-gray-400 py-4'>Book yourself a counselling session</p>
                <p className='raleway-semibold text-xl text-gray-800 py-6'>Create Schedule</p>
                <div className='bg-white rounded-[20px] w-full h-fit shadow-md mr-4 p-6'>
                    <div className="flex pb-6">
                        <Input label="Nama Lengkap" type="text" id="name" placeholder="Masukkan nama lengkap" />
                        <Input label="NRP" type="text" id="nrp" placeholder="Masukkan NRP" />
                    </div>
                    <div className="flex pb-6">
                        <Input label="Program Studi" type="text" id="prodi" placeholder="Masukkan nama lengkap" />
                        <Input label="No. Telp (WA)" type="text" id="telp" placeholder="Masukkan No. Telp" />
                    </div>
                    <div className="flex pb-6">
                        <RadioButton label="Tipe Konsultasi" id="tipekonsultasi" />
                        <Input label="Keluhan Singkat" type="text" id="keluhan" placeholder="Masukkan Keluhan Singkat" />
                    </div>
                    <div className="flex pb-6">
                        <DatePicker label="Tanggal"
                            id="date"
                            setValue={(value) => {
                                setValue('', value);
                            }} />
                        <TimeInput label="Start Time" id="starttime" />
                        <TimeInput label="End Time" id="endtime" />
                    </div>
                    <div className='flex justify-end ml-auto px-4 gap-4 border-t-2 py-6'>
                        <button className='border border-[#5182CC] rounded-full px-8 py-3 text-[#5182CC] poppins-regular text-sm'>Cancel</button>
                        <button className='bg-[#5182CC] rounded-full px-8 py-3 text-white poppins-regular text-sm'>Create</button>
                    </div>
                </div>
            </section>
        </>
    );
}