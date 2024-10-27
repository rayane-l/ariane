
import Accueil from "../Components/Accueil";

import Headers from "../Components/Headers";

import Outils from "../Components/Outils";
import OutilsClass from "../Components/OutilsClass";


export default function Axe1() {
    return (
        <article >
            {/* <Headers titre={"Présentation"} theme={"Analyses, Recherches, Intelligence Artificielle et Nouvelles Editions numériques"} /> */}
            <Headers titre={"Les Outils"} theme={"Le développement d'outils informatiques au service de la recherche est une démarche technologique qui fait partie des travaux scientifiques du Consortium Ariane. Grâce aux ingénieurs, programmeurs et aux chercheurs membres du consortium, la création d'applications spécifiques, de logiciels, de systèmes de gestion de données et d'interfaces permet de faire avancer ses réflexions"} />
                <OutilsClass />
                <Outils /> 
        </article>
    )
}


