import React from 'react';
import HeaderBar from './HeaderBar';
import LoginContent from './LoginContent';

const LoginView = () => {
    return (
        <div
            className="general-wrapper"
            style={{
                height:"100vh",
                width:"100vw",
                position:"fixed",
                display:"block",
                boxSizing:"border-box",
                flexDirection:"column",
                minHeight:"100vh",
                zIndex:8,
                verticalAlign:"baseline"
            }}>
            <header
                className="header-base-wrapper"
                style={{
                    position:"relative",
                    width:"100%",
                    zIndex:"14",
                    height:"auto",
                    paddingTop:"0",
                    paddingBottom:"0",
                    clear:"both",
                    display:"block"
                }}>
                <HeaderBar/>
                <LoginContent/>
            </header>
        </div>
    )
}

export default LoginView;