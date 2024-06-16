import { FC, ReactNode } from "react";
import Header from "./Header";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="mx-auto overflow-hidden flex flex-col min-h-screen font-satoshi">
                <Header />
                <div className="px-3 text-sm pt-5 pb-10">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
