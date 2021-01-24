import React, { useRef, useState, ChangeEvent } from "react";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CloudUploadIcon from "@material-ui/icons/CloudUploadOutlined";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { readFileAsDataString } from "./image-file-utils";

const size = 200;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            width: size,
            height: size,
            marginTop: theme.spacing(2)
        },
        actionArea: {
            width: "100%",
            height: "100%"
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
        },
        placeholder: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        placeholderIcon: {
            fontSize: theme.spacing(5)
        },
        removeButton: {
            position: "absolute",
            right: theme.spacing(0.5),
            top: theme.spacing(0.5),
            background: theme.palette.background.paper + " !important"
        }
    })
);

export interface ImageUploadCardProps {
    image?: string;
    disabled?: boolean;
    onChange?: (file: File | null, dataUrl: string) => void;
    onRemove?: () => void;
}

export default function ImageUploadCard({
    image,
    disabled,
    onChange,
    onRemove
}: ImageUploadCardProps) {
    const classes = useStyles();
    const input = useRef<HTMLInputElement>(null);
    const [localImage, setLocalImage] = useState<string | null>(null);

    const handleSelect = () => {
        input.current?.click();
    };

    const handleRemove = () => {
        if (onRemove) {
            onRemove();
        }

        if (input.current) {
            input.current.value = "";
        }
        setLocalImage(null);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            readFileAsDataString(file).then(data => {
                if (onChange) {
                    onChange(file, data);
                }
                setLocalImage(data);
            });
        }
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea
                className={classes.actionArea}
                onClick={handleSelect}
            >
                {localImage ? (
                    <CardMedia
                        className={classes.image}
                        component="img"
                        image={localImage || image}
                    />
                ) : (
                    <div className={classes.placeholder}>
                        <CloudUploadIcon className={classes.placeholderIcon} />
                        <Typography>Upload Image</Typography>
                    </div>
                )}
            </CardActionArea>
            <input
                ref={input}
                type="file"
                accept="image/*"
                hidden
                onChange={handleChange}
                disabled={disabled}
            />
            {localImage && (
                <IconButton
                    className={classes.removeButton}
                    size="small"
                    onClick={handleRemove}
                >
                    <RemoveCircleIcon />
                </IconButton>
            )}
        </Card>
    );
}
