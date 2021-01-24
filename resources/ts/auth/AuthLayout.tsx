import React, { ReactNode } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

import Banner from "../images/Banner";

const useStyles = makeStyles({
    root: {},
    content: {}
});

export interface AuthLayoutProps {
    children?: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Banner src="https://source.unsplash.com/YP2MNNId-Qs/1920x480" />
            <Container maxWidth="xs">
                <div className={classes.content}>{children}</div>
            </Container>
        </div>
    );
}
