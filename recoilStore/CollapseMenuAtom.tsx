import { atom } from "recoil";
import { RecoilAtomKeys } from "./RecoilAtomKeys";

export const collapseMenuAtom = atom<boolean>({
  key: RecoilAtomKeys.collapseMenuState,
  default: true,
});
