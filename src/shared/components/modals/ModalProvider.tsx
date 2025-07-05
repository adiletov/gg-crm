import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import FullModal from "./FullModal";

interface ModalContent {
  header: ReactNode;
  body: ReactNode;
}

interface ModalContextValue {
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export const useFullModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useFullModal must be used within <ModalProvider>");
  return ctx;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ModalContent>({
    header: null,
    body: null,
  });

  const openModal = useCallback((content: ModalContent) => {
    setContent(content);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContent({ header: null, body: null });
    document.body.style.overflow = "";
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <FullModal isOpen={isOpen} onClose={closeModal} header={content.header}>
        {content.body}
      </FullModal>
    </ModalContext.Provider>
  );
};
