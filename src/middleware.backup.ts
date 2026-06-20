import {
  NextRequest,
  NextResponse
} from "next/server";

export function middleware(
  request: NextRequest
) {

  /*
  GET TOKEN FROM COOKIE
  */

  const token =
    request.cookies.get(
      "accessToken"
    )?.value;

  /*
  PROTECTED ROUTES
  */

  const protectedRoutes = [

    "/dashboard",

    "/products",

    "/categories",

    "/users"
  ];

  const currentPath =
    request.nextUrl.pathname;

  /*
  CHECK PROTECTED ROUTE
  */

  const isProtected =
    protectedRoutes.some(
      (route) =>

        currentPath.startsWith(
          route
        )
    );

  /*
  NO TOKEN → REDIRECT LOGIN
  */

  if (
    isProtected &&
    !token
  ) {

    return NextResponse.redirect(

      new URL(
        "/login",
        request.url
      )
    );
  }

  /*
  ALREADY LOGIN → BLOCK LOGIN PAGE
  */

  if (
    currentPath === "/login" &&
    token
  ) {

    return NextResponse.redirect(

      new URL(
        "/dashboard",
        request.url
      )
    );
  }

  return NextResponse.next();
}

/*
MATCH ROUTES
*/

export const config = {

  matcher: [

    "/dashboard/:path*",

    "/products/:path*",

    "/categories/:path*",

    "/users/:path*",

    "/login"
  ]
};