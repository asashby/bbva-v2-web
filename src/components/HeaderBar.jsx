import React from 'react';
import "../Responsive.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const user = <FontAwesomeIcon icon={faUser} />;

const HeaderBar = () => {
    return(
        <div>
                <nav 
                    className="header-container"
                    aria-label="BBVA Argentina: Tarjetas, Prestamos, inversiones, seguros, sucursales"
                    style={{
                        backgroundColor:"#072146",
                        color:"#fff",
                        zoom:1,
                        width:"100%",
                        display:"block",
                        position:"relative",
                        zIndex:3,
                        verticalAlign:"baseline",
                        outline:"0px",
                        WebkitFontSmoothing:"antialiased",
                        WebkitTapHighlightColor:"transparent",
                        hyphens:"none"
                    }}>
                    <div
                        className="header-main-container"
                        style={{
                            minHeight:"88px",
                            overflow:"hidden",
                            boxSizing:"border-box",
                            verticalAlign:"baseline",
                            display:"block"
                        }}>
                        <div
                            className="header-wrapper"
                            style={{
                                height:"100%",
                                display:"flex",
                                float:"left",
                                boxSizing:"border-box"
                            }}>
                            <div
                                className="header-logo"
                                style={{
                                    display:"flex",
                                    padding:"0 16px",
                                    alignItems:"center",
                                    transition:"all .33333s",
                                    boxSizing:"border-box"
                                }}>
                                <a
                                    className="header-logo-link"
                                    href="https://www.bbva.com.ar/"
                                    title="BBVA Argentina: Tarjetas, Prestamos, inversiones, seguros, sucursales"
                                    style={{
                                        lineHeight:"8px",
                                        color:"rgb(25, 115, 184)",
                                        textDecoration:"none"
                                    }}>
                                    <img
                                        className="header-image"
                                        src="https://www.bbva.com.ar/content/dam/public-web/global/images/logos/logo_bbva_blanco.svg"
                                        alt="BBVA logo"
                                        style={{
                                            width:"auto",
                                            willChange:"height",
                                            maxWidth:"none",
                                            display:"inline-block",
                                            backgroundColor:"#072146",
                                            cursor:"pointer"
                                    }}/>
                                </a>
                            </div>
                            <div
                                className="header-mainnavigation"
                                itemType="https://schema.org/SiteNavigationElement"
                                style={{
                                    float:"left",
                                    boxSizing:"border-box",
                                    display:"block"
                                }}>
                                <nav
                                    className="mainnavigation-base"
                                    style={{
                                        outline:0,
                                        verticalAlign:"baseline"
                                    }}>
                                    <ul
                                        className="mainnavigation-list"
                                        style={{
                                            display:"block",
                                            margin:"0px",
                                            wordWrap:"break-word",
                                            WebkitFontSmoothing:"antialiased",
                                            WebkitTapHighlightColor:"transparent",
                                            hyphens:"none"
                                        }}>
                                        <li
                                            className="mainnavigation-item"
                                            style={{
                                                display:"block",
                                                float:"left",
                                                outline:"0px",
                                                listStyle:"none",
                                                opacity:1
                                            }}>
                                            <a
                                                className="mainnavigation-link"
                                                itemProp="url"
                                                style={{
                                                    borderBottom:"4px solid #fff",
                                                    position:"relative",
                                                    color:"#fff",
                                                    textAlign:"center",
                                                    display:"block",
                                                    margin:"0 16px",
                                                    textTransform:"uppercase",
                                                    textDecoration:"none",
                                                    cursor:"pointer"
                                                }}>
                                                Personas
                                            </a>
                                        </li>
                                        <li
                                            className="mainnavigation-item"
                                            style={{
                                                display:"block",
                                                float:"left",
                                                outline:0,
                                                listStyle:"none",
                                                opacity:0.6
                                            }}>
                                            <a
                                                className="mainnavigation-link"
                                                itemProp="url"
                                                style={{
                                                    position:"relative",
                                                    fontSize:"14px",
                                                    lineHeight:"88px",
                                                    color:"#fff",
                                                    textAlign:"center",
                                                    display:"block",
                                                    margin:"0 16px",
                                                    textTransform:"uppercase",
                                                    textDecoration:"none",
                                                    cursor:"pointer"
                                                }}>
                                                Empresas
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <nav
                            className="header-actions"
                            itemType="https://schema.org/SiteNavigationElement"
                            style={{
                                display:"block",
                                outline:"0px",
                                boxSizing:"border-box",
                                overflow:"hidden",
                                verticalAlign:"baseline",
                                WebkitTapHighlightColor:"transparent",
                                hyphens:"none"
                            }}>
                            <ul
                                className="header-actions-ulist"
                                style={{
                                    listStyle:"none",
                                    verticalAlign:"baseline",
                                    outline:"0px",
                                    margin:"0px",
                                    paddingInlineStart:"0px",
                                    marginInlineStart:"0px",
                                    marginInlineEnd:"0px",
                                    WebkitTapHighlightColor:"transparent",
                                    hyphens:"none"
                                }}>
                                <li
                                    className="header-actions-list header-actions-tablet-hidden"
                                    style={{
                                        listStyle:"none",
                                        WebkitTapHighlightColor:"transparent",
                                        hyphens:"none"
                                    }}>
                                    <a
                                        itemProp="url"
                                        className="header-actions-item-link"
                                        style={{
                                            opacity:1,
                                            color:"#f8cd51",
                                            paddingLeft:"8px",
                                            display:"flex",
                                            alignItems:"center",
                                            padding:0,
                                            fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                            fontWeight:"600",
                                            textAlign:"center",
                                            cursor:"pointer",
                                            listStyle:"none"
                                        }}>
                                        <img
                                            className="bbva-svgicon"
                                            src="https://www.bbva.com.ar/content/dam/public-web/global/images/icons/3_051_newclient.svg"
                                            alt="icon"
                                            style={{
                                                top:"-2px",
                                                marginRight:"8px",
                                                position:"relative",
                                                height:"20px",
                                                width:"20px",
                                                display:"inline-block",
                                                maxWidth:"100%",
                                                opacity:"1",
                                                color:"#f8cd51",
                                                textAlign:"center",
                                                cursor:"pointer"
                                            }}/>
                                        <span>
                                            Hacete cliente
                                        </span>
                                    </a>
                                </li>
                                <li
                                    className="header-actions-list header-actions-left"
                                    style={{
                                        listStyle:"none",
                                        WebkitTapHighlightColor:"transparent",
                                        hyphens:"none"
                                    }}>
                                    <div
                                        style={{
                                            boxSizing:"border-box",
                                            display:"block",
                                            verticalAlign:"baseline"
                                        }}>
                                        <a
                                            className="header-access"
                                            aria-label="Banca Online"
                                            style={{
                                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                                fontWeight:"600",
                                                display:"flex",
                                                alignItems:"center",
                                                opacity:1,
                                                textDecoration:"none"
                                            }}>
                                            <i
                                                className="header-icon"
                                                style={{
                                                color:"#fff",
                                                display:"inline-block",
                                                margin:"2px 8px 0",
                                                outline:"0px",
                                                height:"24px",
                                                width:"24px"
                                            }}>
                                                {user}
                                            </i>
                                            <span
                                                className="header-access-text"
                                                style={{
                                                    outline:"0px"
                                                }}>
                                                Banca Online
                                            </span>
                                            <span
                                                className="header-access-text-mobile">
                                                Acceso
                                            </span>
                                        </a>
                                    </div>
                                </li>
                                <li
                                    className="header-actions-list header-actions-tablet-hidden"
                                    style={{
                                        listStyle:"none",
                                        WebkitTapHighlightColor:"transparent",
                                        hyphens:"none"
                                    }}>
                                    <div
                                        className="search-trigger"
                                        style={{
                                            boxSizing:"border-box",
                                            display:"block",
                                            listStyle:"none"
                                        }}>
                                        <a
                                            className="header-actions-item-link"
                                            style={{
                                                padding:"8px",
                                                lineHeight:"16px",
                                                fontSize:"14px",
                                                transition:"line-height .16667s",
                                                margin:"0 8px",
                                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                                fontWeight:"600",
                                                textAlign:"center",
                                                color:"#fff",
                                                opacity:"1",
                                                display:"block",
                                                textDecoration:"none",
                                                cursor:"pointer"
                                            }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 260 260"
                                                height="20px"
                                                width="20px">
                                                <path
                                                    className="bbvaicn"
                                                    d="M182.85 162.85a90 90 0 1 0-20 20L220 240l20-20zM150 110a40 40 0 0 0-40-40V50a60 60 0 0 1 60 60z"
                                                    style={{
                                                        fill:"#fff"
                                                    }}/>
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                                <li
                                    className="header-actions-list header-actions-right"
                                    style={{
                                        listStyle:"none",
                                        WebkitTapHighlightColor:"transparent",
                                        hyphens:"none"
                                    }}>
                                        <span
                                            aria-hidden="false"
                                            style={{
                                                cursor:"pointer",
                                                display:"flex",
                                                alignItems:"center",
                                                verticalAlign:"baseline"
                                            }}>
                                            <span
                                                className="header-actions-item-link-text">
                                                Men??
                                            </span>
                                            <svg
                                                className="header-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 260 260"
                                                height="24px"
                                                width="24px"
                                                style={{
                                                    display:"inline-block",
                                                    margin:"2px 8px 0",
                                                    color:"#fff"
                                                }}>
                                                    
                                                <g>
                                                    <polygon class="bbvaicn" points="210.37 80.12 20.37 80.12 20.37 50.12 240.37 50.12 210.37 80.12"/>
                                                    <polygon class="bbvaicn" points="180.37 145.12 20.37 145.12 20.37 115.12 210.37 115.12 180.37 145.12"/>
                                                    <polygon class="bbvaicn" points="150.37 210.12 20.37 210.12 20.37 180.12 180.37 180.12 150.37 210.12"/>
                                                </g>
                                            </svg>
                                        </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
        </div>
    )
}

export default HeaderBar;