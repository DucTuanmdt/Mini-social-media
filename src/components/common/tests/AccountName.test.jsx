import { render, screen } from "@testing-library/react";
import AccountName from "../AccountName";
import { BrowserRouter } from "react-router-dom";

test("AccountName component render correctly", () => {
  render(<AccountName />, {
    wrapper: BrowserRouter,
  });
  const imageAvatar = screen.getByRole("img");
  expect(imageAvatar).toBeInTheDocument();

  const linkName = screen.getByRole("link");
  expect(linkName).toBeInTheDocument();
});

test("Account name display online status badge", () => {
  render(<AccountName isOnline={true} />, {
    wrapper: BrowserRouter,
  });
  const onlineBadge = screen.getByTestId("online-status");
  expect(onlineBadge).toBeInTheDocument();
});
