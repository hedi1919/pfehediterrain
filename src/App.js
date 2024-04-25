import logo from './logo.svg';
import './App.css';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { Home } from './views/Home';
import { About } from './views/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './views/Contact';
import { Signin } from './views/Signin';
import { SignupProvider } from './views/Signupprovider';
import { SignupCustomer } from './views/Signupcustomer';
import { AddActivity } from './views/Addactivity';
import { AddGouvernorat } from './views/Addgouvernorat';
import { ListActivities } from './views/ListActivities';
import { ListGouvernorats } from './views/ListGouvernorats';
import { ListTerrains } from './views/ListTerrains';
import { Addterrain } from './views/Addterrain';
import { Servicecard } from './views/Servicecard';
import { ListCustomers } from './views/ListCustomers';
import { ListProviders } from './views/ListProviders';
import { Updateactivity } from './views/Updateactivity';
import { UpdateGouvernorat } from './views/Updategouvernorat';
import { UpdateTerrain } from './views/Updateterrain';
import { Terraincard } from './views/Terraincard';
import { Detailterrain } from './views/Detailterrain';
import { ResetPassword } from './views/ResetPassword';
import { Profile } from './views/Profile';
import { UpdateProfile } from './views/Updateprofile';

import { UpdatePass } from './views/UpdatePass';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signupprovider' element={<SignupProvider/>} />
        <Route path='/signupcustomer' element={<SignupCustomer/>} />
        <Route path='/addactivity' element={<AddActivity/>} />
        <Route path='/addgouvernorat' element={<AddGouvernorat/>} />
        <Route path='/listactivities' element={<ListActivities/>} />
        <Route path='/listgouvernorats' element={<ListGouvernorats/>} />
        <Route path='/listterrains' element={<ListTerrains/>} />
        <Route path='/addterrain' element={<Addterrain/>} />
        <Route path='/servicecard' element={<Servicecard/>} />
        <Route path='/listcustomers' element={<ListCustomers/>} />
        <Route path='/listproviders' element={<ListProviders/>} />
        <Route path='/updateactivity/:id' element={<Updateactivity/>} />
        <Route path='/updategouvernorat/:id' element={<UpdateGouvernorat/>} />
        <Route path='/updateterrain/:id' element={<UpdateTerrain/>} />
        <Route path='/terrain' element={<Terraincard/>} />
        <Route path='/detailterrain/:id' element={<Detailterrain/>} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/updateprofile/:id' element={<UpdateProfile/>} />
        <Route path='/updatepassword/:id' element={<UpdatePass/>} />









     
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
