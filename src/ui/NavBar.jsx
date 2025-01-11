import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
	return (
		<header className="bg-smokyBlack">
			<nav className="flex items-center justify-between py-2 mx-auto mt-0 max-w-7xl">
				<Logo />
				<ul className="flex items-center space-x-5 text-transparentWhite">
					<li className="transition-all duration-150 hover:text-oliveGreen">
						<Link to="searchPlayer">Search player</Link>
					</li>
					<li className="transition-all duration-150 hover:text-oliveGreen">
						<Link to="titledPlayers">Titled players</Link>
					</li>
					<li className="transition-all duration-150 hover:text-oliveGreen">
						<Link to="leaderboards">Leaderboards</Link>
					</li>
					<li className="transition-all duration-150 hover:text-oliveGreen">
						<Link to="streamers">Streamers</Link>
					</li>
					<li className="transition-all duration-150 hover:text-oliveGreen">
						<Link to="#">
							<span className="font-bold uppercase">User</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
