import Stress from './../../assets/illustration/stress illustration.png';

export default function Hero() {
    return (
        <section className="py-16 text-center bg-hero" id="home">
            <div className="px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
                <div className="max-w-2xl py-20 pb-10 lg:py-20 lg:pl-20">
                    <div>
                        <h1 className="text-4xl xl:text-5xl lg:text-3xl md:text-5xl sm:text-xl sm:w-full md:w-full lg:w-3/4 font-bold tracking-tight text-[#0A86CC] text-start poppins-bold" style={{ lineHeight: '1.4' }}>
                            Empowering Academic Stress Communication
                        </h1>
                        <p className="mt-6 text-xl pr-10 leading-8 text-gray-600 text-start nunito-regular">
                            <span className='text-[#5182CC]'>Unlocking Voices, Healing Hearts:</span> Providing a Platform for Storytelling and Emotional Support.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 px-4 py-6">
                    <img
                        className="max-w-full xl:max-w-2xl lg:max-w-md md:max-w-2xl sm:max-w-lg"
                        src={Stress}
                        alt="Empower Minds"
                    />
                </div>
            </div>
        </section >
    );
}
