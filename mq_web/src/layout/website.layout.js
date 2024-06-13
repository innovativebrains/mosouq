import React from "react";

import Navbar from '../components/header/header.desktop';
import SecHeader from '../components/header/Header2.desktop';

import Footer from "../components/footer/footer.desktop"

const WebsiteLayout = ({ children }) => {
    return (
        <React.Fragment>

            {window.innerWidth > 480 ? (
                <div>
                    {/* <Navbar /> */}
                    <SecHeader/>
                </div>
            ) : (
                ""
            )}

            <div className="main-body">

                {children}

            </div>

            {window.innerWidth > 480 ? (
                <Footer />
            ):(
               ""  
            )} 

        </React.Fragment>
    );
}
export default WebsiteLayout;