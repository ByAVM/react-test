import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Pages } from "../pages";
import { ApiProvider } from "../containers/ApiProvider";

export const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <ApiProvider>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </ApiProvider>
    </ReduxProvider>
  );
};
