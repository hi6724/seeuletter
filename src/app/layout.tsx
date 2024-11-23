import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import StyledComponentsRegistry from '../components/StyledComponentRegistry';
import Transition from '../components/Transition';
import KakaoScript from '../components/KakaoScript';
import ThemeClient from '../components/ThemeClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '씨유레터',
  description: '씨유레터',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </Head>
      <body className={inter.className} style={{ display: 'flex', justifyContent: 'center', background: '#dcdcdc' }}>
        <div
          style={{
            position: 'relative',
            maxWidth: '500px',
            minHeight: '100vh',
            width: '100%',
            overflowX: 'hidden',
            background: '#f1f1f1',
          }}
        >
          <KakaoScript />
          <Transition>
            <ThemeClient>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </ThemeClient>
          </Transition>
        </div>
      </body>
    </html>
  );
}
