import {React,useEffect,useState} from 'react';
import GoogleDocs from './GoogleDocs.js'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./Map.css"
// Custom hook to adjust the map view

const MyMap = () => {
  //the markers-array data
  const [markers, setmarkers] = useState([]);
  const addElementToMarkers = (x) => {
    setmarkers(prevArray => [...prevArray, x]);
  };

  //set an icon for marker
  const customIcon = new L.Icon({
    iconUrl: './logos/marker.png', // Path relative to the public folder
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });
  
  // Variables
  const spreadsheetId="1HFATzyomNGgmxW6Zd6CTp87RA0ERLx4QNXeH97-sn4M" 
  const apiKey="AIzaSyAjJ_4wWdxTKsy4iQpoB8tr29qXOjZuZo0"
  const geoapify_api_Key = "839558bc8046469cb32157a355e19303"
 

  useEffect(() => {
    // fetching the data from GoogleDocs (read the file: GoogleDocs.js)
    GoogleDocs(spreadsheetId,apiKey).then( data =>{
            var my_data =JSON.parse(data)
            my_data.forEach( item => {

                // use console.log(item) to see all the info about it 
            
                var Prenom = item[2]
                var Nom = item[1]
                var label = item[12]
                var institution = item[5]
                var Pays = item[8]
                var Ville = item[7]
                
                // Url and variables that are involved in fetching the coordinates from geoapify.com
                var addr= encodeURIComponent(Pays+" "+Ville)
                var url="https://api.geoapify.com/v1/geocode/search?text="+addr+"&apiKey="+geoapify_api_Key
                let coordonnees=[];

                // get the coordinates using the Pays/Ville
                fetch(url).then(response => response.json())
                  .then(result => coordonnees = result.features[0].geometry.coordinates)
                      .then(()=>{
                           // pushing the {id,position,name,label} of the items to the markers={}
                           addElementToMarkers({position:coordonnees,Name:Prenom+'/**/'+Nom, label: label, institu: institution })
                          
                       })
                });
    });
   
  
  },[])

   // filter duplicated items in the marker 
   const uniqueMarkers = markers.filter((marker, index, self) =>
      index === self.findIndex((m) => 
        JSON.stringify(m) === JSON.stringify(marker)
      )
    );
   // Group markers by position ,if they have the same position we group them in one item 
   const groupedMarkers = uniqueMarkers.reduce((acc, marker) => {
      const key = marker.position.join(',');
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(marker);
      return acc;
    }, {});

  
  return (
      
    <MapContainer center={[46.2276, 2.2137]} zoom={4}  style={{height:'100%',width:'100%' }} >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution=''
      />
      {Object.values(groupedMarkers).map((group, index) => {
        let position = group[0].position;position=position.filter((item, index) => position.indexOf(item) === index) // All markers in this group have the same position
        return (
          <Marker key={index} position={position.reverse()} icon={customIcon}>
            <Popup>
            
                {group.map(marker => (
                  <div Style="padding:8px;box-shadow: 1px 1px 10px 8px #E7E9EB;border-top:2px solid gray" >
                    <div><span Style='color:black;font-weight:bold'>Nom et Prénom: </span>{(marker.Name).replace("/**/"," ")}</div>
                    <div><span Style='color:black;font-weight:bold'>institution: </span>{marker.institu}<br/></div>
                    <div><span Style='color:black;font-weight:bold'>Groupe de Travail choisi: </span>{marker.label}<br/></div>
                 </div>
                ))}                   
           
            </Popup>
          </Marker>
        );
      })}
      
    </MapContainer>

  );
};

export default MyMap;
