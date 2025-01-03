import { cookies } from "next/headers";
import { IResponseRandomUserAPI } from "@/app/login/domain/randomuser.interface";
import { NextRequest, NextResponse } from "next/server";

import { getLoginFirebase } from "@/app/(home)/application/getLoginFirebase";

export async function POST(request: NextRequest) {
  // Promise<ResponseJwt | ErrorLogin>
  try {
    const req = await request.json();
    const usersFirebase = await getLoginFirebase({user: req.user, pass: req.pass});
    if (usersFirebase && "gender" in usersFirebase) {
      const data: IResponseRandomUserAPI = await fetch(
        `https://randomuser.me/api?gender=${usersFirebase.gender}`,
        {
          next: {
            revalidate: 30,
          },
        }
      ).then((res) => res.json());
      console.log(data)
      if ("results" in data) {
        usersFirebase.avatar = data.results[0].picture.medium;
        usersFirebase.name = `${data.results[0].name.first} ${data.results[0].name.last}`;
      }
    }
    const oneYearFromNow = new Date();
    oneYearFromNow.setHours(oneYearFromNow.getHours() + 4);
    if (!usersFirebase) {
      throw new Error('Error de credenciales');
    }

    (await cookies()).set({
      name: "__session-seek",
      value: JSON.stringify(usersFirebase),
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
