import SearchForm from "@/components/customs/SearchForm";

function Player(): React.JSX.Element {
	return (
		<div>
			<SearchForm />
			<div className="text-center mt-20">
				<p>Nothing to show here... search a player first.</p>
			</div>
		</div>
	);
}

export default Player;
