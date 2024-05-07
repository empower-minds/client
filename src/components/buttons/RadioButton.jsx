export function RadioButton({ label, id }) {
    return (
        <main className="grid items-center mr-4">
            <div className="flex justify-between">
                <label
                    htmlFor={id}
                    className="mb-2 text-sm font-medium text-[#5182CC] dark:text-[#5182CC] ml-1"
                >
                    {label}
                </label>
            </div>
            <div className="grid w-56 grid-cols-2 gap-2 rounded-full bg-gray-200 p-2 mt-2">
                <div>
                    <input type="radio" name="option" id="1" value="1" className="peer hidden" checked />
                    <label htmlFor="1" className="block cursor-pointer select-none rounded-full w-24 p-2 text-center peer-checked:text-blue-500 peer-checked:font-semibold peer-checked:bg-white">Online</label>
                </div>

                <div>
                    <input type="radio" name="option" id="2" value="2" className="peer hidden" />
                    <label htmlFor="2" className="block cursor-pointer select-none rounded-full py-2 px-6 text-center peer-checked:text-blue-500 peer-checked:font-semibold peer-checked:bg-white">Offline</label>
                </div>
            </div>
        </main>
    )
}