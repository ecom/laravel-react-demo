import React, { useState, useEffect } from "react";
import axios from "axios";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Banner from "./images/Banner";
import { User } from "./types/user";
import UserCard from "./users/UserCard";
import UserGrid from "./users/UserGrid";
import Page from "./Page";

export default function Home() {
    const [users, setUsers] = useState([] as User[]);
    const [usersFetched, setUsersFetched] = useState(false);
    const [tab, setTab] = useState(0);

    useEffect(() => {
        if (!usersFetched) {
            axios.get("/api/users").then(res => {
                setUsers(res.data as User[]);
                setUsersFetched(true);
            });
        }
    });

    return (
        <Page>
            <Banner
                src="https://source.unsplash.com/RnCPiXixooY/1920x480"
                width="1920"
                height="480"
            />
            <Tabs
                value={tab}
                onChange={(e, v) => setTab(v)}
                aria-label="simple tabs example"
            >
                <Tab label="UI Design" value={0} />
                <Tab label="Service Design" value={1} />
                <Tab label="Graphic Design" value={2} />
                <Tab label="Game Art" value={3} />
            </Tabs>
            <UserGrid>
                {users.map(u => (
                    <UserCard key={u.id} user={u} />
                ))}
            </UserGrid>
        </Page>
    );
}
