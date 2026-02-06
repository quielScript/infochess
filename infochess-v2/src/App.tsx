import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "@/components/customs/AppLayout";
import Player, { loader as playerLoader } from "@/features/chess/Player";
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
		errorElement: <Error />,
		path: "/",
		element: <AppLayout />,
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
				path: "searchPlayer/:usernameQuery",
				element: <Player />,
				loader: playerLoader,
			},
			{
				path: "titledPlayers/:title",
				element: <TitledPlayers />,
				loader: titledPLayersLoader(queryClient),
			},
			{
				path: "leaderboards/:category",
				element: <Leaderboard />,
				loader: leaderboardsLoader(queryClient),
			},
			{
				path: "streamers",
				element: <Streamers />,
				loader: streamersLoader(queryClient),
			},
		],
	},
]);

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
