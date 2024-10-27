import {  useNavigate} from 'react-router-dom';


export default function OutilsClass() {
    const navigate = useNavigate();

    const handleArticleClick = (path) => {
        navigate(path); // Navigate to the specified path
    };
    return (
        <section className="mx-10" id="axes">
            <div
                className="mx-auto w-full  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 font-jura">
                    <article className=" bg-white p-4 hover:-skew-y-3   shadow-sm border-r border-arianBord ring-indigo-50 sm:p-6 lg:p-8"
                    //  onClick={() => handleArticleClick('/axe1')}
                    >
                        <div>
                            <strong
                                className="rounded  bg-arianBord/90 px-6 py-1.5 text-[16px] font-medium text-white"
                            >
                                Préparer
                            </strong>

                            <h3 className="mt-4  text-2xl  sm:text-xl">
                                <p >Préparer vos données </p>
                            </h3>
                            <br />

                            <p className="mt-1 text-xl text-gray-700 tracking-wider font-jura">
                                Les travaux entrepris dans le cadre de cet axe prolongeront en partie les travaux d'acquisition des textes en formats
                                numériques dynamiques, entrepris par exemple (mais pas exclusivement) dans le cadre de CAHIER.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a
                            href="https://axe1-consortiumariane-432a08f652d6e53685b94e8d9ad3e4a87f4670f4f.gitpages.huma-num.fr/GT1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                            >
                            Plus de détails
                            </a>
                        </div>
                    </article>
                    <article className=" bg-white p-4 skew-y-3 border-t hover:skew-y-0 border-arianBord ring-indigo-50 sm:p-6 lg:p-8"
                    //  onClick={() => handleArticleClick('/axe2')}
                     >
                        <div>
                            <strong
                                className="rounded  bg-arianBord/70 px-3 px-6 py-1.5 text-[16px] font-medium text-white"
                            >
                                FAIRiser
                            </strong>

                            <h3 className="mt-4 text-2xl  sm:text-xl">
                                <p>FAIRiser vos données</p>
                            </h3>
                            <br />

                            <p className="mt-1 text-xl text-gray-700 tracking-wider font-jura">
                                Cet axe se concentre sur l'épistémologie, les outils et les méthodes de la fouille de données et de métadonnées. <br /> <br />
                                L'objectif est de contribuer à la création de nouvelles connaissances en histoire et histoire de la littérature, théorie littéraire, stylistique et poétique, <br />
                                que ce soit à partir de (grands) corpus, de collections constituées selon une norme explicite, ou de textes individuels.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a
                            href="https://axe2-consortiumariane-385337912e0e2d726bcf4ea9cc2c8e2e105b074c5.gitpages.huma-num.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                            >
                            Plus de détails
                            </a>
                        </div>
                    </article>
                    <article className=" bg-white p-4 hover:-skew-y-3  shadow-sm border-l border-arianBord ring-indigo-50 sm:p-6 lg:p-8"
                    //  onClick={() => handleArticleClick('/axe3')}
                     >
                        <div>
                            <strong
                                className="rounded  bg-arianBord/50 px-3 px-6 py-1.5 text-[16px] font-medium text-white"
                            >
                                Partager 
                            </strong>

                            <h3 className="mt-4  text-2xl sm:text-xl">
                                <p>Exposer vos données</p>
                            </h3>
                            <br />

                            <p className="mt-1 text-xl text-gray-700 tracking-wider font-jura">
                                Des problématiques et questions transversales aux deux axes seront également traitées et donneront lieu
                                à des travaux de l'ensemble des membres du consortium.
                                <br /> <br />
                                Deux sujets ont déjà été identifiés par les membres,
                                ils concernent les questions juridiques et les questions d'éthique de la numérisation et de la mise en ligne.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a
                            href="https://axe3-consortiumariane-7c12133cbd3eceaef103ccdf92a7d8c028ed36041.gitpages.huma-num.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                            >
                            Plus de détails
                            </a>
                        </div>
                    </article>
                    <article className=" bg-white p-4 hover:-skew-y-3  shadow-sm border-l border-arianBord ring-indigo-50 sm:p-6 lg:p-8"
                     onClick={() => handleArticleClick('/outil')}>
                        <div>
                            <strong
                                className="rounded  bg-arianBord/50 px-3 px-6 py-1.5 text-[16px] font-medium text-white"
                            >
                                Explorer
                            </strong>

                            <h3 className="mt-4  text-2xl sm:text-xl">
                                <p>Fouiller des données</p>
                            </h3>
                            <br />

                            <p className="mt-1 text-xl text-gray-700 tracking-wider font-jura">
                            Le développement d'outils informatiques au service de la recherche est une démarche technologique qui fait partie des travaux scientifiques du Consortium Ariane. 
                                <br /> <br />
                                Grâce aux ingénieurs, programmeurs et aux chercheurs membres du consortium, la création d'applications spécifiques, de logiciels, de systèmes de gestion de données et d'interfaces permet de faire avancer ses réflexions.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}