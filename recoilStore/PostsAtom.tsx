import { useEffect } from "react";
import { atom } from "recoil";
import { User } from "./AuthAtom";
import { RecoilAtomKeys } from "./RecoilAtomKeys";

export type Post = {
  _id: string;
  archive: boolean;
  content: string;
  user_id: User;
};

export const PostAtom = atom<Array<Post>>({
  key: RecoilAtomKeys.postState,
  default: [],
});
