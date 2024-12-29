import { cookies } from "next/headers";
import { IResponseRandomUserAPI } from "@/app/login/domain/randomuser.interface";
import { usersMock } from "@/app/shared/mocks";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Promise<ResponseJwt | ErrorLogin>
  try {
    const req = await request.json();
    const userData =
    usersMock.find((u) => u.user === req.user && u.password === req.pass) ??
    null;
    if (userData && "gender" in userData) {
      const data: IResponseRandomUserAPI = await fetch(
        `https://randomuser.me/api?gender=${userData.gender}`,
        {
          next: {
            revalidate: 30,
          },
        }
      ).then((res) => res.json());
      if ("results" in data) {
        userData.avatar = data.results[0].picture.medium;
        userData.name = `${data.results[0].name.first} ${data.results[0].name.last}`;
      }
    }
    const oneYearFromNow = new Date();
    oneYearFromNow.setHours(oneYearFromNow.getHours() + 4);
    if (!userData) {
      throw new Error('Error de credenciales');
    }

    (await cookies()).set({
      name: "__session-seek",
      value: JSON.stringify(userData),
      path: "/",
      secure: true,
      expires: oneYearFromNow,
    });
    return NextResponse.json({isAuth: true, error: null});
  } catch {
    return NextResponse.json({ isAuth: false,error: "Error de credenciales" });
  }
}


export async function GET() {
  // Promise<ResponseJwt | ErrorLogin>
  try {
    
    const session = (await cookies()).get("__session-seek")?.value ?? null;
    let isAuth = false;
    let userData = null;
    if(session){
      isAuth = true;
      userData = JSON.parse(session);
    }

    return NextResponse.json({
      isAuth: isAuth,
      userData: userData,
      error: null,
    });
  } catch {
    return NextResponse.json({ isAuth: false, error: "Error de credenciales" });
  }
}
