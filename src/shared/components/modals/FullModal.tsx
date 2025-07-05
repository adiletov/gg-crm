import {
  useEffect,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  header: string | ReactNode;
}

const ANIMATION_DURATION = 300;

const FullModal = ({
  isOpen,
  onClose,
  children,
  header,
}: IProps & PropsWithChildren) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setAnimateIn(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setAnimateIn(false);
      document.body.style.overflow = "";
      const timeout = setTimeout(
        () => setShouldRender(false),
        ANIMATION_DURATION
      );
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (typeof window === "undefined" || !shouldRender) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          animateIn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-md bg-white z-50 shadow-lg
                    transition-transform duration-300 ease-in-out
                    ${animateIn ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">{header}</h2>
          <button onClick={onClose}>✖</button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

export default FullModal;
