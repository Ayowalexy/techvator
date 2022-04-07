import { atom } from "recoil";

export const collapseMenuAtom = atom<boolean>({
  key: "collapseMenuState",
  default: false,
});
