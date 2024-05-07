export const Input = (props) => {
  const { label, type, id, placeholder, register } = props;

  return (
    <div className="flex flex-col w-full gap-2 mr-2 relative">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="mb-2 text-sm font-medium text-[#5182CC] dark:text-[#5182CC] ml-1"
        >
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        name={name}
        className="border border-gray-300 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#5182CC] dark:focus:border-blue-500"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};
