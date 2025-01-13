function StreamersList() {
	return (
		<div className="p-10 mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack text-transparentWhite">
			<div className="flex items-center justify-between mb-5">
				<p className="font-bold">Player</p>
				<div className="flex items-center space-x-10">
					<p className="font-bold">Channel</p>
					<p className="font-bold">Status</p>
				</div>
			</div>
			<div className="space-y-4">
				<div className="flex items-center justify-between pb-4 border-b border-transparentWhite">
					<div className="flex items-center space-x-3">
						<img
							src="https://images.chesscomfiles.com/uploads/v1/user/1715324.840b7522.50x50o.71a0c2d59885.jpg"
							alt=""
							className="border rounded-md w-14 h-14 border-oliveGreen"
						/>
						<p className="font-medium">Test</p>
					</div>
					<div className="flex items-center space-x-16">
						<a href="#" className="font-medium text-brightCyan">
							View
						</a>
						<p className="font-medium text-red-600">Live</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StreamersList;
