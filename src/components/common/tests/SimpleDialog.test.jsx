import { render, screen } from "@testing-library/react";
import SimpleDialog from "../SimpleDialog";

test("Simple dialog is hidden by default", () => {
  render(
    <SimpleDialog>
      <h1>Some title</h1>
    </SimpleDialog>
  );

  const notContent = screen.queryByRole("heading", {
    name: "Some title",
  });
  expect(notContent).not.toBeInTheDocument();
});

test("Simple dialog display correctly", () => {
  render(
    <SimpleDialog show={true}>
      <h1>Some title</h1>
    </SimpleDialog>
  );

  const textHeader = screen.getByRole("heading", {
    name: "Some title",
  });
  expect(textHeader).toBeInTheDocument();
});
