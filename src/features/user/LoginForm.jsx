function LoginForm() {
	return (
		<form>
			<div className="flex flex-col items-start space-y-2">
				<label htmlFor="username" className="text-transparentWhite">
					Proceed by entering your name
				</label>
				<input
					type="text"
					id="username"
					name="username"
					className="bg-transparent border-[1px] rounded-md border-transparentWhite py-2 px-4 w-full text-transparentWhite"
					placeholder="Enter name"
				/>
				<button className="px-8 py-2 text-base bg-white rounded-md text-warmBlack">
					Enter
				</button>
			</div>
		</form>
	);
}

export default LoginForm;
