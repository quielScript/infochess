export function handleActiveLinkClass(
	linkName: string,
	activeLink: string,
): string {
	return activeLink === linkName ? "text-oliveGreen" : "";
}

export function formatDate(timestamp: number): string {
	// Convert the Unix timestamp (seconds) to milliseconds
	const date = new Date(timestamp * 1000);

	// Get the components of the date
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	// Format the date
	return date.toLocaleDateString("en-US", options);
}
