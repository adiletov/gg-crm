import Checkbox from "@/shared/components/form/input/Checkbox";
import Input from "@/shared/components/form/input/InputField";
import Label from "@/shared/components/form/Label";
import { useState } from "react";
import { Link } from "react-router";
import WithSociety from "./WithSociety";
import PasswordInput from "./PasswordInput";
import Heading from "./Heading";

export default function SignUp() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <Heading
          title={"Sign Up"}
          description="Enter your email and password to sign up!"
        />
        <WithSociety />
        <form>
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label>
                  First Name<span className="text-error-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="sm:col-span-1">
                <Label>
                  Last Name<span className="text-error-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <Label>
              Email<span className="text-error-500">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <PasswordInput />
            <div className="flex items-center gap-3">
              <Checkbox
                className="w-5 h-5"
                checked={isChecked}
                onChange={setIsChecked}
              />
              <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                By creating an account means you agree to the{" "}
                <span className="text-gray-800 dark:text-white/90">
                  Terms and Conditions,
                </span>
                and our
                <span className="text-gray-800 dark:text-white">
                  Privacy Policy
                </span>
              </p>
            </div>
            <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-5">
          <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
            Already have an account?
            <Link
              to="/auth"
              className="text-brand-500 hover:text-brand-600 dark:text-brand-400 ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
