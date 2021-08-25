// create localStorageMock
var localStorageMock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

export const foreAuthorize = () => {
  // mock Cookies
  jest.mock("js-cookie", () => ({
    get: (key) =>
      ({
        token: "123456",
      }[key]),
  }));

  // mock localstorage
  window.localStorage.setItem(
    "user",
    JSON.stringify({
      createdAt: "2021-08-03T12:20:38.627Z",
      name: "Mark Zucker",
      avatar: "https://cdn.fakercloud.com/avatars/itstotallyamy_128.jpg",
      coverImage: "http://placeimg.com/640/480/nightlife",
      qoutSentence:
        "Quod quis molestiae molestias inventore sint voluptatibus sunt tenetur.",
      totalFriends: 38,
      token: "f1252068-aa6b-4364-96be-77bdcca99764",
      totalFollower: 62,
      company: "Facebook",
      city: "New York",
      university: "Harvard",
      email: "mark123@gmail.com",
      password: "123456",
      id: "1",
    })
  );
};
