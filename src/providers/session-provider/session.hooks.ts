import { useContext, useEffect, useState } from "react";
import { SessionContext } from "./session.context";
import { MIN_LOADING_DURATION_MS } from "./session.const";

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSessionContext must be used within SessionContext");
  }
  return context;
};

export const useSessionLoader = (isFetchingSession: boolean) => {
  const [isLoading, setIsLoading] = useState(true);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (isFetchingSession) {
      setStartTime(Date.now());
      return;
    }

    if (!startTime) return;

    const elapsed = Date.now() - startTime;
    const remaining = MIN_LOADING_DURATION_MS - elapsed;

    if (remaining > 0) {
      const timer = setTimeout(() => setIsLoading(false), remaining);
      return () => clearTimeout(timer);
    }

    setIsLoading(false);
  }, [isFetchingSession, startTime]);

  return { isLoading };
};
