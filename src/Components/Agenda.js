
import Accueil from "./Accueil";

import Headers from "./Headers";
// import {  useNavigate} from 'react-router-dom';

    

export default function Agenda() {
  // const navigate = useNavigate();

  //   const handleArticleClick = (path) => {
  //       navigate(path); // Navigate to the specified path
  //   };
    return (
        <article>
           <Headers titre={"L'Agenda"} theme={"L'Agenda d'activités du Consortium Ariane est élaboré par ses membres et groupes de travail. Cet agenda présente toute la variété d'activités du Consortium. "} />
           <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
           <div id='agenda' className="flex items-center justify-center min-h-screen p-5">
              <div id='agenda' Style='width: 80%; height:300;  '>

                   <div class="tockify-calendar"  data-tockify-component="default" data-tockify-calendar="6702ba65205890162e62b2d9"></div>
              
              </div>
           </div>
        </article>
    )
}