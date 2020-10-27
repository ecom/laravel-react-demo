import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "block",
        width: "100%",
        maxHeight: 600,
        minHeight: 300,
        objectFit: "cover",
        objectPosition: "center"
    }
});

export default function Banner({
    className,
    ...rest
}: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>) {
    const classes = useStyles();
    return <img className={classes.root} {...rest} />;
}
