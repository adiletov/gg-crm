import { Navigate, Outlet } from "react-router";
import ThemeTogglerTwo from "../theme/ThemeTogglerTwo";
import { useAppSelector } from "../store";

export default function AuthLayout() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  if(isAuth) return <Navigate to={'/'}/>
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        <Outlet />
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            <div className="flex flex-col items-center max-w-xs">
              <h1 className="text-white text-3xl">GG-car</h1>
              <p className="text-center text-gray-400 dark:text-white/60">
                GG-car is a modern online platform for buying, selling, and
                renting cars. Our mission is to make the process of choosing and
                purchasing a vehicle as simple, convenient, and transparent as
                possible for every user.
              </p>
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
