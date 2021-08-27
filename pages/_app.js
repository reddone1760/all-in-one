import { Provider } from "react-redux";
import store from "../app/store";
import Application from "../components/App";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 2,
  color: "rgba(147, 197, 253)",
  className: "page-transition",
  delay: 0,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Application>
        <Component {...pageProps} />
      </Application>
    </Provider>
  );
}

export default MyApp;
