import React from 'react';
import Forms from './Forms'
import "../Responsive.css";

const LoginContent = () => {
    return(
        <div
            className="access-container"
            style={{
                height:"auto",
                backgroundColor:"#fff",
                right:0,
                width:"100%",
                overflow:"auto",
                transition:"height .4s",
                position:"relative",
                boxSizing:"border-box"
            }}>
            <div
                className="container"
                style={{
                    height:"inherit",
                    boxSizing:"border-box",
                    display:"block"
                }}>
                <div
                    className="access-content"
                    style={{
                        boxSizing:"border-box"
                    }}>
                    <Forms/>
                </div>
            </div>
        </div>
    )
}

export default LoginContent;