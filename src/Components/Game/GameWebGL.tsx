import React, { useEffect, useState } from "react";
import { Unity, useUnityContext, } from "react-unity-webgl";
import { Box, Button, } from "@mui/material";
import CircularProgressWithLabel from "../CircularProgress/CircularProgressWithLabel.tsx";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export interface IGameWebGL {
}

//@ts-ignore
const telegram = window.Telegram.WebApp;

export default function GameWebGL(props: IGameWebGL) {
    const { height, width } = useWindowDimensions();

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
            
            }}
        >
            {!isLoaded
                ? <CircularProgressWithLabel value={loadingProgression} />
                : <Box display='flex' justifyContent='flex-end' marginRight={4}>
                    {/* <Button onClick={() => requestFullscreen(true)}>Full Screen</Button> */}
                </Box>
            }
            
            <Unity
                unityProvider={unityProvider}
                tabIndex={1}
                style={{
                    display: isLoaded ? "block" : "none",
                    width: width,
                    height :height,
                    // height: "1024px",
                    // maxHeight: "1024px"
                }}
            />
        </Box>
    );
}