import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
    fade,
    makeStyles,
    Theme,
    createStyles
} from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Box from "@material-ui/core/Box";

import { NavigationItem } from "./types/navigation";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        placeholder: {
            opacity: 0,
            [theme.breakpoints.up("md")]: {
                display: "none"
            }
        },
        root: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            [theme.breakpoints.up("md")]: {
                display: "none"
            }
        },
        navbar: {
            backdropFilter: "blur(32px)",
            backgroundColor: fade(theme.palette.common.white, 0.5)
        }
    })
);

export interface BottomNavbarProps {
    elevation?: number;
    items?: NavigationItem[];
}

export default function BottomNavbar({
    items = [],
    elevation = 3
}: BottomNavbarProps) {
    const classes = useStyles();
    const location = useLocation();
    const show = !!items.find(item => item.href === location.pathname);
    return (
        <>
            <BottomNavigation className={classes.placeholder} />
            <Slide direction="up" in={show}>
                <Box className={classes.root} boxShadow={elevation}>
                    <BottomNavigation
                        className={classes.navbar}
                        showLabels
                        value={location.pathname}
                    >
                        {items.map(item => (
                            <BottomNavigationAction
                                key={item.href}
                                label={item.text}
                                value={item.href}
                                icon={item.icon}
                                component={NavLink}
                                exact
                                to={item.href}
                            />
                        ))}
                    </BottomNavigation>
                </Box>
            </Slide>
        </>
    );
}
