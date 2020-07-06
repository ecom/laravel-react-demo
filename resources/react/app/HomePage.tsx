import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./Banner";
import { User } from "../types/user";
import UserCard from "./users/UserCard";
import UserGrid from "./users/UserGrid";

export default function Home() {
    const [users, setUsers] = useState([] as User[]);
    const [usersFetched, setUsersFetched] = useState(false);

    useEffect(() => {
        if (!usersFetched) {
            axios.get("/api/users").then(res => {
                setUsers(res.data as User[]);
                setUsersFetched(true);
            });
        }
    });

    return (
        <div>
            <Banner src="https://source.unsplash.com/RnCPiXixooY/1920x1080" />
            <UserGrid>
                {users.map(u => (
                    <UserCard key={u.id} user={u} />
                ))}
            </UserGrid>
        </div>
    );
}
