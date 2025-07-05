import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = (isOpen: boolean) => setIsOpen(isOpen);
  return {
    isOpen,
    onOpen: () => modalHandler(true),
    onClose: () => modalHandler(false),
  };
}
