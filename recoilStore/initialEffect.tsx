// Atom effect that reads from initial

export let initialRecoilState = null;

export const initialEffect =
  (key) =>
  ({ setSelf }) => {
    if (initialRecoilState != null && initialRecoilState[key] != undefined)
      setSelf(initialRecoilState[key]);
  };
