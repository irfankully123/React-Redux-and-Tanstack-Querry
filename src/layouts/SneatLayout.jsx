import '../assets/vendor/css/core.css';
import '../assets/vendor/css/theme-default.css';
import '../assets/vendor/css/pages/page-auth.css';
import '../assets/vendor/css/pages/page-icons.css';
import '../assets/vendor/css/pages/page-misc.css';
import '../assets/vendor/css/pages/page-account-settings.css';
import '../assets/vendor/js/bootstrap.js';
import '../assets/vendor/js/helpers.js';
import '../assets/vendor/js/menu.js';
import '../assets/vendor/fonts/boxicons.css';
import '../assets/css/demo.css';
import SideNav from '../includes/SideNav';
import NavBar from '../includes/NavBar';
import Footer from '../includes/Footer';

const SneatLayout = ({children}) => {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <SideNav></SideNav>
                    <div className="layout-page">
                        <NavBar></NavBar>
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {children}
                            </div>
                            <Footer></Footer>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    );
}

export default SneatLayout
