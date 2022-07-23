import type { PopupProps, PopupActions } from "reactjs-popup/dist/types";

declare module "reactjs-popup" {
  const Popup: React.ForwardRefExoticComponent<
    (PopupProps | { children: (close: () => void) => JSX.Element }) & React.RefAttributes<PopupActions>
  >;
  export = Popup;
}
