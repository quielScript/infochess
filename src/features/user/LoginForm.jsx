import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { register, handleSubmit, reset, formState } = useForm();
	const { errors } = formState;

	function onSubmit(data) {
		const { name } = data;
		dispatch(updateName(name));
		navigate("/app");
		reset();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col items-start space-y-2">
				<label htmlFor="name" className="text-transparentWhite">
					Proceed by entering your name
				</label>
				<div>
					<input
						type="text"
						id="name"
						className="bg-transparent border-[1px] rounded-md border-transparentWhite py-2 px-4 w-full text-transparentWhite"
						placeholder="Enter name"
						{...register("name", {
							required: "Please enter your name",
						})}
					/>
				</div>
				{errors?.name?.message && (
					<p className="text-red-600">{errors.name.message}</p>
				)}
				<Button btnType="normal">Enter</Button>
			</div>
		</form>
	);
}

export default LoginForm;
