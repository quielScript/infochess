import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
	return (
		<main>
			<NavBar />
			<Outlet />
		</main>
	);
}

export default AppLayout;
