import { Spinner } from "@/components/ui/spinner";

function Loader(): React.JSX.Element {
	return (
		<div className="z-10 absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
			<Spinner className="size-6" />
		</div>
	);
}

export default Loader;
