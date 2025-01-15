export function formatDate(timestamp) {
	// Convert the Unix timestamp (seconds) to milliseconds
	const date = new Date(timestamp * 1000);

	// Get the components of the date
	const options = { year: "numeric", month: "long", day: "numeric" };

	// Format the date
	return date.toLocaleDateString("en-US", options);
}

export function handleActiveLinkClass(linkName, activeLink) {
	return activeLink === linkName ? "text-oliveGreen" : "";
}
