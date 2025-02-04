import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6JT7ZNM43E"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6JT7ZNM43E');`}
        </script>
      </Head>
      <body className="w-dvw h-dvh max-h-dvh scroll-smooth bg-light-bgBody dark:bg-dark-bgBody">
        <Main />
        <NextScript />
        <script> </script>
      </body>
    </Html>
  );
}
