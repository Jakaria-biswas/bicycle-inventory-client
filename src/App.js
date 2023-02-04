import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Manage from './Components/Manage/Manage';
import Blogs from './Components/Blogs/Blogs';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ItemView from './Components/Manage/ItemView';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddBlog from './Components/Blogs/AddBlog';
import DetailsBlog from './Components/Blogs/DetailsBlog';

function App() {

      const location = useLocation()
      const pathname = location.pathname
     
  return (
    <div>
     
      
     {
         pathname === '/register' ||  pathname === '/login'  ? <Routes>
         <Route path="/register" element={<Register></Register>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         </Routes>    : <><Header></Header></>

           
     }
      
    
    
      <div className='m-3'>
        <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/manage" element={<RequireAuth><Manage></Manage></RequireAuth>}></Route>
             <Route path="/blogs" element={<Blogs></Blogs>}></Route>
             <Route path='/itemView/:id' element={<ItemView></ItemView>}></Route>
             <Route path="/addBlog" element={<AddBlog></AddBlog>}></Route>
             <Route path="/detailsBlog/:id" element={<DetailsBlog></DetailsBlog>}></Route>
            
        </Routes>
      </div>
    </div>
  );
}

export default App;
