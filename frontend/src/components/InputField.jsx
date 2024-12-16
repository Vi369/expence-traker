import {twMerge} from "tailwind-merge";
function InputField({ label, id, name, type = "text", onChange, value, classNameForLabel = "", classNameForInput = "", placeholder = "" , required = false}) {
	return (
		<div>
			<label htmlFor={id} className={twMerge("block text-sm font-medium text-gray-700", classNameForLabel)}>
				{label}
			</label>
			<input
				className={twMerge(
					"mt-1 p-2 w-full border rounded-md text-black focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300",
					classNameForInput
				)}
				id={id}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder= {placeholder}
				required = {required}
			/>
		</div>
	);
};

export default InputField;