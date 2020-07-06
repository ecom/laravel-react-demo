import React from "react";
import { Link as RRLink } from "react-router-dom";

import {
    fade,
    makeStyles,
    Theme,
    createStyles
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Link from "@material-ui/core/Link";
import SearchBox from "./SearchBox";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backdropFilter: "blur(32px)",
            backgroundColor: fade(theme.palette.common.white, 0.5)
        },
        grow: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
        sectionDesktop: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex"
            }
        },
        sectionMobile: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
                display: "none"
            }
        }
    })
);

export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position="fixed" color="transparent">
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Link
                    color="inherit"
                    component={RRLink}
                    to="/"
                    className={classes.title}
                    variant="h6"
                    noWrap
                >
                    ECOM
                </Link>
                <SearchBox />
                <Button color="inherit" component={RRLink} to="/creatives">
                    Creatives
                </Button>
                <Button color="inherit" component={RRLink} to="/organizations">
                    Organizations
                </Button>
                <Button color="inherit" component={RRLink} to="/about">
                    About
                </Button>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton edge="end" color="inherit">
                        <AccountCircle />
                    </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
