"use client";

import Head from "next/head";
// import Link from "next/link";

// import { api } from "~/utils/api";

import { useUser, useAuth } from "@clerk/nextjs";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { isLoaded, userId, sessionId } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return <>Loading...</>;
  }

  if (!user) {
    return <>No user signed in</>;
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        Hello, {user.firstName}
        <br />
        Your id is {userId}, your current active session is {sessionId}
      </main>
    </>
  );
}
