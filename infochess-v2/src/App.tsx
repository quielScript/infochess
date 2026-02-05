import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

import AppLayout from "@/components/customs/AppLayout";
import Player from "@/features/chess/Player";
import TitledPlayers, {
	loader as titledPLayersLoader,
} from "@/features/chess/TitledPlayers";
import Leaderboard, {
	loader as leaderboardsLoader,
} from "@/features/chess/Leaderboard";
import Streamers, {
	loader as streamersLoader,
} from "@/features/chess/Streamers";
import Error from "@/components/customs/Error";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Navigate to="searchPlayer" />,
			},
			{
				path: "searchPlayer",
				element: <Player />,
			},
			{
				path: "searchPlayer/:userNameQuery",
				element: <Player />,
				errorElement: <Error />,
			},
			{
				path: "titledPlayers/:title",
				element: <TitledPlayers />,
				errorElement: <Error />,
				loader: titledPLayersLoader(queryClient),
			},
			{
				path: "leaderboards/:category",
				element: <Leaderboard />,
				errorElement: <Error />,
				loader: leaderboardsLoader(queryClient),
			},
			{
				path: "streamers",
				element: <Streamers />,
				errorElement: <Error />,
				loader: streamersLoader(queryClient),
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
