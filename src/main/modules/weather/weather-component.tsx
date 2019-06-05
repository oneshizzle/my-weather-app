import * as React from "react";
import {Component} from "react";

type WeatherProps = {
    temperature: number;
}

export class WeatherComponent extends Component<WeatherProps, {}> {
    state = {};

    render() {
        return (
            <div>
                {this.props.temperature}
            </div>
        );
    }
}
