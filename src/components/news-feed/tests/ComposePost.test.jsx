import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-util";
import userEvent from "@testing-library/user-event";
import ComposePost from "../ComposePost";
import App from "../../../App";
import Cookies from "js-cookie";
import { foreAuthorize } from "../../../test-utils/authorizationMock";

test("Button post is disabled if input is empty", () => {
  render(<ComposePost />);
  const buttonPost = screen.getByRole("button", {
    name: "Post",
  });
  expect(buttonPost).toBeDisabled();

  const inputContent = screen.getByRole("textbox");
  userEvent.clear(inputContent);
  userEvent.type(inputContent, "Hi");
  expect(buttonPost).toBeEnabled();

  userEvent.clear(inputContent);
  expect(buttonPost).toBeDisabled();
});

test("Input content is cleared and button post is disabled after create post successful", async () => {
  foreAuthorize();
  Cookies.get = jest.fn().mockImplementation(() => "1");
  render(<App />);
  const buttonPost = screen.getByRole("button", {
    name: "Post",
  });

  const inputContent = screen.getByTestId("post-input");
  userEvent.clear(inputContent);
  userEvent.type(inputContent, "Hi");
  userEvent.click(buttonPost);

  await waitFor(async () => {
    expect(inputContent.value).toBe("");
    expect(buttonPost).toBeDisabled();
  });
});
