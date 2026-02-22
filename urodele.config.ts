export const config = {
  github: {
    login: "2imatrader", // github login name, not user name
    repo: "2imatrader.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "2imatrader",
    brand: "2imatrader ",
    description: "Less is more",
  },
  footer: {
    copyright: "©  2imatrader  ·  since 2026    ·",
    copyrightUrl: "https://2imatrader.github.io",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
