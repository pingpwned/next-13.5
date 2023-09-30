import { chain } from "./middlewares/chain";
import { localizationMiddleware } from "./middlewares/localizationMiddleware";
import { authMiddleware } from "./middlewares/authMiddleware";

export default chain([authMiddleware, localizationMiddleware]);

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/"],
};
