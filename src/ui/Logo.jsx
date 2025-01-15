import { Link } from "react-router-dom";

function Logo({ onClick }) {
	return (
		<Link to="/app" onClick={onClick}>
			<img
				src="/img/infochess-logo.png"
				alt="InfoChess logo where there is a King chess piece in the middle, a bar that grows from small to tall on the left side, and a magnifying glass on the right side"
				className="w-12 h-12"
			/>
		</Link>
	);
}

export default Logo;
