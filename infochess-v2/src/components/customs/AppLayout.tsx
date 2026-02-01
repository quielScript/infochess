import { Outlet } from "react-router-dom";

import Header from "@/components/customs/Header";

function AppLayout(): React.JSX.Element {
	return (
		<>
			<Header />

			<Outlet />
		</>
	);
}

export default AppLayout;
