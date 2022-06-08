import './App.css';
import React from 'react';
import AppHeader from './components/AppHeader';
import {Route, Routes, NavLink} from 'react-router-dom';
import Home from './container/Home';
import Store from './container/Store';
import Mac from './container/Mac';
import IPad from './container/IPad';
import IPhone from './container/IPhone';
import Watch from './container/Watch';
import AirPods from './container/AirPods';
import TV_Home from './container/TV_Home';
import OnlyApple from './container/OnlyApple';
import Accessories from './container/Accessories';
import Support from './container/Support';


function App() {
  return (
    <div >
        <AppHeader />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/ipad" element={<IPad />} />
            <Route path="/iphone" element={<IPhone />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/airpods" element={<AirPods />} />
            <Route path="/tv_home" element={<TV_Home />} />
            <Route path="/only_on_apple" element={<OnlyApple />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/support" element={<Support />} />
        </Routes>
    </div>

  );
}

export default App;
