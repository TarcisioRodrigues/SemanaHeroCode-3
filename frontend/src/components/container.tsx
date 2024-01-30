import { ReactNode } from "react"

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-4 max-w-6xl mx-auto">
            {children}
        </div>
    );
};
