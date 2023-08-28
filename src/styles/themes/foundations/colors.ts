export const colors = {
  white: "#fff",
  black: "#000",

  neutral50: "#EEEEEE",
  neutral100: "#D6D6D6",
  neutral200: "#BDBDBD",
  neutral300: "#A4A4A4",
  neutral400: "#939393",
  neutral500: "#747474",
  neutral600: "#585858",
  neutral700: "#4B4B4B",
  neutral800: "#363636",
  neutral900: "#1E1E1E",

  primary50: "#FFE1E6",
  primary100: "#FFCCD5",
  primary200: "#FFA9B8",
  primary300: "#FE8196",
  primary400: "#F3526D",
  primary500: "#F23555",
  primary600: "#EB173B",
  primary700: "#D8072A",
  primary800: "#B7001F",
  primary900: "#8C0018",

  dim: "rgba(0, 0, 0, 0.4)",
  rating: "#FFA902",
  disabled: "#f3f3f3",
} as const;

export type ColorType = typeof colors;
