import React, { useEffect } from "react";
import { Unity, useUnityContext, } from "react-unity-webgl";
import { Box, Button, } from "@mui/material";
import CircularProgressWithLabel from "../CircularProgress/CircularProgressWithLabel.tsx";

export interface IGameWebGL {
}

//@ts-ignore
const telegram = window.Telegram.WebApp;

export default function GameWebGL(props: IGameWebGL) {
    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        loadingProgression,
        unload,
        UNSAFE__unityInstance

    } = useUnityContext({
        loaderUrl: "/unity/Hare.loader.js",
        dataUrl: "/unity/Hare.data",
        frameworkUrl: "/unity/Hare.framework.js",
        codeUrl: "/unity/Hare.wasm",
        webglContextAttributes: {
            preserveDrawingBuffer: true,
        },
    });

    useEffect(() => {
        telegram.ready();
        if (!isLoaded) {
            return;
        }
        
    }, [isLoaded]);

    return (
        <Box
            sx={{
                margin: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
                width: '100%',
                height: '1000px'
            }}
        >
            {!isLoaded
                ? <CircularProgressWithLabel value={loadingProgression} />
                : <Box display='flex' justifyContent='flex-end' marginRight={4}>
                    <Button onClick={() => requestFullscreen(true)}>Full Screen</Button>
                </Box>
            }
            
            <Unity
                unityProvider={unityProvider}
                tabIndex={1}
                style={{
                    display: isLoaded ? "block" : "none",
                    // width: "768px",
                    // maxWidth: "768px",
                    // height: "1024px",
                    // maxHeight: "1024px"
                }}
            />
        </Box>
    );
}