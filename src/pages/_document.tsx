import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <script data-cookieconsent="ignore">    window.dataLayer = window.dataLayer || [];    function gtag() {        dataLayer.push(arguments);    }    gtag("consent", "default", {        ad_personalization: "denied",        ad_storage: "denied",        ad_user_data: "denied",        analytics_storage: "denied",        functionality_storage: "denied",        personalization_storage: "denied",        security_storage: "granted",        wait_for_update: 500,    });    gtag("set", "ads_data_redaction", true);    gtag("set", "url_passthrough", false);</script>
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
        <Main />
        <NextScript />
        <script> </script>
      </body>
    </Html>
  );
}
