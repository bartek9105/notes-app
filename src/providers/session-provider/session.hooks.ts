import { useContext } from "react";
import { SessionContext } from "./session.context";

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSessionContext must be used within SessionContext");
  }
  return context;
};
