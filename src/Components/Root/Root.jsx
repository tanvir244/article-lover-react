import Header from "../Header/Header";
import Outlet from "../Outlet/Outlet";

const Root = () => {
    return (
        <div>
            <Header></Header>    
            <Outlet></Outlet>        
        </div>
    );
};

export default Root;