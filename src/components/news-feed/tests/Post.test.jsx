// import { render, screen } from "@testing-library/react";
import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-util";
import userEvent from "@testing-library/user-event";
import Post from "../Post";

const mockData = {
  createdAt: "2021-08-03T07:03:53.353Z",
  content: "Voluptatibus dolorem laboriosam aut qui illo vero quae.",
  image: "http://placeimg.com/640/480/people",
  totalLike: 29,
  totalComment: 32,
  haveImage: 87,
  id: "1",
  userId: "1",
  user: {
    name: "Cody Gerhold",
    avatar: "https://cdn.fakercloud.com/avatars/itstotallyamy_128.jpg",
    id: "1",
  },
};

test("Edit p", () => {});
