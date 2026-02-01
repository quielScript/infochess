import { useState } from "react";
import { Link } from "react-router-dom";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { handleActiveLinkClass } from "@/helpers/helpers";

function NavBar(): React.JSX.Element {
	const [activeNavLink, setActiveNavLink] = useState<string>("searchPlayer");

	return (
		<NavigationMenu className="text-transparentWhite">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link
							to="searchPlayer"
							className={`bg-smokyBlack ${handleActiveLinkClass("searchPlayer", activeNavLink)}`}
							onClick={() => setActiveNavLink("searchPlayer")}
						>
							Search Player
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link
							to="titledPlayers/GM"
							className={`bg-smokyBlack ${handleActiveLinkClass("titledPlayers", activeNavLink)}`}
							onClick={() => setActiveNavLink("titledPlayers")}
						>
							Titled Players
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link
							to="leaderboards/daily"
							className={`bg-smokyBlack ${handleActiveLinkClass("leaderboards", activeNavLink)}`}
							onClick={() => setActiveNavLink("leaderboards")}
						>
							Leaderboards
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link
							to="streamers"
							className={`bg-smokyBlack ${handleActiveLinkClass("streamers", activeNavLink)}`}
							onClick={() => setActiveNavLink("streamers")}
						>
							Streamers
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default NavBar;
