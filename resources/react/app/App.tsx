import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    createStyles,
    makeStyles,
    Theme,
    ThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../share/theme";
import { Button } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        }
    })
);

export default function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className={classes.root}>
                    <Navbar />

                    <Switch>
                        <Route path="/about">About</Route>
                        <Route path="/creatives">Creatives</Route>
                        <Route path="/organizations">Organizations</Route>
                        <Route path="/">Home</Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}
