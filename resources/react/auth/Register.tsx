import React, { FormEvent, useState, ChangeEvent } from "react";
import { Link as RRLink, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

import { register } from "./service";
import { withAuth, WithAuthProps } from "./AuthContext";
import AuthLayout from "./AuthLayout";

const useStyles = makeStyles({
    buttonRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export interface RegisterErrors {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        password_confirmation?: string[];
    };
}

function Register({ user, setUser }: WithAuthProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState<RegisterErrors | null>(null);
    const classes = useStyles();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        register(name, email, password, passwordConfirmation)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                setErrors(err.response.data as RegisterErrors);
            });
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            <form method="POST" action="/register" onSubmit={handleSubmit}>
                <Box my={3}>
                    <TextField
                        label="Name"
                        name="name"
                        fullWidth
                        required
                        type="string"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                        error={!!errors?.errors?.name}
                        helperText={errors?.errors?.name?.join(" ")}
                    />
                </Box>
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
                        error={!!errors?.errors?.password}
                        helperText={errors?.errors?.password?.join(" ")}
                    />
                </Box>
                <Box my={3}>
                    <TextField
                        label="Confirm Password"
                        name="password_confirmation"
                        fullWidth
                        required
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPasswordConfirmation(e.target.value)
                        }
                        error={!!errors?.errors?.password_confirmation}
                        helperText={errors?.errors?.password_confirmation?.join(
                            " "
                        )}
                    />
                </Box>
                <Box my={3}>
                    <Button type="submit" variant="contained" color="primary">
                        Register
                    </Button>
                </Box>
                <Box>
                    By joining, you agree to the{" "}
                    <Link component={RRLink} to="/terms">
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link component={RRLink} to="/privacy">
                        Privacy Policy
                    </Link>
                    .
                </Box>
            </form>
        </AuthLayout>
    );
}

export default withAuth(Register);
