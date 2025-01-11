import { Link } from "react-router-dom";

function Logo() {
	return (
		<Link to="/app">
			<img
				src="/img/infochess-logo.png"
				alt="InfoChess logo where there is a King chess piece in the middle, a bar that grows from small to tall on the left side, and a magnifying glass on the right side"
				className="w-12 h-12"
			/>
		</Link>
	);
}

export default Logo;
