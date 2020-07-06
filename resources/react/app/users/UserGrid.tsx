import React, { ReactNode } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gridTemplateRows: "repeat(auto-fill, 1fr)",
            gap: theme.spacing(2) + "px",
            padding: theme.spacing(2)
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
