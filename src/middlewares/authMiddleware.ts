import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export function authMiddleware(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    if (request.method === "POST") {
      const formData = await request.formData();
      const token = formData.get("token");
      if (token) {
        const response = NextResponse.redirect(request.url, 301);

        response.cookies.set("AccessToken", token?.toString(), {
          secure: true,
          httpOnly: true,
        });
        return response;
      }
    }

    const cookie = request.cookies.get("AccessToken")?.value;

    if (!cookie) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_SSO_URL || "");
    }

    return middleware(request, event);
  };
}
