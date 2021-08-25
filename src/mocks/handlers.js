import { rest } from "msw";
import { baseUrl } from "../configs/api-config.json";

export const handlers = [
  // getUserApi
  rest.get(`${baseUrl}/users/:userId`, (req, res, ctx) => {
    return res(
      ctx.json({
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
  }),
  // getFriendsOnlineApi
  rest.get(`${baseUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          createdAt: "2021-08-03T12:20:38.627Z",
          name: "Cody Gerhold",
          avatar: "https://cdn.fakercloud.com/avatars/itstotallyamy_128.jpg",
          coverImage: "http://placeimg.com/640/480/nightlife",
          qoutSentence:
            "Quod quis molestiae molestias inventore sint voluptatibus sunt tenetur.",
          totalFriends: 38,
          token: "f1252068-aa6b-4364-96be-77bdcca99764",
          totalFollower: 62,
          company: "Nolan - Ullrich",
          city: "Union City",
          university: "Open-source explicit hub",
          email: "Noelia.Haley32@yahoo.com",
          password: "36V0EC5IWXB8VBy",

          id: "1",
        },
        {
          createdAt: "2021-08-03T17:19:09.943Z",
          name: "Gilbert Dooley",
          avatar: "https://cdn.fakercloud.com/avatars/ponchomendivil_128.jpg",
          coverImage: "http://placeimg.com/640/480/sports",
          qoutSentence: "Qui harum quia.",
          totalFriends: 80,
          token: "d1627e74-33ae-4acf-b695-04bcb343c1ab",
          totalFollower: 14,
          company: "Christiansen, Corwin and Wisozk",
          city: "Port Glendaview",
          university: "Advanced empowering moratorium",
          email: "Haylie98@yahoo.com",
          password: "ETUjpEFezTrn766",
          id: "2",
        },
        {
          createdAt: "2021-08-04T02:07:47.377Z",
          name: "Catherine Gleichner",
          avatar: "https://cdn.fakercloud.com/avatars/cherif_b_128.jpg",
          coverImage: "http://placeimg.com/640/480/abstract",
          qoutSentence:
            "Sunt quam iste est aut et consequatur sed rem voluptate.",
          totalFriends: 88,
          token: "90cb7692-4500-46bd-a3fb-13832e105f82",
          totalFollower: 90,
          company: "Thiel - Larkin",
          city: "Ondrickaland",
          university: "Polarised cohesive focus group",
          email: "Saige96@hotmail.com",
          password: "lGQWyWbP9539fm2",
          id: "3",
        },
      ])
    );
  }),

  rest.post(`${baseUrl}/users/:userId/articles`, (req, res, ctx) => {
    return res(
      ctx.json({
        createdAt: "2021-08-03T07:03:53.353Z",
        content: "Voluptatibus dolorem laboriosam aut qui illo vero quae.",
        image: "http://placeimg.com/640/480/people",
        totalLike: 29,
        totalComment: 32,
        haveImage: 87,
        id: "1",
        userId: "1",
      })
    );
  }),
  rest.get(`${baseUrl}/users/:userId/articles`, (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json([
        {
          createdAt: "2021-08-03T07:03:53.353Z",
          content: "Voluptatibus dolorem laboriosam aut qui illo vero quae.",
          image: "http://placeimg.com/640/480/people",
          totalLike: 29,
          totalComment: 32,
          haveImage: 87,
          id: "1",
          userId: userId,
          user: {
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
            id: userId,
          },
        },
      ])
    );
  }),
  rest.get(`${baseUrl}/general`, (req, res, ctx) => {
    return res(ctx.json([]));
  }),
  rest.options(`${baseUrl}/*`, (req, res, ctx) => {
    return res(ctx.json({}));
  }),
];
