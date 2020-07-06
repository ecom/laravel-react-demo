import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxHeight: 600,
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
