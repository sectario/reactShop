import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//traemos varios elementos: browser router identificar la navegacion, 
//switch tener una estructura de control sobre las rutas y la ruta
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import ChangePassword from '../pages/ChangePassword';
import RecoveryPassword from '../pages/RecoveryPassword';
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import EditAccount from '../pages/EditAccount'
import ListItems from '../containers/ListItems'
import MyOrder from '../components/MyOrder'
import MyOrders from '../pages/MyOrders'
import Addcart from '../containers/Addcart'
import ProductDetail from '../containers/ProductDetail'
import Components from '../../*notas/components'
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
;


import '../styles/global.css';
import Header from "../components/header";


const App = () => {
    const initialState = useInitialState();
    return(
    <AppContext.Provider value={initialState}>
        <Header></Header>   
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route index element={<Home />}/>
        <Route path="changePassword" element={<ChangePassword />}/>
        <Route path="recoveryPassword" element={<RecoveryPassword />}/>
        <Route path="login" element={<Login />}/>
        <Route path="createAccount" element={<CreateAccount />}/>
        <Route path="editAccount" element={<EditAccount />}/>
        <Route path="listItems" element={<ListItems />}/>
        <Route path="myOrder" element={<MyOrder />}/>
        <Route path="myOrders" element={<MyOrders />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="components" element={<Components />}/>
        {/* aqui le damos instrucciones cómo se tiene que comportar el enrutador

        Exact => define que la url que vamos a enrutar tiene que ser exacta
        
        Path: parmite definir la ruta que va visualizar el navegador
        
        NotFound => va a se el element por defecto*/}

        {/* ¿Qué estamos haciendo?

BrowserRoute sirve para implementar router en el navegador

Switch regresa la primera ruta que coincida. En pocas palabras, si estamos en www.platzi.com/contacto , 
regresará el element que coincida a este (es decir, el element que contenga la lógica de 
    contacto). En esta caso, estamos poniendo varios routes dentro de switch, ¿para qué? para que 
    solamente traiga esa misma ruta, y no tenga que buscar más. Como si fuese un condicional 
    switch de javascript efectivamente. Y por ello tenemos un route sin path, que será el valor por 
    defecto.

Layout solamente renderizará el route que coincida efectivamente con la URL especificada. */}
           
    </Routes>
    </Layout> 
    {/* <Login/>
    <RecoveryPassword/>
            como no tiene hijos no tiene etiqueta de cierre */}
    </BrowserRouter>
    </AppContext.Provider>
    );
}

export default App