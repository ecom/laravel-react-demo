import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { User } from "../../types/user";

const useStyles = makeStyles({
    root: {
        maxWidth: 345
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
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
