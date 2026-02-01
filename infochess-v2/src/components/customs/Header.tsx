import Logo from "@/components/customs/Logo";
import NavBar from "@/components/customs/NavBar";

function Header(): React.JSX.Element {
	return (
		<header className="bg-smokyBlack">
			<div className="max-w-7xl mx-auto py-3">
				<div className="flex items-center justify-between">
					<Logo />
					<NavBar />
				</div>
			</div>
		</header>
	);
}

export default Header;
