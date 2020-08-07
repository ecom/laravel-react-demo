import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Banner from "./Banner";

export default function NotFound() {
    return (
        <div>
            <Banner src="https://source.unsplash.com/_Q95YSuAAno/1920x1080" />
            <Container maxWidth="sm">
                <div>
                    <Typography variant="h1">Not Found</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                        startIcon={<ArrowBackIcon />}
                    >
                        Back Home
                    </Button>
                </div>
            </Container>
        </div>
    );
}
