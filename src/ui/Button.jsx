function Button({ btnType, children }) {
	const base = " px-8 py-2 text-base rounded-md";
	const style = {
		normal: base + " bg-white text-warmBlack",
		logout: base + " bg-red-600 text-white",
	};

	return (
		<button type="submit" className={`${style[btnType]}`}>
			{children}
		</button>
	);
}

export default Button;
