import Accordeon from "../Components/Accordeon";
import Accueil from "../Components/Accueil";
import Axes from "../Components/Axes";
import Headers from "../Components/Headers";
import Mapi from "../Components/Map";
import Agenda from "../Components/Agenda";
import Outils from "../Components/Outils";
import {  useNavigate} from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

 
    return (
        <article>
            <Headers titre={"Présentation"} theme={"Analyses, Recherches, Intelligence Artificielle et Nouvelles Editions numériques"} />
            <Accueil />
            <section >
                <div id="axes">
                 <Headers titre={"Les Axes"} theme={"Le Consortium Ariane vise à créer une synergie entre les sciences humaines et de l'informatique en vue de développer l'analyse semi-automatisée des textes. En favorisant une communauté scientifique active et ouverte à la collaboration interdisciplinaire"} />
                 <Axes />
                </div>
                <Agenda />
               
            </section>
            <div id='membres'>
             <Headers titre={"Les Membres"} theme={"Les membres du Consortium Ariane sont des chercheurs, enseignants-chercheurs et ingénieurs issus de différentes institutions internationales."} />
            </div>
            <div class="flex items-center justify-center min-h-screen">
            <div className='w-[85vw] h-[87vh]  ' >
                <Mapi />
            </div></div>
        </article>
    )
}

