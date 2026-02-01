export function handleActiveLinkClass(
	linkName: string,
	activeLink: string,
): string {
	return activeLink === linkName ? "text-oliveGreen" : "";
}
