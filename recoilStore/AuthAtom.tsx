import { atom, selector, selectorFamily } from "recoil";
import { RecoilAtomKeys } from "./RecoilAtomKeys";
// import { initialEffect } from "./initialEffect";

export type User = {
  _id?: string;
  avatar?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  role?: string;
  active?: string;
  token?: string;
  refreshToken?: string;
};

export const AuthAtom = atom<User>({
  key: RecoilAtomKeys.userState,
  default: {
    _id: null,
    avatar: null,
    first_name: null,
    last_name: null,
    email: null,
    role: null,
    active: null,
    token: null,
  },
  // effects_UNSTABLE: [initialEffect("userState")],
});

// Selectors
export const isAuthenticatedSelector = selector({
  key: RecoilAtomKeys.isAuthenticatedSelector,
  get: ({ get }) => {
    const user = get(AuthAtom);
    return !!user.token;
  },
});

export const getFullNameSelector = selectorFamily({
  key: RecoilAtomKeys.getFullNameSelector,
  get: (user: User) => () => {
    // const user = get(AuthAtom);

    if (user && user.first_name && user.last_name) {
      const firstName =
        user.first_name.charAt(0).toUpperCase() +
        user.first_name.slice(1, user.first_name.length);
      const lastName =
        user.last_name.charAt(0).toUpperCase() +
        user.last_name.slice(1, user.last_name.length);
      return firstName + " " + lastName;
    }
  },
});
