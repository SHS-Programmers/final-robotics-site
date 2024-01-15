import {ReactElement} from "react";

class BackgroundManager {

    inject(src: ReactElement<any, any>) {
        // (document.getElementById("background-root") as HTMLElement).innerHTML
    }

}

export default new BackgroundManager();