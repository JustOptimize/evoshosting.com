import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: string[]): string => {
  // This filter make possible to do `${options && result}` without the need of `options ? result : ""`
  // Will remove all "false" and "undefined" values from the array
  //
  return twMerge(clsx(args.filter((i) => i !== "false" && i !== "undefined")));
};
