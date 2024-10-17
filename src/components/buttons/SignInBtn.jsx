"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="flex gap-2 items-center">
          <Image
            src={session.user.image}
            alt="profile image"
            width={20}
            height={20}
            className="rounded-full"
          />
          <span>hello, {session?.user.name.substring(0, 10)}</span>
        </div>
      ) : (
        <Link href="api/auth/signin">Hello, sign in</Link>
      )}
    </>
  );
};

export default SignIn;
