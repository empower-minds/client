import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { faqs } from "../../data";

export default function Accordion() {
    const [activeElement, setActiveElement] = useState(null);

    const handleClick = (value) => {
        setActiveElement(prevState => (prevState === value ? null : value));
    };

    return (
        <>
            {faqs.map((item) => (
                <div key={item.id} className="border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 w-full md:w-auto rounded-[15px] mb-4">
                    <h2 className="mb-0">
                        <button
                            className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white ${
                                activeElement === item.id && `text-primary font-semibold [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            }`}
                            type="button"
                            onClick={() => handleClick(item.id)}
                            aria-expanded={activeElement === item.id ? "true" : "false"}
                            aria-controls={`collapse${item.id}`}
                        >
                            {item.question}
                            <span
                                className={`${
                                    activeElement === item.id
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529] dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === item.id}
                        className="!mt-0 !rounded-b-none !shadow-none"
                        id={`collapse${item.id}`}
                    >
                        <div className="px-5 py-4">
                            {item.answer}
                        </div>
                    </TECollapse>
                </div>
            ))}
        </>
    );
}
