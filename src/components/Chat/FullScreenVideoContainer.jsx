import React, { useState, useContext } from 'react';
import { useVideoCallContext } from './../../context/VideoCallContext';
import TracksConfigure from './../Agora/TracksConfigure';
import VideoCallScreen from './VideoCallScreen';
import {
    PropsInterface
} from './../../context/agora/PropsContext';
const FullScreenVideoContainer = ({ rtcProps, rtmProps, callbacks }) => {
    const {
        isVideoModelVisible,
        isVideoCallActive,
        isBroadcastActive,
        handelIsVideoModelVisible,
    } = useVideoCallContext();

    return (
        <>
            <div className="video-call-modal" style={{ display: isVideoModelVisible ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span className="videocall-minimize" onClick={handelIsVideoModelVisible}><i className="ri-fullscreen-exit-line"></i></span>
                    <div style={styles.container}>
                        <div style={styles.videoContainer}>
                            {isVideoCallActive && <div
                                style={{
                                    ...styleMain
                                }}
                            >
                                <TracksConfigure>
                                    <VideoCallScreen />
                                </TracksConfigure>
                            </div>}
                            {isBroadcastActive && <div
                                style={{
                                    ...styleMain
                                }}
                            >
                                {rtcProps.role === 'audience' ? (
                                    <VideoCallScreen />
                                ) : (
                                    <TracksConfigure>
                                        <VideoCallScreen />
                                    </TracksConfigure>
                                )}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const styleMain = {
    display: 'flex',
    flex: 1,
    minHeight: 0,
    flexDirection: 'column'
} 

const styles = {
    container: {
        width: '100%',
        height: 'calc(100vh - 2px)',
        display: 'flex',
        flex: 1,
        backgroundColor: '#007bff22',
    },
    heading: { textAlign: 'center', marginBottom: 0 },
    videoContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    nav: { display: 'flex', justifyContent: 'space-around' },
    btn: {
        backgroundColor: '#007bff',
        cursor: 'pointer',
        borderRadius: 5,
        padding: '4px 8px',
        color: '#ffffff',
        fontSize: 20,
    },
    input: { display: 'flex', height: 24, alignSelf: 'center' },
};

export default FullScreenVideoContainer;


