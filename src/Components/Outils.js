export default function Outils() {
    const allTools = [
        {
            img: process.env.PUBLIC_URL + "logos/nak.png",
            title: "FAIRiser vos données",
            name: "Nakala",
            lien: "https://nakala.fr/"
        },
        {
            img: process.env.PUBLIC_URL + "logos/mynkl.png",
            title: "FAIRiser vos données",
            name: "Mynkl",
            lien: "https://mynkl.huma-num.fr/"
        },
        {
            img: process.env.PUBLIC_URL + "logos/TXM.png",
            title: "Fouiller vos données",
            name: "TXM",
            lien: " https://txm.huma-num.fr"
        },
        {
            img: process.env.PUBLIC_URL + "logos/nak.png",
            title: "Fouiller vos données",
            name: "Nakala Press",
            lien: "https://nakala.fr/"
        },
        {
            img: process.env.PUBLIC_URL + "logos/ecnou.png",
            title: "Exposer vos données",
            name: "E-C@na",
            lien: "https://ecana.hypotheses.org/"
        }
    ]
    return (
        <section className="md:mx-10 lg:mx-16 bg-gray-100/60 p-5 font-jura mt-10 mb-16" id="outils">
            <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12  lg:grid-cols-2">
                {allTools.map((item) =>


                    <article
                        id={item}
                        className="  border-t  border-arianRed overflow-hidden group  bg-white shadow-sm">
                        <img
                            alt="Office"
                            src={item.img}
                            className="shadow-md border border-black h-40 md:h-64  lg:h-64 w-full object-cover border-black transition duration-500 group-hover:scale-105 sm:h-40"

                        />

                        <div className="p-4 sm:p-6">
                            <a
                                href={item.lien}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="group mt-4 hover:text-arianRed/70 inline-flex items-center gap-1 text-sm font-medium text-arianRed"
                            >
                                {item.title}

                            </a>


                            <h3 className="text-lg font-medium text-gray-900">
                                {item.name}
                            </h3>

                        </div>
                        <div className="sm:flex sm:items-end sm:justify-end">
                            <a
                                href={item.lien}
                                target="_blank"
                                rel="noreferrer"
                                className="block bg-arianGris/30 px-3  inline-flex item-center py-3 text-center text-sm text-gray-900 transition hover:bg-arianGris/50"
                            >
                                Se rendre sur le site

                                <span
                                    aria-hidden="true"
                                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>)}
            </div>
        </section >
    )
}