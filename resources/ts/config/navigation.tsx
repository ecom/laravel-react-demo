import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import BookIcon from "@material-ui/icons/Book";
import PersonIcon from "@material-ui/icons/Person";

import { NavigationItem } from "../types/navigation";

const navigationConfig: {
    topItems: NavigationItem[];
    bottomItems: NavigationItem[];
} = {
    topItems: [],
    bottomItems: [
        { text: "Home", href: "/", icon: <HomeIcon /> },
        {
            text: "Organizations",
            href: "/orgs",

            icon: <PeopleIcon />
        },
        { text: "Blog", href: "/blog", icon: <BookIcon /> },
        { text: "User", href: "/user", icon: <PersonIcon /> }
    ]
};

export default navigationConfig;
