import { AppProps } from 'next/app';
import { ThemeProvider } from '../components/ThemeContext';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;