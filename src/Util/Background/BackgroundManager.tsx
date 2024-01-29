import React from "react";
import ReactDOM from "react-dom/client";

class BackgroundManager {

    root: ReactDOM.Root|null = null;
    queue: React.ReactElement[] = [];
    rendered: React.ReactElement[] = [];

    connect() {
        const htmlRoot = document.getElementById("background-root");
        if (htmlRoot === null || this.root !== null) return;
        this.root = ReactDOM.createRoot(htmlRoot);
    }

    inject(src: React.ReactElement[]) {
        if (this.root === null) return;
        for (let i = 0; i < src.length; i++) {
            if (src[i] !== undefined && typeof src[i].type !== 'string') {
                const Component = src[i].type;
                this.queue.push(<Component {...src[i].props} className="injected-content"></Component>);
            } else this.queue.push(src[i]);
        }
        this.render().then();
    }

    async render() {
        // @ts-ignore
        this.root?.render(this.queue);
        this.rendered = this.queue;
        this.queue = [];
    }

}

export default new BackgroundManager();