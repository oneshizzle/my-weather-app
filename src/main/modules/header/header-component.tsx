import {AppBar, Tab, Tabs, Typography} from "@material-ui/core";
import {ChangeEvent, Component} from "react";
import * as React from 'react';

type HeaderState = {
    selectedValue: number;
}

function TabContainer(props: any) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

export class HeaderComponent extends Component<{}, HeaderState> {
    state = {
        selectedValue: 0,
    };

    handleChange = (event: ChangeEvent, value: number) => {
        this.setState({selectedValue: value});
    };

    render() {
        const value = this.state.selectedValue;

        return (
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Item One"/>
                        <Tab label="Item Two"/>
                        <Tab label="Item Three"/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>Item One</TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
            </div>
        );
    }
}
