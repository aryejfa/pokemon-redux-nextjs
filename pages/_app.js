import "../styles/global.css";
import { Provider } from "react-redux";
import Store from "../src/redux/store/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;