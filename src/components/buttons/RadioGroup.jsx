import React from 'react';
import { skala_dass } from '../../data';

export function RadioGroup() {
  return (
    <>
      <main className="max-w-screen-xl py-6 flex flex-col items-center">
        <div className="flex w-full relative">
          {skala_dass.map((option, index) => (
            <div key={index} className="lg:w-1/4 sm:w-fit px-2">
              <input
                type="radio"
                id={`option${index + 1}`}
                name="radio-group"
                className="appearance-none hidden"
              />
              <label
                htmlFor={`option${index + 1}`}
                className="cursor-pointer sm:text-sm sm:px-8 flex items-center justify-center truncate uppercase select-none poppins-light text-[#1486E1] rounded-full border-2 border-[#1486E1] py-2 hover:bg-[#1486E1] hover:text-white"
              >
                {option.skala}
              </label>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}