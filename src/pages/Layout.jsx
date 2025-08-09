import { Outlet } from "react-router-dom";
import Titulo from '../components/Titulo';
import Rodape from '../components/Rodape';
import Menu from '../components/Menu';
// import Banner from '../components/Banner';

function Layout() {
    return (
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