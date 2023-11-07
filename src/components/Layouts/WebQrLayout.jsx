import React, { useEffect, useState } from "react";
// import { webSessionService } from "../_services"
import "../../styles/web.css";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode";
import { useWebSocketContext } from "../../_contexts/WebSocketContext"; // Import WebSocket context
import { useDispatch, useSelector } from "react-redux";
import { getAuthenticated } from "../../redux/actions/user";

export default function WebQrLayout() {
    const sessionIdentifier = localStorage.getItem('sessionIdentifier');
    const [showQR, setShowQR] = useState(false);
    const [webSessionQR, setWebSessionQR] = useState("");
    const navigate = useNavigate();
    const { webSocket, setSocketConnection, disconnectSocket } = useWebSocketContext();
    const dispatch = useDispatch();
    const { isAuthenticated, loading } = useSelector(state=>state.user)


    useEffect(() => {
        if (!isAuthenticated && !loading){
            let interval = setTimeout(()=>{
                if (!isAuthenticated)
                setSocketConnection();
            },5000)
            return()=>clearTimeout(interval)
        }
        
      }, [loading]);



    const events = {
        initUniqueSessionIdentifier: "init-unique-session-identifier",
        updateUniqueSessionIdentifier: "update-unique-session-identifier",
        authUser: "auth-user",
    };

    function initWebSocket() {
        console.log("Called");
        // const qrcodeEl = document.getElementById("qr-canvas");
        // const ws = new WebSocket(`ws://localhost:9000`);
        // const ws = new WebSocket(`wss://47.128.83.81/api`);
        // const events = {
        //     initUniqueSessionIdentifier: "init-unique-session-identifier",
        //     updateUniqueSessionIdentifier: "update-unique-session-identifier",
        //     authUser: "auth-user"
        // };
        let updateTimer = null;
        webSocket.onmessage = function (event) {
            const data = JSON.parse(event.data);
            const step = data.data && data.data.step;
            if (step === 0) {
                // QRCode.toCanvas(qrcodeEl, data.data.token, function (error) {
                //     if (error) console.error(error);
                // });
                QRCode.toString(
                    data.data.token,
                    {
                        errorCorrectionLevel: 'H',
                        width: 300,
                        type: 'svg',
                        version: 17,
                    },
                    function (err, qr) {
                        if (err) throw err;
                        // console.log(data);
                        setWebSessionQR(qr);
                        setShowQR(true);
                    },
                );

                localStorage.setItem("sessionIdentifier", data.data.identifier);
                const updateInterval = 2 * 60 * 1000; // 2 minutes
                updateTimer = setInterval(() => {
                    let identifier = localStorage.getItem("sessionIdentifier");
                    if (identifier === null) {
                        webSocket.send(JSON.stringify({ mock: "server", event: events.initUniqueSessionIdentifier, type: 0 }));
                    } else {
                        webSocket.send(
                            JSON.stringify({
                                mock: "client",
                                event: events.updateUniqueSessionIdentifier,
                                identifier,
                                type: 1,
                            }),
                        );
                    }
                }, updateInterval);
            } else if (step === 1) {
                // const ctx = qrcodeEl.getContext("2d");
                // ctx.clearRect(0, 0, qrcodeEl.width, qrcodeEl.height);
                // QRCode.toCanvas(qrcodeEl, data.data.token, function (error) {
                //     if (error) console.error(error);
                // });
                QRCode.toString(
                    data.data.token,
                    {
                        errorCorrectionLevel: 'H',
                        width: 300,
                        type: 'svg',
                        version: 17,
                    },
                    function (err, qr) {
                        if (err) throw err;
                        // console.log(data);
                        setWebSessionQR(qr);
                        // setShowQR(true);
                    },
                );
            } else if (step === 2) {
                const { token } = data.data;
                localStorage.setItem("nz-auth", token)
                // qrcodeEl.remove()

                // alert("Login Successful")
                // document.getElementById("message").innerHTML = "Login Sucessfully"
                const sessionIdentifier = localStorage.getItem("sessionIdentifier");
                webSocket.close();
                dispatch(getAuthenticated(sessionIdentifier))
                // navigate("/chat")

            }
        };

        webSocket.onopen = function () {
            webSocket.send(JSON.stringify({ mock: "server", event: events.initUniqueSessionIdentifier, type: 0 }));
        };

        webSocket.onclose = function () {
            clearInterval(updateTimer);
        };
    }


    useEffect(() => {
        // console.log('get');
        if(webSocket){
        initWebSocket()
    
        return(()=>disconnectSocket());
        }
    }, [webSocket]);

    return (
        <>
            <section className="web_container_wrapper">
                <div className="web_container_section_bg">
                    <img className="app-logo" src="images/app_logo.png" alt="" />
                </div>
                <div className="web_container_inner-wrapper">
                    <h2>Use NZ Chat on your computer</h2>
                    <div className="web_container_inner-container">
                        <div className="web_container_inner_left">
                            <div className="web_container_inner_content">
                                <ol className="">
                                    <li>Open NZ Chat on your phone</li>
                                    <li>
                                        Go to settings by tapping on your profile photo,{" "}
                                        <strong>Menu</strong>, or <strong>Settings</strong>
                                    </li>
                                    <li>
                                        Tap <strong>Linked devices</strong> and then
                                        <strong> Link a device</strong>
                                    </li>
                                    <li>
                                        <span>
                                            Point your phone to this screen to capture the QR code
                                        </span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="web_container_inner_right">
                            <div className="web_container_inner_content">
                                {showQR ? (
                                    <div className="qr-img" dangerouslySetInnerHTML={{ __html: webSessionQR }} />
                                ) : (
                                    <img
                                        className="loader-img"
                                        src="images/loader.gif"
                                        alt="Loader"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <div className="web_container_bottom">
            <div className="web_container_bottom_content">
              <h4>Download NZ Chat for Windows</h4>
              <p>
                Get calling, screen sharing and a faster experience with the new
                Windows app.
              </p>
            </div>
            <button>Get the app</button>
          </div> */}
                </div>
            </section>
        </>
    );
}
