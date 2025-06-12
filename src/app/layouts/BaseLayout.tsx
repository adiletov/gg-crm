import type { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div>
      Base layout
      {children}
    </div>
  );
}
