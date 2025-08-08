import { Outlet } from "react-router-dom";  
import Titulo from '../Titulo';
import Rodape from'../Rodape';
import Menu from '../Menu';
import Banner from '../Banner';

function Layout (){
    return(
        <>
            <div className="container">
                <Titulo />
                <Menu />
                <Outlet />
            </div>
            <Rodape />
        </>
    )
}

export default Layout;