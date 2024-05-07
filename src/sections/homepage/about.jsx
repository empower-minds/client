import about from './../../assets/illustrations/About.svg';

export function About() {
    return (
        <section className="py-20 px-4" id="about">
            <div className="px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="max-w-2xl py-6 lg:px-10">
                <h1 className="text-3xl poppins-bold mb-3 text-[#5182CC]">About</h1>
                    <div className="border-b-2 w-12 border-[#0077FF] mb-6" />
                    <p className="mb-2 pb-2 pr-6 max-w-xl lg:max-w-xl md:max-w-5xl text-gray-500" style={{ fontSize: '18px', lineHeight: '2' }}>
                        Empower Minds adalah platform daring yang didedikasikan untuk menguatkan komunikasi terkait stres akademik di kalangan mahasiswa.
                    </p>
                    <p className="mb-2 pb-2 pr-6 max-w-xl lg:max-w-xl md:max-w-5xl text-gray-500" style={{ fontSize: '18px', lineHeight: '2' }}>
                        Platform ini memberikan dukungan yang dibutuhkan dalam mengatasi tekanan akademik, stres, dan kecemasan yang sering terjadi pada mereka.
                    </p>
                </div>
                <div className="mx-auto max-w-2xl lg:pr-10 lg:pl-20 md:pt-10 order-last lg:order-first">
                    <img
                        className="max-w-full md:max-w-sm"
                        src={about}
                        alt="Empower Minds"
                    />
                </div>
            </div>
        </section>
    );
}
