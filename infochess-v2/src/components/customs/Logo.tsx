import { Link } from "react-router-dom";

function Logo(): React.JSX.Element {
	return (
		<Link to="/" className="flex items-center gap-2">
			<img
				src="/images/infochess-logo.png"
				alt="InfoChess logo where there is a King chess piece in the middle, a bar that grows from small to tall on the left side, and a magnifying glass on the right side"
				className="w-11 h-11"
			/>
			<span className="font-medium text-transparentWhite">InfoChess</span>
		</Link>
	);
}

export default Logo;
