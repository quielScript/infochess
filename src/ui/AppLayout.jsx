import { Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<div>
			App layout
			<Outlet />
		</div>
	);
}

export default AppLayout;
