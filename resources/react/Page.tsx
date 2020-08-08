import React, { ReactNode } from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: theme.palette.background.default
        }
    })
);

export interface PageProps {
    children: ReactNode;
}

export default function Page({ children }: PageProps) {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
}
