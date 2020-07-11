import React, { useRef, useState, ChangeEvent } from "react";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative"
        }
    })
);

export interface ImageUploadGridProps<T extends { id: string }> {
    images?: T[];
    max?: number;
}

export default function ImageUploadGrid<T extends { id: string }>({
    max
}: ImageUploadGridProps<T>) {
    const classes = useStyles();

    return <div></div>;
}
