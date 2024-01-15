import React from "react";
import "./Parallax.css"
import {Event} from "three";
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

export default class Parallax extends React.Component<{ img: string }, { drift: number }> {

    constructor(props: any) {
        super(props);
        this.state = {
            drift: 0
        }
    }

    componentDidMount() {
        console.log(document.getElementById("content"))
        document.getElementById("content")?.addEventListener("scroll", (event: Event) => {
            console.log(event.currentTarget);
            // this.setState({ drift: 0 - (Number(event.currentTarget) ?? 0) / 4});
        });
    }

    render() {
        return (
            <div className="parallax-container">
                <div className="parallax" style={{top: this.state.drift + "px", backgroundImage: `url("${ this.props.img }")`}}/>
                <div className="parallax-dimmer"/>
            </div>
        );
    }

}