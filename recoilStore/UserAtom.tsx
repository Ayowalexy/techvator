import { atom } from "recoil";

type User = {
  id?: string;
};

const UserAtom = atom<User>({
  key: "userState",
  default: {
    id: null,
  },
});
