import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import BookIcon from "@material-ui/icons/Book";
import PersonIcon from "@material-ui/icons/Person";

import { NavigationItem } from "../types/navigation";

const navigationConfig: {
    elevation: number;
    topItems: NavigationItem[];
    bottomItems: NavigationItem[];
} = {
    elevation: 5, // https://material-ui.com/system/shadows/
    topItems: [],
    bottomItems: [
        { text: "Home", href: "/", exact: true, icon: <HomeIcon /> },
        {
            text: "Organizations",
            href: "/orgs",
            exact: true,
            icon: <PeopleIcon />
        },
        { text: "Blog", href: "/blog", exact: true, icon: <BookIcon /> },
        { text: "User", href: "/user", exact: true, icon: <PersonIcon /> }
    ]
};

export default navigationConfig;
