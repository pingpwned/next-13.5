import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from "@/navigation";

// import i18n from "../../i18n.json";

export function localizationMiddleware(middleware: NextMiddleware) {
  // return async (request: NextRequest, event: NextFetchEvent) => {
  //   // let siteLanguage = request.cookies.get("NEXT_LOCALE")?.value || "";
  //   // // One-time migration process
  //   // //
  //   // // Users coming from the old my-truetzschler.com app might have the preferred_language cookie.
  //   // // To respect their settings, the language is taken from this cookie and set into this app.
  //   // // The old cookie is deleted since is no longer needed anywhere.
  //   // // The related code can be deleted some time after the go-live.
  //   // const prefferedLanguageCookie =
  //   //   request.cookies.get("preferred_language")?.value || "";

  //   // if (prefferedLanguageCookie) {
  //   //   siteLanguage = prefferedLanguageCookie;
  //   // }

  //   // if (!i18n.locales.includes(siteLanguage)) {
  //   //   siteLanguage = "en";
  //   // }

  //   // if (request.nextUrl.locale === "default") {
  //   //   // Redirect to the default locale
  //   //   // e.g. from "/" to "/en", Next does not do this by default
  //   //   const res = NextResponse.redirect(
  //   //     new URL(
  //   //       `/${siteLanguage}${request.nextUrl.pathname}${request.nextUrl.search}`,
  //   //       request.url
  //   //     )
  //   //   );

  //   //   res.cookies.set("NEXT_LOCALE", siteLanguage, {
  //   //     maxAge: 60 * 60 * 24 * 365, // 1 year
  //   //     secure: true,
  //   //   });
  //   //   res.cookies.delete("preferred_language");

  //   //   return res;
  //   // }

  //   // return middleware(request, event);

  //   const mw =
  //   return
  // };

  return createMiddleware({
    defaultLocale: "en",
    locales,
    pathnames,
  });
}
