import Input from "@/shared/components/form/input/InputField";
import Button from "@/shared/components/ui/button/Button";
import { useFullModal } from "@/shared/components/modals/ModalProvider";
import type { FormEvent } from "react";

export default function CarForm() {
  const { closeModal } = useFullModal();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  };
  return (
    <form
      className="flex flex-col justify-between h-full"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col gap-4">
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
      <div className="w-full flex gap-4">
        <Button className="flex-1" variant="outline" onClick={closeModal}>
          Cancel
        </Button>
        <Button type="submit" className="flex-1">
          Save
        </Button>
      </div>
    </form>
  );
}
