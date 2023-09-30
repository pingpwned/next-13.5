import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from "@/navigation";

export function localizationMiddleware() {
  return createMiddleware({
    defaultLocale: "en",
    locales,
    pathnames,
  });
}
