import { ReactNode } from "react";

export interface NavigationItem {
    text: ReactNode;
    href: string;
    icon?: ReactNode;
}
