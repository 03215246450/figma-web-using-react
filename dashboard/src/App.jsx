import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Admindashboard from "./Pages/Admindashboard"
import AdminUI from "./Pages/AdminUI"
import Scnddashboard from './Pages/Scnddashboard' 
import AdminPanel from "./Pages/AdminPanel"
import DashboardUi from "./Pages/DashboardUi"
import Foodadmin from "./Pages/Foodadmin"
import Fooddelivery from "./Pages/Fooddelivery"
import Freebie from "./Pages/Freebie"
import Freedesign from "./Pages/Freedesign"
import Freetemplate from "./Pages/Freetemplate"
import UIUXdesign from "./Pages/UIUXdesign"






function App() {
  return (
    < >
<BrowserRouter>
<Routes>
  <Route index element={<Home />} />
  <Route index path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />   
  <Route path="/admin" element={<Admin />} />
  <Route path="/admindashboard" element={<Admindashboard />} />
  <Route path="/adminpanel" element={<AdminPanel />} />
  <Route path="/adminUI" element={<AdminUI />} />
  <Route path="/scnddashboard" element={<Scnddashboard />} />
  <Route path="/dashboardUi" element={<DashboardUi />}/>
  <Route path="/foodadmin" element={<Foodadmin />}/>
  <Route path="/fooddelivery" element={<Fooddelivery />}/>
  <Route path="/Freebie" element={<Freebie />}/>
  <Route path="/freedesign" element={<Freedesign /> }/>
  <Route path="/freetempalte" element={<Freetemplate />}/>
  <Route path="/uiuxdesign" element={<UIUXdesign />}/>

</Routes>
</BrowserRouter>

    </>
  );
}

export default App;
