import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
	const username = useSelector(getUsername);

	return <span className="font-bold uppercase">{username}</span>;
}

export default Username;
