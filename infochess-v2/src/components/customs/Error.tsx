import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Error(): React.JSX.Element {
	return (
		<div className="min-h-dvh flex flex-col gap-3 items-center justify-center">
			<h1 className="text-4xl font-semibold">Whoops!</h1>
			<h2 className="text-xl">Something went wrong!</h2>
			<p className="text-sm">
				The page you're looking for isn&apos;t found, we suggest you back to
				home.
			</p>
			<Button asChild size="sm">
				<Link to="/">Back to home page</Link>
			</Button>
		</div>
	);
}

export default Error;
