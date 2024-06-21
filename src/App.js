import './App.css';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import Containerpage from './Components/Containerpage';
import Year1 from './adminpanel/Year1';
import Adminpanel from './adminpanel/AdminmainPanel';
import PdfList1 from './Components/PdfList1';
import Year2 from './adminpanel/Year2';
import PdfList2 from './Components/pdfList2';
import Year3 from './adminpanel/Year3';
import PdfList3 from './Components/PdfList3';
import PdfList4 from './Components/PdfList4';
import Year4 from './adminpanel/Year4';
import Newcontainer from './Components/Newcontainer';
import Cseyear1 from './Components/Years/Cseyear1';
import Cseyear2 from './Components/Years/Cseyear2';
import Cseyear3 from './Components/Years/Cseyear3';
import Cseyear4 from './Components/Years/Cseyear4';
import Ityear1 from './Components/Years/Ityear1';
import Ityear2 from './Components/Years/Ityear2';
import Ityear3 from './Components/Years/Ityear3';
import Ityear4 from './Components/Years/Ityear4';
import Cseayear1 from './adminpanel/Years/Cseayear1';
import Cseayear2 from './adminpanel/Years/Cseayear2';
import Cseayear3 from './adminpanel/Years/Cseayear3';
import Cseayear4 from './adminpanel/Years/Cseayear4';
import Itayear1 from './adminpanel/Years/Itayear1';
import Itayear2 from './adminpanel/Years/Itayear2';
import Itayear3 from './adminpanel/Years/Itayear3';
import Itayear4 from './adminpanel/Years/Itayear4';
import Aimlayear1 from './adminpanel/Years/Aimlayear1';
import Aimlayear2 from './adminpanel/Years/Aimlayear2';
import Aimlayear3 from './adminpanel/Years/Aimlayear3';
import Aimlayear4 from './adminpanel/Years/Aimlayear4';
import Aidsayear1 from './adminpanel/Years/Aidsayear1';
import Aidsayear2 from './adminpanel/Years/Aidsayear2';
import Aidsayear3 from './adminpanel/Years/Aidsayear3';
import Aidsayear4 from './adminpanel/Years/Aidsayear4';
import Mechayear1 from './adminpanel/Years/Mechayear1';
import Mechayear2 from './adminpanel/Years/Mechayear2';
import Mechayear3 from './adminpanel/Years/Mechayear3';
import Mechayear4 from './adminpanel/Years/Mechayear4';
import Bmeayear1 from './adminpanel/Years/Bmeayear1';
import Bmeayear2 from './adminpanel/Years/Bmeayear2';
import Bmeayear4 from './adminpanel/Years/Bmeayear4';
import Bmeayear3 from './adminpanel/Years/Bmeayear3';
import Btayear1 from './adminpanel/Years/Btayear1';
import Btayear2 from './adminpanel/Years/Btayear2';
import Btayear3 from './adminpanel/Years/Btayear3';
import Btayear4 from './adminpanel/Years/Btayear4';
import Ftayear1 from './adminpanel/Years/Ftayear1';
import Ftayear2 from './adminpanel/Years/Ftayear2';
import Ftayear3 from './adminpanel/Years/Ftayear3';
import Ftayear4 from './adminpanel/Years/Ftayear4';
import Eeeayear1 from './adminpanel/Years/Eeeayear1';
import Eeeayear2 from './adminpanel/Years/Eeeayear2';
import Eeeayear3 from './adminpanel/Years/Eeeayear3';
import Eeeayear4 from './adminpanel/Years/Eeeayear4';
import Eceayear1 from './adminpanel/Years/Eceayear1';
import Eceayear2 from './adminpanel/Years/Eceayear2';
import Eceayear3 from './adminpanel/Years/Eceayear3';
import Eceayear4 from './adminpanel/Years/Eceayear4';
import Civilayear1 from './adminpanel/Years/Civilayear1';
import Civilayear2 from './adminpanel/Years/Civilayear2';
import Civilayear3 from './adminpanel/Years/Civilayear3';
import Civilayear4 from './adminpanel/Years/Civilayear4';
import Cyberayear1 from './adminpanel/Years/Cyberayear1';
import Cyberayear2 from './adminpanel/Years/Cyberayear2';
import Cyberayear3 from './adminpanel/Years/Cyberayear3';
import Cyberayear4 from './adminpanel/Years/Cyberayear4';
import Agriayear1 from './adminpanel/Years/Agriayear1';
import Agriayear2 from './adminpanel/Years/Agriayear2';
import Agriayear3 from './adminpanel/Years/Agriayear3';
import Agriayear4 from './adminpanel/Years/Agriayear4';
import Agriyear1 from './Components/Years/Agriyear1';
import Agriyear2 from './Components/Years/Agriyear2';
import Agriyear3 from './Components/Years/Agriyear3';
import Agriyear4 from './Components/Years/Agriyear4';
import Aidsyear1 from './Components/Years/Aidsyear1';
import Aidsyear2 from './Components/Years/Aidsyear2';
import Aidsyear3 from './Components/Years/Aidsyear3';
import Aidsyear4 from './Components/Years/Aidsyear4';
import Aimlyear1 from './Components/Years/Aimlyear1';
import Aimlyear2 from './Components/Years/Aimlyear2';
import Aimlyear3 from './Components/Years/Aimlyear3';
import Aimlyear4 from './Components/Years/Aimlyear4';
import Mechyear1 from './Components/Years/Mechyear1';
import Mechyear2 from './Components/Years/Mechyear2';
import Mechyear3 from './Components/Years/Mechyear3';
import Mechyear4 from './Components/Years/Mechyear4';
import Cyberyear1 from './Components/Years/Cyberyear1';
import Cyberyear2 from './Components/Years/Cyberyear2';
import Cyberyear3 from './Components/Years/Cyberyear3';
import Cyberyear4 from './Components/Years/Cyberyear4';
import Eceyear1 from './Components/Years/Eceyear1';
import Eceyear2 from './Components/Years/Eceyear2';
import Eceyear3 from './Components/Years/Eceyear3';
import Eceyear4 from './Components/Years/Eceyear4';
import Eeeyear1 from './Components/Years/Eeeyear1';
import Eeeyear2 from './Components/Years/Eeeyear2';
import Eeeyear3 from './Components/Years/Eeeyear3';
import Eeeyear4 from './Components/Years/Eeeyear4';
import Btyear1 from './Components/Years/Btyear1';
import Btyear2 from './Components/Years/Btyear2';
import Btyear3 from './Components/Years/Btyear3';
import Btyear4 from './Components/Years/Btyear4';
import Ftyear1 from './Components/Years/Ftyear1';
import Ftyear2 from './Components/Years/Ftyear2';
import Ftyear3 from './Components/Years/Ftyear3';
import Ftyear4 from './Components/Years/Ftyear4';
import Bmeyear1 from './Components/Years/Bmeyear1';
import Bmeyear2 from './Components/Years/Bmeyear2';
import Bmeyear3 from './Components/Years/Bmeyear3';
import Bmeyear4 from './Components/Years/Bmeyear4';
import Civilyear1 from './Components/Years/Civilyear1';
import Civilyear2 from './Components/Years/Civilyear2';
import Civilyear3 from './Components/Years/Civilyear3';
import Civilyear4 from './Components/Years/Civilyear4';
import Circularupload from './adminpanel/Circularupload';
import Circular from './Components/Circular';


function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/home" element={<HomePage />} />
   <Route path="/adminlogin" element={<AdminLogin/>} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/container" element={<Containerpage />} />
   <Route path="/year1" element={<Year1 />} />
   <Route path="/year2" element={<Year2 />} />
   <Route path="/year3" element={<Year3 />} />
   <Route path="/year4" element={<Year4 />} />
   <Route path="/adminpanel" element={<Adminpanel />} />
   <Route path="/CSEayear1" element={<Cseayear1 />} />
   <Route path="/CSEayear2" element={<Cseayear2 />} />
   <Route path="/CSEayear3" element={<Cseayear3 />} />
   <Route path="/CSEayear4" element={<Cseayear4 />} />
   <Route path="/ITayear1" element={<Itayear1 />} />
   <Route path="/ITayear2" element={<Itayear2 />} />
   <Route path="/ITayear3" element={<Itayear3 />} />
   <Route path="/ITayear4" element={<Itayear4 />} />
   <Route path="/AIMLayear1" element={<Aimlayear1 />} />
   <Route path="/AIMLayear2" element={<Aimlayear2/>} />
   <Route path="/AIMLayear3" element={<Aimlayear3 />} />
   <Route path="/AIMLayear4" element={<Aimlayear4 />} />
   <Route path="/AIDSayear1" element={<Aidsayear1/>} />
   <Route path="/AIDSayear2" element={<Aidsayear2 />} />
   <Route path="/AIDSayear3" element={<Aidsayear3/>} />
   <Route path="/AIDSayear4" element={<Aidsayear4 />} />
   <Route path="/MECHayear1" element={<Mechayear1/>} />
   <Route path="/MECHayear2" element={<Mechayear2 />} />
   <Route path="/MECHayear3" element={<Mechayear3/>} />
   <Route path="/MECHayear4" element={<Mechayear4 />} />
   <Route path="/BMEayear1" element={<Bmeayear1/>} />
   <Route path="/BMEayear2" element={<Bmeayear2/>} />
   <Route path="/BMEayear3" element={<Bmeayear3/>} />
   <Route path="/BMEayear4" element={<Bmeayear4 />} />
   <Route path="/BTayear1" element={<Btayear1/>} />
   <Route path="/BTayear2" element={<Btayear2 />} />
   <Route path="/BTayear3" element={<Btayear3/>} />
   <Route path="/BTayear4" element={<Btayear4 />} />
   <Route path="/FTayear1" element={<Ftayear1/>} />
   <Route path="/FTayear2" element={<Ftayear2 />} />
   <Route path="/FTayear3" element={<Ftayear3/>} />
   <Route path="/FTayear4" element={<Ftayear4 />} />
   <Route path="/EEEayear1" element={<Eeeayear1/>} />
   <Route path="/EEEayear2" element={<Eeeayear2 />} />
   <Route path="/EEEayear3" element={<Eeeayear3/>} />
   <Route path="/EEEayear4" element={<Eeeayear4 />} />
   <Route path="/ECEayear1" element={<Eceayear1/>} />
   <Route path="/ECEayear2" element={<Eceayear2 />} />
   <Route path="/ECEayear3" element={<Eceayear3/>} />
   <Route path="/ECEayear4" element={<Eceayear4 />} />
   <Route path="/CIVILayear1" element={<Civilayear1/>} />
   <Route path="/CIVILayear2" element={<Civilayear2/>} />
   <Route path="/CIVILayear3" element={<Civilayear3/>} />
   <Route path="/CIVILayear4" element={<Civilayear4/>} />
   <Route path="/CYBERayear1" element={<Cyberayear1/>} />
   <Route path="/CYBERayear2" element={<Cyberayear2/>} />
   <Route path="/CYBERayear3" element={<Cyberayear3/>} />
   <Route path="/CYBERayear4" element={<Cyberayear4/>} />
   <Route path="/AGRIayear1" element={<Agriayear1/>} />
   <Route path="/AGRIayear2" element={<Agriayear2/>} />
   <Route path="/AGRIayear3" element={<Agriayear3/>} />
   <Route path="/AGRIayear4" element={<Agriayear4/>} />
   <Route path="/circularupload" element={<Circularupload/>} />
  
   <Route path="/pdflist1" element={<PdfList1/>} />
   <Route path="/pdflist2" element={<PdfList2/>} />
   <Route path="/pdflist3" element={<PdfList3/>} />
   <Route path="/pdflist4" element={<PdfList4/>} />
   <Route path="/new" element={<Newcontainer/>} />
   <Route path="/CSEyear1" element={<Cseyear1/>} />
   <Route path="/CSEyear2" element={<Cseyear2/>} />
   <Route path="/CSEyear3" element={<Cseyear3/>} />
   <Route path="/CSEyear4" element={<Cseyear4/>} />
   <Route path="/ITyear1" element={<Ityear1/>} />
   <Route path="/ITyear2" element={<Ityear2/>} />
   <Route path="/ITyear3" element={<Ityear3/>} />
   <Route path="/ITyear4" element={<Ityear4/>} />
   <Route path="/AGRIyear1" element={<Agriyear1/>} />
   <Route path="/AGRIyear2" element={<Agriyear2/>} />
   <Route path="/AGRIyear3" element={<Agriyear3/>} />
   <Route path="/AGRIyear4" element={<Agriyear4/>} />
   <Route path="/AIDSyear1" element={<Aidsyear1/>} />
   <Route path="/AIDSyear2" element={<Aidsyear2/>} />
   <Route path="/AIDSyear3" element={<Aidsyear3/>} />
   <Route path="/AIDSyear4" element={<Aidsyear4/>} />
   <Route path="/AIMLyear1" element={<Aimlyear1/>} />
   <Route path="/AIMLyear2" element={<Aimlyear2/>} />
   <Route path="/AIMLyear3" element={<Aimlyear3/>} />
   <Route path="/AIMLyear4" element={<Aimlyear4/>} />
   <Route path="/MECHyear1" element={<Mechyear1/>} />
   <Route path="/MECHyear2" element={<Mechyear2/>} />
   <Route path="/MECHyear3" element={<Mechyear3/>} />
   <Route path="/MECHyear4" element={<Mechyear4/>} />
   <Route path="/CYBERyear1" element={<Cyberyear1/>} />
   <Route path="/CYBERyear2" element={<Cyberyear2/>} />
   <Route path="/CYBERyear3" element={<Cyberyear3/>} />
   <Route path="/CYBERyear4" element={<Cyberyear4/>} />
   <Route path="/EEEyear1" element={<Eeeyear1/>} />
   <Route path="/EEEyear2" element={<Eeeyear2/>} />
   <Route path="/EEEyear3" element={<Eeeyear3/>} />
   <Route path="/EEEyear4" element={<Eeeyear4/>} />
   <Route path="/ECEyear1" element={<Eceyear1/>} />
   <Route path="/ECEyear2" element={<Eceyear2/>} />
   <Route path="/ECEyear3" element={<Eceyear3/>} />
   <Route path="/ECEyear4" element={<Eceyear4/>} />
   <Route path="/BTyear1" element={<Btyear1/>} />
   <Route path="/BTyear2" element={<Btyear2/>} />
   <Route path="/BTyear3" element={<Btyear3/>} />
   <Route path="/BTyear4" element={<Btyear4/>} />
   <Route path="/FTyear1" element={<Ftyear1/>} />
   <Route path="/FTyear2" element={<Ftyear2/>} />
   <Route path="/FTyear3" element={<Ftyear3/>} />
   <Route path="/FTyear4" element={<Ftyear4/>} />
   <Route path="/BMEyear1" element={<Bmeyear1/>} />
   <Route path="/BMEyear2" element={<Bmeyear2/>} />
   <Route path="/BMEyear3" element={<Bmeyear3/>} />
   <Route path="/BMEyear4" element={<Bmeyear4/>} />
   <Route path="/CIVILyear1" element={<Civilyear1/>} />
   <Route path="/CIVILyear2" element={<Civilyear2/>} />
   <Route path="/CIVILyear3" element={<Civilyear3/>} />
   <Route path="/CIVILyear4" element={<Civilyear4/>} />
   <Route path="/circular" element={<Circular/>} />
   </Routes>
   <Footer/>

    </Router>
    </>
  );
}

export default App;
