import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function InputInline() {
	return (
		<>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="username">Search player by username</FieldLabel>
					<div className="flex gap-3">
						<Input
							type="search"
							id="username"
							placeholder="Search..."
							className="w-sm"
						/>
						<Button type="submit" className="cursor-pointer">
							Search
						</Button>
					</div>
				</Field>
			</FieldGroup>
		</>
	);
}

export default InputInline;
