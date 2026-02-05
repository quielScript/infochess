import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import store from "@/store";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Toaster />
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
