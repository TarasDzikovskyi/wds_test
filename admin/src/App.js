import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import {useContext} from "react";
import Login from "./pages/login/Login";
import {AuthContext} from "./context/authContext/AuthContext";

function App() {
    const {user} = useContext(AuthContext)

    return (
        <Router>
            {user && <Topbar/>}
            <div className="container">
                {user && <Sidebar/>}
                <Routes>
                    <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>

                    <Route exact path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>

                    <Route path='/posts' element={user ? <ProductList/> : <Navigate to='/login'/>}/>

                    <Route path='/newPost' element={user ? <NewProduct/> : <Navigate to='/login'/>}/>
                </Routes>
            </div>
        </Router>
    );
}


export default App;
