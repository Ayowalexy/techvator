import { atom } from "recoil";
import { User } from "./AuthAtom";

export type Post = {
  _id: string;
  archive: boolean;
  content: string;
  user_id: User;
};

export const PostAtom = atom<Array<Post>>({
  key: "PostAtom",
  default: [],
});
