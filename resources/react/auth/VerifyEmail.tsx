import React, { FormEvent, useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import { useAuth } from "./AuthContext";
import AuthLayout from "./AuthLayout";
import { resendEmail } from "./service";
import { Redirect } from "react-router-dom";

interface Result {
    success: boolean;
    data: any;
}

export default function VerifyEmail() {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<boolean | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        resendEmail()
            .then(() => {
                setLoading(false);
                setResult(true);
            })
            .catch(() => {
                setLoading(false);
                setResult(false);
            });
    };

    if (user?.email_verified_at) {
        return <Redirect to="/" />;
    }

    return (
        <AuthLayout>
            <Box my={3}>
                <Typography variant="body1">
                    A verification email has been sent to your email address.
                    Please check your inbox (and spam folder).
                </Typography>
            </Box>
            <Box my={3}>
                <Typography variant="body1">
                    If you didn't receive the email in 5 minutes, click the
                    button below:
                </Typography>
            </Box>
            <Box my={3}>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={loading && <CircularProgress size={24} />}
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    Resend Verification Email
                </Button>
            </Box>
            {typeof result === "boolean" &&
                (result ? (
                    <Alert variant="filled" severity="success">
                        Verification email was sent successfully!
                    </Alert>
                ) : (
                    <Alert variant="filled" severity="error">
                        Failed to send verification email. Please check your
                        network and try again later.
                    </Alert>
                ))}
        </AuthLayout>
    );
}
