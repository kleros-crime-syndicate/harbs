import React from "react";
import Popup from "reactjs-popup";

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: JSX.Element | ((isOpen: boolean) => JSX.Element) | undefined;
  children: React.ReactNode;
}

const Preview: React.FC<PreviewProps> = ({ trigger, children }) => (
  <Popup trigger={trigger} modal nested>
    {(close) => (
      <div
        className="fixed
                   top-0 left-0 h-screen z-10 w-full
                   flex justify-center items-center
                   bg-slate-800/50 backdrop-blur-md"
        onClick={close}
      >
        {children}
      </div>
    )}
  </Popup>
);

export default Preview;
