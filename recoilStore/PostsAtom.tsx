import { MediaProps } from "@/components/Media";
import { atom } from "recoil";
import { string } from "yup";
import { User } from "./AuthAtom";
import { RecoilAtomKeys } from "./RecoilAtomKeys";

export type Post = {
  _id: string;
  archive: boolean;
  content: string;
  image?: MediaProps[];
  user_id: User;
  likes?: number;
  hasLiked?: boolean;
  createdAt: string;
  updatedAt?: string;
  comments?: Post[];
};

export const PostDataAtom = atom<{
  content: string;
  image?: MediaProps[];
  archive: boolean;
}>({
  key: RecoilAtomKeys.postDataState,
  default: {
    content: "",
    image: [],
    archive: false,
  },
});

export const PostsAtom = atom<Array<Post>>({
  key: RecoilAtomKeys.postsState,
  default: [],
});

export const PostAtom = atom<Post | undefined>({
  key: RecoilAtomKeys.postState,
  default: undefined,
});
