import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export default function Header() {
    const [hideConnectBtn, setHideConnectBtn] = useState(false);
    const { connect } = useConnect();

    useEffect(() => {
        if (window.ethereum && window.ethereum.isMiniPay) {
            setHideConnectBtn(true);
            connect({ connector: injected({ target: "metaMask" }) });
        }
    }, [connect]);

    return (
        <Disclosure as="nav" className="bg-primary-grey">
            {({ open }) => (
                <>
                    <div className="max-w-3xl mx-auto py-3 px-2">
                        <div className="space-y-3 items-center justify-center">
                            <Link href={'/'}>
                                <Image
                                    className="block h-8 w-auto"
                                    src="/logo.svg"
                                    width="24"
                                    height="24"
                                    alt="Carus Logo"
                                />
                            </Link>
                            <div className="">
                                {/* Nav content */}
                            </div>
                            <div className="flex items-center">
                                {!hideConnectBtn && (
                                    <ConnectButton />
                                )}
                            </div>
                        </div>
                    </div>

                </>
            )}
        </Disclosure>
    );
}
