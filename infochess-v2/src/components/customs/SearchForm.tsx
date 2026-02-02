import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export function SearchForm() {
	const [username, setUsername] = useState<string>("");
	const navigate = useNavigate();

	// TODO: HANDLE PLAYER SEARCH
	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (!username) return;

		navigate(`/searchPlayer/${username}`);
	}

	return (
		<form onSubmit={handleSubmit}>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="username">Search player by username</FieldLabel>
					<div className="flex gap-3">
						<Input
							type="search"
							id="username"
							placeholder="Search..."
							className="w-sm"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<Button type="submit" className="cursor-pointer">
							Search
						</Button>
					</div>
				</Field>
			</FieldGroup>
		</form>
	);
}

export default SearchForm;
