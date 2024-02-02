import './App.css';
import  {Navbar}  from './components/Navbar';
import {Footer}  from './components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import  Category  from './pages/Category';
import  TvProduct  from './pages/TvProduct';
import  Style  from './pages/Style';
import  Laptop  from './pages/Laptop';
import Shop from './pages/Shop';
import DiscoveryPage from './pages/DiscoveryPage';
import Support from './components/Links/Support';
import Login from './pages/Login';
import Allxiaomiphones from './pages/Allxiaomiphones'; 
import Storepage from './pages/Storepage'
import Allredmiphones from './pages/Allredmiphones';
import Alltv from './pages/Alltv';
import Tvaccess from './pages/Tvaccess';
import Smartliving from './pages/Smartliving';
import Smartappliances from './pages/Smartappliances';


function App() {
  return (
    <div>
      <BrowserRouter>   

      <nav>
        <Navbar />
      </nav>     
       <Routes>
        <Route path ='/' element={<Shop/>}/>
        <Route path ='/store' element={<Storepage category='store'/>}/>
        <Route path ='/phone' element={<Category category='phone'/>}/>
        <Route path ='/tv' element={<TvProduct category='tv'/>}/>
        <Route path ='/lap' element={<Laptop category='lap'/>}/>
        <Route path ='/lifestyle' element={<Style category='lifestyle'/>}/>
        <Route path ='/discover' element={<DiscoveryPage category='discover'/>}/>
        <Route path ='/support' element={<Support category='support'/>}/>
        <Route path ='/loginregister.js' element={<Login category='loginregister.js'/>}/>
        <Route path ='/allxiaomiphones' element={<Allxiaomiphones category='allxiaomiphones'/>}/>
        <Route path ='/allredmiphones' element={<Allredmiphones category='allxiaomiphones'/>}/>
        <Route path ='/alltv' element={<Alltv category='alltv'/>}/>
        <Route path ='/tvaccessories' element={<Tvaccess category='tvaccessories'/>}/>
        <Route path ='/smartliving' element={<Smartliving category='smartliving'/>}/>
        <Route path ='/smarappliances' element={<Smartappliances category='smartappliances'/>}/>

        </Routes>
        <footer>
        <Footer />
      </footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
