import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { withAuth, WithAuthProps } from "../auth/AuthContext";
import ImageUpload from "../images/ImageUpload";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(6)
        }
    })
);

function Settings({ user, setUser }: WithAuthProps) {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="sm">
            <Typography variant="h1">Settings</Typography>
            <Typography variant="h2">Images</Typography>
            <ImageUpload />
        </Container>
    );
}

export default withAuth(Settings);
