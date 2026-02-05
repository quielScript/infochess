import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { searchPlayer } from "@/services/apiChess";
import { useAppDispatch } from "@/hooks";
import { toast } from "sonner";
import { setSearchedPlayer } from "@/features/chess/chessInfo";
import { Spinner } from "@/components/ui/spinner";

export function SearchForm() {
	const [username, setUsername] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (!username) return;

		try {
			setIsLoading(true);
			const searchedPlayer = await searchPlayer(username);
			dispatch(setSearchedPlayer(searchedPlayer));
			navigate(`/searchPlayer/${username}`, { replace: true });
		} catch (err: unknown) {
			if (err instanceof Error) {
				toast.error(err.message, { position: "top-center" });
			}
		} finally {
			setIsLoading(false);
		}
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
						<Button type="submit">
							{isLoading ? "Searching" : "Search"}
							{isLoading && <Spinner data-icon="inline-start" />}
						</Button>
					</div>
				</Field>
			</FieldGroup>
		</form>
	);
}

export default SearchForm;
