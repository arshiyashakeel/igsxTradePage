import React from 'react';
import './App.css';
import { HeaderSearch } from './components/HeaderSearch';
import { link } from 'fs';
import { GridAsymmetrical } from './components/GridAsymmetrical';
import { FooterLinks } from './components/FooterLinks';
import { footer} from "./Data";

function App() {
  return (
    <div>
<HeaderSearch links={[{link: "port", label: "Portfolio"},{link: "port", label: "Now Trading"}]}/>
  <GridAsymmetrical/>
  <FooterLinks data={footer}/>
    </div>
   
   );
}

export default App;
