import { Outlet } from "react-router-dom";

import Header from "@/components/customs/Header";

function AppLayout(): React.JSX.Element {
	return (
		<>
			<Header />
			<main>
				<div className="max-w-7xl mx-auto bg-smokyBlack mt-20 rounded-t-md p-10 min-h-dvh">
					<Outlet />
				</div>
			</main>
		</>
	);
}

export default AppLayout;
