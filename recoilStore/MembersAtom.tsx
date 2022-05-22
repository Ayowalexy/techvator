import { atom } from "recoil";
import { User } from "./AuthAtom";

export const MembersAtom = atom<Array<User>>({
  key: "membersAtom",
  default: [],
});
