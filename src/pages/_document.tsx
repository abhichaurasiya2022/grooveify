import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
<script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5LDRQVW4');`}</script>

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BCRS3WHWWZ"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BCRS3WHWWZ');`}
        </script>

        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="06368c4e-aa23-441a-b490-c860e539ee3d" type="text/javascript" async>
        </script>
      </Head>
      <body className="w-dvw h-dvh max-h-dvh scroll-smooth bg-light-bgBody dark:bg-dark-bgBody">
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5LDRQVW4"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <Main />
        <NextScript />
        <script> </script>
      </body>
    </Html>
  );
}
