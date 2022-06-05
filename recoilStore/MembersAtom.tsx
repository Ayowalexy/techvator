import { atom } from "recoil";
import { User } from "./AuthAtom";
import { RecoilAtomKeys } from "./RecoilAtomKeys";

export const MembersAtom = atom<Array<User>>({
  key: RecoilAtomKeys.membersState,
  default: [],
});
