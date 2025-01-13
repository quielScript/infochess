import { Link, useRouteError } from "react-router-dom";

function Error() {
	const error = useRouteError();

	return (
		<div className="p-5 text-transparentWhite">
			<h1>Something went wrong 😢</h1>
			<p>{error.data || error.message}.</p>
			<p>
				Please refresh the page or go back to main page by clicking the link
				below.
			</p>
			<Link to="/app" className="text-brightCyan">
				&larr; Back to Main page
			</Link>
		</div>
	);
}

export default Error;
