import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Error(): React.JSX.Element {
	const error = useRouteError();

	const title = "Whoops!";
	let message = "Something went wrong!";

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			message = error.statusText || "The page you're looking for wasn't found.";
		} else if (error.status === 400) {
			message = error.statusText || "Invalid request.";
		} else {
			message = error.statusText || "Unexpected error occurred.";
		}
	}

	return (
		<div className="min-h-dvh flex flex-col gap-3 items-center justify-center">
			<h1 className="text-4xl font-semibold">{title}</h1>
			<h2 className="text-xl">{message}</h2>

			<p className="text-sm">We suggest going back to the home page.</p>

			<Button asChild size="sm">
				<Link to="/">Back to home page</Link>
			</Button>
		</div>
	);
}

export default Error;
