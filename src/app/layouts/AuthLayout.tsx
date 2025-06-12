import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-cyan-100 p-4 rounded-xl text-center">
        Auth layout
        {children}
      </div>
    </div>
  );
}
