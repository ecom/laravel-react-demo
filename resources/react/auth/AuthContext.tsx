import React, { useState, ReactNode } from "react";
import { User } from "../types/user";

export interface WithAuthProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = React.createContext<WithAuthProps>({
    user: null,
    setUser: (user: User | null) => {}
});

export interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>((window as any).user);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const withAuth = <P extends object>(
    Component: React.ComponentType<P & WithAuthProps>
) => (props: P) => (
    <AuthContext.Consumer>
        {(authProps: WithAuthProps) => <Component {...authProps} {...props} />}
    </AuthContext.Consumer>
);
