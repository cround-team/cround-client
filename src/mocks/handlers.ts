import { rest } from "msw";

export const handlers = [
  rest.get("http://54.180.6.174/api/creators/home", (req, res, ctx) => {
    console.log("req.params", req.params);

    const products = [
      {
        id: "22",
        name: "banana",
        quantity: 3,
      },
    ];

    // const product = products.filter((product) => product.id === productId)[0];

    return res(ctx.json(product));
  }),

  rest.get("https://example.com/reviews", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "31",
          author: "길동쓰",
          content: "맛있는 바나나 👍 🍌",
        },
      ])
    );
  }),
];
