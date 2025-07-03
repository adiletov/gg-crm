import Input from "@/shared/components/form/input/InputField";
import Label from "@/shared/components/form/Label";
import { Link } from "react-router";
import WithSociety from "./WithSociety";
import PasswordInput from "./UI/PasswordInput";
import Heading from "./UI/Heading";
import { useForm, type SubmitHandler } from "react-hook-form";
import { emailValidate } from "@/shared/validators/form";
import { useRegisterMutation } from "../store/authApi";

interface IState {
  fullname: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [onRegister ] = useRegisterMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IState>();

  const submitHandler: SubmitHandler<IState> = async (data) => {
    try {
      await onRegister(data).unwrap()
    } catch {}
  };

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <Heading
          title={"Sign Up"}
          description="Enter your email and password to sign up!"
        />
        <WithSociety />
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="space-y-5">
            <Label>
              Full Name<span className="text-error-500">*</span>
            </Label>
            <Input
              {...register("fullname", {
                required: "Fullname is required",
              })}
              error={!!errors.fullname}
              hint={errors.fullname?.message}
              placeholder="Enter your fullname"
            />
            <Label>
              Email<span className="text-error-500">*</span>
            </Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailValidate,
                  message: "Please enter a valid email",
                },
              })}
              error={!!errors.email}
              hint={errors.email?.message}
              placeholder="Enter your email"
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
