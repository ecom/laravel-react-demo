import React, { FormEvent, useState, ChangeEvent } from "react";
import { Link as RRLink, Redirect } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

import { register } from "./service";
import { useAuth } from "./AuthContext";
import AuthLayout from "./AuthLayout";

export interface RegisterErrors {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        password_confirmation?: string[];
    };
}

export default function Register() {
    const { user, setUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState<RegisterErrors | null>(null);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        register(name, email, password, passwordConfirmation)
            .then(res => {
                setLoading(false);
                setUser(res.data);
            })
            .catch(err => {
                setLoading(false);
                setErrors(err.response.data as RegisterErrors);
            });
    };

    if (user) {
        return <Redirect to="/email/verify" />;
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
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={loading && <CircularProgress size={24} />}
                        disabled={loading}
                    >
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
