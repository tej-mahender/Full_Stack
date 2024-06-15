import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import {Outlet} from 'react-router-dom'
function RootLayout(){

    return(
    <div>
        <Header/>

        {/* dynamic main */}
        <div style={{minHeight:'90vh'}}> <Outlet/></div>
        

        <Footer></Footer>

    </div>
    )
}
export default RootLayout;