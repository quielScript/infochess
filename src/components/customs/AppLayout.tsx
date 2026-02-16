import { Outlet, useNavigation } from "react-router-dom";

import Header from "@/components/customs/Header";
import Loader from "@/components/customs/Loader";

function AppLayout(): React.JSX.Element {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	return (
		<>
			{isLoading && <Loader />}
			<Header />
			<main>
				<div className="max-w-7xl mx-4 xl:mx-auto bg-smokyBlack mt-20 rounded-t-md p-10 min-h-dvh">
					<Outlet />
				</div>
			</main>
		</>
	);
}

export default AppLayout;
