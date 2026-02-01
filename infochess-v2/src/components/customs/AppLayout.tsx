import { Outlet } from "react-router-dom";

function AppLayout(): React.JSX.Element {
	return (
		<div>
			<h1>AppLayout</h1>
			<Outlet />
		</div>
	);
}

export default AppLayout;
