import Layout from "@/components/layouts/Layout";
import {Provider} from 'react-redux'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
