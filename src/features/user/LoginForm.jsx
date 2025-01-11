import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const [username, setUSername] = useState("");
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		if (username.trim() !== "") {
			navigate("/app");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col items-start space-y-2">
				<label htmlFor="username" className="text-transparentWhite">
					Proceed by entering your name
				</label>
				<input
					required
					type="text"
					id="username"
					name="username"
					className="bg-transparent border-[1px] rounded-md border-transparentWhite py-2 px-4 w-full text-transparentWhite"
					placeholder="Enter name"
					value={username}
					onChange={(e) => setUSername(e.target.value)}
				/>
				<button
					type="submit"
					className="px-8 py-2 text-base bg-white rounded-md text-warmBlack"
				>
					Enter
				</button>
			</div>
		</form>
	);
}

export default LoginForm;
