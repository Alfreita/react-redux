import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../reduxConfig/store";
import App from "./DefaultRedux";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
