import React, { FormEvent, useState, ChangeEvent } from "react";
import { Link as RRLink, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

import { login } from "./service";
import { withAuth, WithAuthProps } from "./AuthContext";
import AuthLayout from "./AuthLayout";

const useStyles = makeStyles({
    buttonRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export interface LoginErrors {
    message: string;
    errors?: {
        email?: string[];
        password?: string[];
    };
}

function Login({ user, setUser }: WithAuthProps) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState<LoginErrors | null>(null);
    const classes = useStyles();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        login(email, password, remember)
            .then(res => {
                setLoading(false);
                setUser(res.data);
            })
            .catch(err => {
                setLoading(false);
                setErrors(err.response.data as LoginErrors);
            });
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            <form method="POST" action="/login" onSubmit={handleSubmit}>
                <Box my={3}>
                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        required
                        type="email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        error={!!errors?.errors?.email}
                        helperText={errors?.errors?.email?.join(" ")}
                    />
                </Box>
                <Box my={3}>
                    <TextField
                        label="Password"
                        name="password"
                        fullWidth
                        required
                        type="password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                    />
                </Box>
                <Box my={3}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="remember"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                            />
                        }
                        label="Remember me"
                    />
                </Box>
                <Box className={classes.buttonRow}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={loading && <CircularProgress size={24} />}
                        disabled={loading}
                    >
                        Login
                    </Button>
                    <Link component={RRLink} to="/password/reset">
                        Forgot Your Password?
                    </Link>
                </Box>
            </form>
        </AuthLayout>
    );
}

export default withAuth(Login);
