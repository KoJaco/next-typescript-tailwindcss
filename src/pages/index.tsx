import type { ReactElement } from 'react';
export default function Home() {
    return <></>;
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <>{page}</>;
};
