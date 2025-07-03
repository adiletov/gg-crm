import Input from "@/shared/components/form/input/InputField";
import Label from "@/shared/components/form/Label";
import { EyeCloseIcon, EyeIcon } from "@/shared/icons";
import type { InputProps } from "@/shared/types/form.types";
import { useState, type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & InputProps

export default function PasswordInput(props: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Label>
        Password<span className="text-error-500">*</span>
      </Label>
      <div className="relative">
        <Input
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          {...props}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
        >
          {showPassword ? (
            <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
          ) : (
            <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
          )}
        </span>
      </div>
    </>
  );
}
