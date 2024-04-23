import Accordion from '../../components/accordion/accordion';
import question from './../../assets/illustration/faq.svg';

export function Faq() {
    return (
        <section className="py-20 px-4" id="faq">
            <div className="px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="max-w-2xl py-6 lg:px-10">
                    <h1 className="text-3xl poppins-bold mb-3 text-[#5182CC]">FAQ</h1>
                    <div className="border-b-2 w-12 border-[#0077FF] mb-6" />
                    <Accordion/>
                </div>
                <div className="mx-auto max-w-2xl lg:pr-10 lg:pl-20 order-last lg:order-first">
                    <img
                        className="max-w-full"
                        src={question}
                        alt="Empower Minds"
                    />
                </div>
            </div>
        </section>
    );
}
