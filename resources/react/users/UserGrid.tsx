import React, { ReactNode } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gridTemplateRows: "repeat(auto-fill, 1fr)",
            gap: theme.spacing(2) + "px",
            padding: theme.spacing(2),
            [theme.breakpoints.up("sm")]: {
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
            },
            [theme.breakpoints.up("md")]: {
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))"
            }
        }
    })
);

export interface UserGridProps {
    children: ReactNode;
}

export default function UserGrid({ children }: UserGridProps) {
    const classes = useStyles();

    return <div className={classes.root}>{children}</div>;
}
