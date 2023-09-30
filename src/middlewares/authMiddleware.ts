import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export function authMiddleware(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // if (!environment.AUTHORIZATION_DISABLED) {
    // 1a. check if it's a POST request with Form Data including IDtoken and Access token

    if (request.method === "POST") {
      const formData = await request.formData();
      const token = formData.get("token");
      console.log(token);
      if (token) {
        const response = NextResponse.redirect(request.url, 301);

        // 2a. set `IdToken` and `AccessToken` as session, httpOnly and secure cookies
        response.cookies.set("AccessToken", token?.toString(), {
          secure: true,
          httpOnly: true,
        });
        return response;
      }
    }

    // 2b. read the access token cookie
    const cookie = request.cookies.get("AccessToken")?.value;

    // 3b. if the access token is missing => redirect to the authorization endpoint
    if (!cookie) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_SSO_URL || "");
    }

    // }
    return middleware(request, event);
  };
}
