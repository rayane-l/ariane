import Accordeon from "../Components/Accordeon";
import Accueil from "../Components/Accueil";
import Axes from "../Components/Axes";
import Headers from "../Components/Headers";
import Mapi from "../Components/Map";


import {  useNavigate} from 'react-router-dom';
export default function MembreDescription() {
    const navigate = useNavigate();

    const handleArticleClick = (path) => {
        navigate(path); // Navigate to the specified path
    };
    return (
        <article>
           
         
            <div onClick={() => handleArticleClick('/humanum')}>
                                
            
            <Headers titre={"Les Membres"} theme={"Les membres du Consortium Ariane sont des chercheurs, enseignants-chercheurs et ingénieurs issus de différentes institutions internationales. Leur participation active au sein de ce consortium illustre l'ampleur de ses collaborations dans le domaine des Humanités numériques des textes. Venant de diverses institutions académiques, ces membres contribuent, grâce à la richesse et à la variété de leurs expertises, à atteindre les objectifs du Consortium."} />
            </div>
          
        </article>
    )
}