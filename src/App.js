import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import  Category  from './pages/Category';
import  TvProduct  from './pages/TvProduct';
import  Style  from './pages/Style';
import  Laptop  from './pages/Laptop';
import Shop from './pages/Shop';
import DiscoveryPage from './pages/DiscoveryPage';


function App() {
  return (
    <div>
      <BrowserRouter>   

      <Navbar/>
      <Routes>
        <Route path ='/' element={<Shop/>}/>
        <Route path ='/phone' element={<Category category='phone'/>}/>
        <Route path ='/tv' element={<TvProduct category='tv'/>}/>
        <Route path ='/lap' element={<Laptop category='lap'/>}/>
        <Route path ='/lifestyle' element={<Style category='lifestyle'/>}/>
        <Route path ='/discover' element={<DiscoveryPage category='discover'/>}/>
        <Route path ='/support' element={<Category category='support'/>}/>
        </Routes>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
