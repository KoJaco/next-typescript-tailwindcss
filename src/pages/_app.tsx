import type { AppPropsWithLayout } from '@/core/types';
import { ThemeProvider } from 'next-themes';
import './globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // use layout defined at page level if available.
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <ThemeProvider
            enableSystem={true}
            defaultTheme="system"
            attribute="class"
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
