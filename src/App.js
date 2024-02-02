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
          <Route path='/smarappliances' element={<Layout><Smartappliances category='smartappliances' /></Layout>} />
          <Route path='/loginregister' element={<Login category='loginregister' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
