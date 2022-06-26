import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ComponentType, ReactElement, ReactNode } from 'react';

// INTERFACES
export interface IconTypeProps {
    size: string;
    color: string;
}

// TYPES
export type NextPageWithLayout<P = {}> = NextPage<P> & {
    // to be able to use NextPageWithLayout in place of NextPage when creating pages with
    // custom layouts
    getLayout?: (page: ReactElement) => ReactNode;
    layout?: ComponentType;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export type IconType = (props: IconTypeProps) => JSX.Element;
