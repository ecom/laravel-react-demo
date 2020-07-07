import React from "react";
import { Link as RRLink } from "react-router-dom";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { withAuth, WithAuthProps } from "./AuthContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            margin: theme.spacing(-0.5)
        }
    })
);

function AuthMenu({ user, setUser }: WithAuthProps) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                edge="end"
                color="inherit"
                aria-controls="auth-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {user && user.avatar ? (
                    <Avatar
                        className={classes.avatar}
                        src={user.avatar.file_url_small}
                    />
                ) : (
                    <AccountCircleIcon />
                )}
            </IconButton>
            <Menu
                id="auth-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {user ? (
                    <>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </>
                ) : (
                    <>
                        <MenuItem
                            onClick={handleClose}
                            component={RRLink}
                            to="/login"
                        >
                            Login
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            component={RRLink}
                            to="/register"
                        >
                            Register
                        </MenuItem>
                    </>
                )}
            </Menu>
        </>
    );
}

export default withAuth(AuthMenu);
