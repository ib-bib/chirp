import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { ClerkProvider } from "@clerk/nextjs";


import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider 
    signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
    signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
    {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
