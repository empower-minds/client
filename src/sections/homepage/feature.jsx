import React from 'react';
import { Card } from '../../components/card/card';
import { features } from '../../data';

export function Feature() {
    return (
        <section className="py-20 px-4 bg-[#F4F8FF] flex flex-col items-center" id="feature">
            <h1 className="text-3xl poppins-bold mb-3 text-[#5182CC]">
                <span className='text-[#76B1F3]'>Our</span> Feature
            </h1>
            <div className="border-b-2 w-12 border-[#0077FF] mb-6" />
            <div className="max-w-7xl mx-auto py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            imageSrc={feature.image}
                            title={feature.title}
                            description={feature.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
