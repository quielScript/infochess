import LoginForm from "../features/user/LoginForm";

function Home() {
	return (
		<div className="flex items-center justify-center min-h-dvh">
			<div>
				<h1 className="mb-8 text-4xl font-bold text-center text-white">
					InfoChess
				</h1>
				<LoginForm />
			</div>
		</div>
	);
}

export default Home;
