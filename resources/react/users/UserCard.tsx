import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { User } from "../types/user";

const useStyles = makeStyles({
    root: {},
    name: {
        whiteSpace: "nowrap"
    }
});

export interface UserCardProps {
    user: User;
}

export default function UserCard({ user }: UserCardProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={user.name}
                    image={user?.portrait?.file_url_medium}
                    title={user.name}
                />
                <CardContent>
                    <Typography
                        className={classes.name}
                        variant="h6"
                        component="h2"
                    >
                        {user.name}
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                        {user.location}
                    </Typography>
                    <Typography variant="caption" component="p">
                        {user.tags.map(tag => (
                            <span> #{tag.name} </span>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
