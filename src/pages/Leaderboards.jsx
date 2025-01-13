function Leaderboards() {
	return (
		<div className="grid grid-cols-3 p-10 mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack text-transparentWhite">
			<div className="col-span-2 pr-10 border-r border-transparentWhite">
				<div className="flex items-center justify-between mb-5">
					<div className="flex items-center space-x-20">
						<p className="font-bold">Rank</p>
						<p className="font-bold">Player</p>
					</div>
					<div className="flex items-center space-x-20">
						<p className="font-bold">Title</p>
						<p className="font-bold">Score</p>
					</div>
				</div>
				<div className="space-y-4">
					<div className="flex items-center justify-between pb-4 border-b border-transparentWhite">
						<div className="flex items-center space-x-24">
							<p className="font-bold">#1</p>
							<div className="flex items-center space-x-3">
								<img
									src="https://images.chesscomfiles.com/uploads/v1/user/52897514.bafc27e4.200x200o.87ad50d26944.jpeg"
									alt=""
									className="border rounded-md w-14 h-14 border-oliveGreen"
								/>
								<p>FormerProdigy</p>
							</div>
						</div>
						<div className="flex items-center space-x-20">
							<p>GM</p>
							<p>12345</p>
						</div>
					</div>
				</div>
			</div>
			<div className="pl-10">
				<p className="font-bold text-center">Categories</p>
			</div>
		</div>
	);
}

export default Leaderboards;
