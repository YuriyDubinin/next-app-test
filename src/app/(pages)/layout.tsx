import type { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren<unknown>) {
    return (
        <div>
            * header *
            {children}
        </div>
    );
}