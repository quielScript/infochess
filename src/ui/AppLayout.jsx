import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Loader from "./Loader";

function AppLayout() {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	return (
		<main>
			{isLoading && <Loader />}

			<NavBar />
			<Outlet />
		</main>
	);
}

export default AppLayout;
