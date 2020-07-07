import React, { FormEvent, useState, ChangeEvent } from "react";
import { Link as RRLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

import Banner from "../Banner";

import { getCsrfToken } from "../share/csrf-token";
import axios from "axios";

const useStyles = makeStyles({
    buttonRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const classes = useStyles();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.post("/login", {
            email,
            password,
            remember
        });
    };
    return (
        <div>
            <Banner src="https://source.unsplash.com/YP2MNNId-Qs/1920x480" />
            <Container maxWidth="xs">
                <form method="POST" action="/login" onSubmit={handleSubmit}>
                    <Box my={3}>
                        <TextField
                            label="Email"
                            name="email"
                            fullWidth
                            required
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                        />
                    </Box>
                    <Box my={3}>
                        <TextField
                            label="Password"
                            name="password"
                            fullWidth
                            required
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                        />
                    </Box>
                    <Box my={3}>
                        <FormControlLabel
                            control={<Checkbox name="remember" />}
                            label="Remember me"
                        />
                    </Box>
                    <Box className={classes.buttonRow}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                        <Link component={RRLink} to="/password/reset">
                            Forgot Your Password?
                        </Link>
                    </Box>
                </form>
            </Container>
        </div>
    );
}
