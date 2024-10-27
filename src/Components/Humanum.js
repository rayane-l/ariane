import {  useNavigate} from 'react-router-dom';
export default function Humanum() {

    return (
        <section className="bg-white dark:bg-gray-900 py-10" id="accueil" Style="height: auto;">
            <div>
                <div
                    className="container flex flex-col w-full px-6 py-10 mx-auto lg:inset-x-0">
                  
                    <section className="bg-gray-100/60 border-t border-arianBord shadow-sm p-8">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-start lg:items-center">
                            <div className="sm:col-span-3 lg:col-span-2">
                                <blockquote>
                                <p className="text-xl font-medium font-jura text-gray-600">
                                        L’'IR* Huma-Num vise à construire, avec les communautés, et à partir d’un pilotage scientifique,
                                        une infrastructure numérique de niveau international (nœud français des ERIC DARIAH et CLARIN) pour les SHS.
                                        <br /> <br />

                                        Elle vise à structurer, par l’intermédiaire de consortiums regroupant des acteurs des communautés scientifiques et d’un réseau
                                        de points de présence dans les maisons des sciences de l’Homme (MSH), l’accompagnement des communautés scientifiques SHS en matière
                                        d’infrastructure numérique pour les données de la recherche.
                                        <br /> <br />
                                        Elle met en œuvre une infrastructure numérique permettant aux communautés SHS de développer, de réaliser et de préserver sur le long
                                        terme les programmes de recherche leurs données et outils dans un contexte de science ouverte et de partage des données.

                                    </p>
                                    

                                </blockquote>
                            </div>
                            <div className="sm:col-span-3 lg:col-span-1">
                                <img
                                    alt="Man"
                                    src={process.env.PUBLIC_URL + "logos/HN.jpg"}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}