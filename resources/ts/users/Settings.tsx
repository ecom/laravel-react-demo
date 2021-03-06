import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { useAuth } from "../auth/AuthContext";
import ImageUploadCard from "../images/ImageUploadCard";
import ImageUploadGrid from "../images/ImageUploadGrid";
import { upload } from "../images/service";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(6)
        }
    })
);

export default function Settings() {
    const classes = useStyles();
    const { user, setUser } = useAuth();

    return (
        <Container className={classes.root} maxWidth="sm">
            <Typography variant="h1">Settings</Typography>
            <Typography variant="h2">Images</Typography>
            <ImageUploadCard
                onChange={file => {
                    if (file) {
                        upload(file);
                    }
                }}
            />
            <ImageUploadGrid />
        </Container>
    );
}
