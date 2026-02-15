import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { handleActiveLinkClass } from "@/helpers/helpers";

function NavBar(): React.JSX.Element {
	const [activeNavLink, setActiveNavLink] = useState<string>("searchPlayer");

	const navItems = [
		{
			label: "Search Player",
			to: "searchPlayer",
			activeKey: "searchPlayer",
		},
		{
			label: "Titled Players",
			to: "titledPlayers/GM",
			activeKey: "titledPlayers",
		},
		{
			label: "Leaderboards",
			to: "leaderboards/daily",
			activeKey: "leaderboards",
		},
		{
			label: "Streamers",
			to: "streamers",
			activeKey: "streamers",
		},
	];

	return (
		<NavigationMenu className="text-transparentWhite">
			<NavigationMenuList>
				{/* Desktop */}
				{navItems.map((item) => (
					<NavigationMenuItem key={item.activeKey} className="max-md:hidden">
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link
								to={item.to}
								className={`bg-smokyBlack ${handleActiveLinkClass(
									item.activeKey,
									activeNavLink,
								)}`}
								onClick={() => setActiveNavLink(item.activeKey)}
							>
								{item.label}
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}

				{/* Mobile */}
				<div className="px-4">
					<DropdownMenu>
						<DropdownMenuTrigger className="md:hidden" asChild>
							<Button variant="outline" size="icon">
								<MenuIcon />
								<span className="sr-only">Menu</span>
							</Button>
						</DropdownMenuTrigger>

						<DropdownMenuContent className="w-56 md:hidden" align="end">
							<DropdownMenuGroup>
								{navItems.map((item) => (
									<DropdownMenuItem key={item.activeKey} asChild>
										<Link
											to={item.to}
											className={`${handleActiveLinkClass(
												item.activeKey,
												activeNavLink,
											)}`}
											onClick={() => setActiveNavLink(item.activeKey)}
										>
											{item.label}
										</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default NavBar;
