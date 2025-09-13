import { PropsWithChildren, useEffect, useState } from "react";
import { SessionContext } from "./session.context";
import { supabase } from "@/config";
import { useSessionLoader } from "./session.hooks";

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<unknown>(null);
  const [isFetchingSession, setIsFetchingSession] = useState(true);

  const { isLoading } = useSessionLoader(isFetchingSession);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setIsFetchingSession(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsFetchingSession(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SessionContext.Provider value={{ session, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
};
