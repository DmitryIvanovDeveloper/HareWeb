export default class GameWebGLSettings {

    public GameWebGLSettings(): IGameWebGLSettings {
        return {
            loaderUrl: "/unity/Hare.loader.js",
            dataUrl: "/unity/Hare.data",
            frameworkUrl: "/unity/Hare.framework.js",
            codeUrl: "/unity/Hare.wasm",
        }
    }
}

export interface IGameWebGLSettings {
    loaderUrl: string,
    dataUrl: string,
    frameworkUrl:string,
    codeUrl: string,
}