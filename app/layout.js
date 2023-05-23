"use client"
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function RootLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
