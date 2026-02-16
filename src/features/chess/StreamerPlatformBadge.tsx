import { Badge } from "@/components/ui/badge";
import type { StreamingPlatform } from "@/types";

interface StreamerPlatformBadgeProps {
	platforms: StreamingPlatform[];
}

function StreamerPlatformBadge({
	platforms,
}: StreamerPlatformBadgeProps): React.JSX.Element {
	// Find live platforms
	const liveYoutube = platforms.find(
		(platform) => platform.type === "youtube" && platform.is_live,
	);
	const liveTwitch = platforms.find(
		(platform) => platform.type === "twitch" && platform.is_live,
	);

	// Check if platforms exist (even if not live)
	const hasYoutube = platforms.some((platform) => platform.type === "youtube");
	const hasTwitch = platforms.some((platform) => platform.type === "twitch");

	return (
		<>
			{hasYoutube && (
				<Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
					YouTube {liveYoutube && "🟢"}
				</Badge>
			)}
			{hasTwitch && (
				<Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
					Twitch {liveTwitch && "🟢"}
				</Badge>
			)}
		</>
	);
}

export default StreamerPlatformBadge;
