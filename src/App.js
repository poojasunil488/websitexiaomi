// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Category from './pages/Category';
import TvProduct from './pages/TvProduct';
import Style from './pages/Style';
import Laptop from './pages/Laptop';
import Shop from './pages/Shop';
import DiscoveryPage from './pages/DiscoveryPage';
import Support from './components/Links/Support';
import Login from './pages/Login';
import Allxiaomiphones from './pages/Allxiaomiphones'; 
import Storepage from './pages/Storepage';
import Allredmiphones from './pages/Allredmiphones';
import Alltv from './pages/Alltv';
import Tvaccess from './pages/Tvaccess';
import Smartliving from './pages/Smartliving';
import Smartappliances from './pages/Smartappliances';
import Useragreement from './pages/Useragreement';
import Redmi from './pages/Redmi';
import SecurityCamera from './pages/SecurityCamera';
import Light from './pages/Light';
import Tablets from './pages/Tablets';
import Wearables from './pages/Wearables';
import Audio from './pages/Audio';
import Power from './pages/Power';
import Productredmi from './pages/Productredmi';
import Grooming from './pages/Grooming';
import Apparal from './pages/Apparal';
import Pack from './pages/Pack';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Shop /></Layout>} />
          <Route path='/store' element={<Layout><Storepage category='store' /></Layout>} />
          <Route path='/phone' element={<Layout><Category category='phone' /></Layout>} />
          <Route path='/tv' element={<Layout><TvProduct category='tv' /></Layout>} />
          <Route path='/lap' element={<Layout><Laptop category='lap' /></Layout>} />
          <Route path='/lifestyle' element={<Layout><Style category='lifestyle' /></Layout>} />
          <Route path='/discover' element={<Layout><DiscoveryPage category='discover' /></Layout>} />
          <Route path='/support' element={<Layout><Support category='support' /></Layout>} />
          <Route path='/allxiaomiphones' element={<Layout><Allxiaomiphones category='allxiaomiphones' /></Layout>} />
          <Route path='/allredmiphones' element={<Layout><Allredmiphones category='allxiaomiphones' /></Layout>} />
          <Route path='/alltv' element={<Layout><Alltv category='alltv' /></Layout>} />
          <Route path='/tvaccessories' element={<Layout><Tvaccess category='tvaccessories' /></Layout>} />
          <Route path='/smartliving' element={<Layout><Smartliving category='smartliving' /></Layout>} />
          <Route path='/smartappliances' element={<Layout><Smartappliances category='smartappliances' /></Layout>} />
          <Route path='/loginregister' element={<Login category='loginregister' />} />
          <Route path='/useragreement' element={<Useragreement category='useragreement' />} />
          <Route path='/redmiproduct' element={<Layout><Redmi category='redmiproduct' /></Layout>} />
          <Route path='/securitycamera' element={<Layout><SecurityCamera category='securitycamera' /></Layout>} />
          <Route path='/light' element={<Layout><Light category='light' /></Layout>} />
          <Route path='/tablets' element={<Layout><Tablets category='tablets' /></Layout>} />
          <Route path='/wear' element={<Layout><Wearables category='wear' /></Layout>} />
          <Route path='/audio' element={<Layout><Audio category='audio' /></Layout>} />
          <Route path='/power' element={<Layout><Power category='power' /></Layout>} />
          <Route path='/productredmi' element={<Productredmi category='productredmi' />} />
          <Route path='/grooming' element={<Layout><Grooming category='grooming' /></Layout>} />
          <Route path='/apparal' element={<Layout><Apparal category='apparal' /></Layout>} />
          <Route path='/pack' element={<Layout><Pack category='pack' /></Layout>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
