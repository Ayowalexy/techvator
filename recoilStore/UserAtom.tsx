import { atom } from "recoil";
import { initialEffect } from "./initialEffect";

type User = {
  id?: string;
};

const UserAtom = atom<User>({
  key: "userState",
  default: {
    id: null,
  },
  effects_UNSTABLE: [initialEffect("userState")],
});
