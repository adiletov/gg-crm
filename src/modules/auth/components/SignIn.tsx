import { Link } from "react-router";
import WithSociety from "./WithSociety";
import PasswordInput from "./UI/PasswordInput";
import Heading from "./UI/Heading";
import { useForm, type SubmitHandler } from "react-hook-form";
import { emailValidate } from "@/shared/validators/form";
import { useLoginMutation } from "../store/authApi";
import Label from "@/shared/components/form/Label";
import Input from "@/shared/components/form/input/InputField";
import Button from "@/shared/components/ui/button/Button";

interface IState {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IState>();
  const [loginMutation, { isLoading, isError }] = useLoginMutation();

  const submitHandler: SubmitHandler<IState> = async (data) => {
    try {
      await loginMutation(data).unwrap();
    } catch {}
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <Heading
          title="Sign In"
          description="Enter your email and password to sign in!"
        />
        <WithSociety />
        {isError && (
          <p className="text-red-500 text-center bg-red-50 p-2 rounded-lg border-1 border-red-500 mb-1">
            Invalid email or password!
          </p>
        )}
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="space-y-6">
            <Label>
              Email <span className="text-error-500">*</span>
            </Label>
            <Input
              placeholder="info@gmail.com"
              required
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailValidate,
                  message: "Please enter a valid email",
                },
              })}
              error={!!errors.email}
              hint={errors.email?.message}
            />
            <PasswordInput
              hint={errors.password?.message}
              error={!!errors.password}
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            <div className="flex items-center justify-end">
              <Link
                to="/reset-password"
                className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400 in-dev"
              >
                Forgot password?
              </Link>
            </div>
            <Button className="w-full" size="sm" disabled={isLoading}>
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
