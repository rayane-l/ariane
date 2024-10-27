import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css'

import HomePage from './Pages/HomePage';
import Axe1 from './Pages/Axe1';
import Axe2 from './Pages/Axe2';
import Axe3 from './Pages/Axe3';
import Outil from './Pages/Outil';
import Agenda from './Components/Agenda';
import Ariane from './Components/Ariane';
import HUmanum from './Components/Humanum';
import { MantineProvider } from '@mantine/core';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MembreDescription from './Components/MembreDescription';

export default function App() {
  return (
    <BrowserRouter>
      {/* <MantineProvider withGlobalStyles withNormalizeCSS> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/axe1' element={<Axe1 />} />
          <Route path='/axe2' element={<Axe2 />} />
          <Route path='/axe3' element={<Axe3 />} />
          <Route path='/outil' element={<Outil />} />
          <Route path='/ariane' element={<Ariane/>} />
          <Route path='/humanum' element={<HUmanum/>} />
          <Route path='/membre' element={<MembreDescription/>} />
          <Route path='/agenda' element={<Agenda/>} />
        </Routes>
        <Footer/>
      {/* </MantineProvider> */}
    </BrowserRouter>
  );
}

