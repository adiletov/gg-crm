import { Link } from "react-router";
import Button from "../../../shared/components/ui/button/Button";
import Label from "../../../shared/components/form/Label";
import Input from "../../../shared/components/form/input/InputField";
import Checkbox from "../../../shared/components/form/input/Checkbox";
import { useState } from "react";
import WithSociety from "./WithSociety";
import PasswordInput from "./PasswordInput";
import Heading from "./Heading";

export default function SignIn() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <Heading
          title="Sign In"
          description="Enter your email and password to sign in!"
        />
        <WithSociety />
        <form>
          <div className="space-y-6">
            <Label>
              Email <span className="text-error-500">*</span>{" "}
            </Label>
            <Input placeholder="info@gmail.com" />
            <PasswordInput />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox checked={isChecked} onChange={setIsChecked} />
                <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                  Keep me logged in
                </span>
              </div>
              <Link
                to="/reset-password"
                className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Forgot password?
              </Link>
            </div>
            <Button className="w-full" size="sm">
              Sign in
            </Button>
          </div>
        </form>
        <div className="mt-5">
          <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
            Don`t have an account?
            <Link
              to="/auth/sign-up"
              className="text-brand-500 hover:text-brand-600 dark:text-brand-400 ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
