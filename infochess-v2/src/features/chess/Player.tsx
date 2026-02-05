import SearchForm from "@/components/customs/SearchForm";
import { useParams } from "react-router-dom";

function Player(): React.JSX.Element {
	const { usernameQuery } = useParams();

	return (
		<div>
			<SearchForm />
			<div className="text-center mt-20">
				<p className="text-sm">
					Nothing to show here... search a player first.
				</p>
			</div>
		</div>
	);
}

export default Player;
