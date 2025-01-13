import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";
import { Link } from "react-router-dom";

function UserProfile() {
	const username = useSelector(getUsername);

	return (
		<div className="flex items-center justify-center mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack text-transparentWhite h-96">
			<div className="flex flex-col items-center space-y-3">
				<p className="text-xl font-bold text-white">{username}</p>
				<Link to="/">Log out</Link>
			</div>
		</div>
	);
}

export default UserProfile;
