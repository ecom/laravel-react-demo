import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./config/theme";
import Navbar from "./Navbar";
import Home from "./Home";
import { AuthProvider } from "./auth/AuthContext";
import Login from "./auth/Login";
import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import Settings from "./users/Settings";
import NotFound from "./NotFound";
import BottomNavbar from "./BottomNavbar";
import navigationConfig from "./config/navigation";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden"
    }
});

export default function App() {
    const classes = useStyles();
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <div className={classes.root}>
                        <Navbar />

                        <Switch>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/email/verify">
                                <VerifyEmail />
                            </Route>

                            <Route path="/about">About</Route>
                            <Route path="/creatives">Creatives</Route>
                            <Route path="/organizations">Organizations</Route>
                            <Route path="/settings">
                                <Settings />
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route>
                                <NotFound />
                            </Route>
                        </Switch>

                        <BottomNavbar
                            elevation={navigationConfig.elevation}
                            items={navigationConfig.bottomItems}
                        />
                    </div>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}
