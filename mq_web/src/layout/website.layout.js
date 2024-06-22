import React, { useState, useEffect } from 'react';

import SecHeader from '../components/header/Header2.desktop';
import Footer from '../components/footer/footer.desktop';

const WebsiteLayout = ({ children }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 480);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 480);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <React.Fragment>
            {/* {isDesktop && } */}

            <SecHeader />

            <div className="main-body">
                {children}
            </div>

            {isDesktop && <Footer />}
        </React.Fragment>
    );
}

export default WebsiteLayout;
