import * as React from "react";
import {Component} from "react";
import {Dispatch} from "redux";
import {HeaderComponent} from "./header-component";

export class HeaderContainerInternal extends Component<{}, {}> {
    readonly dispatch: Dispatch;

    constructor(props: any) {
        super(props);
        this.dispatch = props.dispatch;
    }

    render() {
        return <HeaderComponent/>;
    }
}

