import {  useNavigate} from 'react-router-dom';
export default function Ariane() {
    const navigate = useNavigate();

    const handleArticleClick = (path) => {
        navigate(path); // Navigate to the specified path
    };
    return (
        <section className="bg-white dark:bg-gray-900" id="accueil">
            <div>
                <div
                    className="container flex flex-col w-full px-6 py-10 mx-auto lg:inset-x-0">
                    <section className=" bg-gray-100/60 border-t border-arianBord shadow-sm p-8 mb-5">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-start lg:items-center">
                            <div className="sm:col-span-3 lg:col-span-1">
                                <img
                                    alt="logo ariane"
                                    src={process.env.PUBLIC_URL + "logos/ariane.png"}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="sm:col-span-3 lg:col-span-2">
                                <blockquote >
                                    <p className="text-xl font-medium text-gray-600 font-jura" >
                                        Le Consortium-HN ARIANE (Analyses, Recherches, Intelligence Artificielle et Nouvelles Editions numériques) a été labellisé par
                                        Huma-Num le 18/01/2023 pour une période de 4 ans.
                                        <br /> <br />
                                        ARIANE réunit des spécialistes du texte
                                        (littéraires, linguistes, historiens…) et de l'informatique en vue de créer un espace de dialogue scientifique véritablement interdisciplinaire
                                        entre ces deux communautés.
                                        <br /> <br />
                                        L’objectif du consortium ARIANE est de progresser ensemble dans la connaissance et le raffinement des méthodes informatiques
                                        appliquées aux objets et données des sciences humaines (et, plus particulièrement, des sciences du texte).
                                        <br /> <br />
                                        Le consortium se veut un espace de discussion portant sur l’interprétation des résultats obtenus à l’aide de méthodes (semi)automatiques d’analyses des textes,
                                        il vise également à faciliter l’accès de la communauté aux algorithmes, scripts et chaînes de traitement qui simplifient la manipulation et l’enrichissement
                                        des textes et à stimuler la création de nouvelles connaissances à leur sujet et sur leurs contextes.
                                        <br /> <br />
                                        Au sein d’Huma-Num,
                                        le consortium veut également contribuer à la réflexion sur le développement de nouveaux outils, plateformes, services et interfaces.
                                     
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                   
                </div>
            </div>
        </section>
    )
}