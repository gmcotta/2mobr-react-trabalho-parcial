import { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkProps extends DetailedHTMLProps<
AnchorHTMLAttributes<HTMLAnchorElement>,
HTMLAnchorElement
> {
    children: ReactNode
}