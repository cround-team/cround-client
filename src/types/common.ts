export type KeyOf<T> = Extract<keyof T, string>;

export type StringMap = {
  [key: string]: string;
};

export type BooleanMap = {
  [key: string]: boolean;
};
