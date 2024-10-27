import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";



export default function Headers({ titre, theme }) {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        // Mettez à jour la valeur de isShowing après que le composant ait été monté
        setIsShowing(true);
    }, []);
    const handleLinkClick = () => {
        // Define what should happen when the link is clicked
        // For example, navigate to a specific URL
        window.open("https://docs.google.com/forms/d/1nxWiaj88LY7R-poxxlTiUxdvyIH5hL5eBHFjgsfsKGg/viewform?edit_requested=true", "_blank");
    };

    // Conditionally render a third element above the theme if titre is 'Les membres'
    const renderAdditionalElement = () => {
        if (titre === 'Les Membres') {
            return (
                <span className="cursor-pointer text-blue-500"  onClick={handleLinkClick} >
                Cliquez ici pour adhérer au Consortium
                </span>
                // <a
                //     href="https://nakala.fr/"
                //     target="_blank"
                //     rel="noopener noreferrer"
                //     className="block text-blue-600 font-medium mb-4 underline cursor-pointer"
                //     onClick={handleLinkClick}
                // >
                //     Cliquez ici pour adhérer au Consortium
                // </a>
            );
        }
        return null; // Return null if titre is not 'Les membres'
    };

    return (
        <Transition
            show={isShowing}
            enter="transition-transform duration-500"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-500"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <header className="bg-gray-200 md:w-3/5 lg:w-2/5 border-r border-arianBord">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl font-light font-jura text-gray-900 sm:text-3xl">
                                {titre}
                            </h2>
                            <p className="font-thin mt-1.5 text-xl text-arianBord font-jura ">
                                {theme}
                            </p>
                            {renderAdditionalElement()}
                        </div>
                    </div>
                </div>
            </header>
        </Transition>
    )
}