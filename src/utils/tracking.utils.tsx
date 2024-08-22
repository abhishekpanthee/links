
import Script from 'next/script';

// Default: Tracking is enabled when no .env file is present
export const trackingEnabled =
  (process.env.ENABLE_TRACKING && process.env.ENABLE_TRACKING === 'true') ??
  true;


export const registerGTM = () => {
  if (trackingEnabled) {
    return (
      <>
        {/* Google Tag Manager */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${
            process.env.GOOGLE_TAG_MANAGER_UID ?? 'GTM-KDHSQ6Q5'
          }`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', '${
            process.env.GOOGLE_TAG_MANAGER_UID ?? 'GTM-KDHSQ6Q5'
          }');
        `}
        </Script>
      </>
    );
  }
};

export const registerMicrosoftClarity = () => {
  if (trackingEnabled) {
    return (
      <>
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${
                process.env.MICROSOFT_CLARITY_UID ?? 'nlxuqpvtrj'
              }");
            `,
          }}
        />
      </>
    );
  }
};




