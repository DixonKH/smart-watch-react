import React from "react";
import { Member } from "../../lib/types/member";

interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: (Member: Member | null) => void;
  orderBuilder: Date;
  setOrderBuilder: (input: Date) => void;
}

export const GlobalContext = React.createContext<GlobalInterface | undefined>(
  undefined
);

export const useGlobals = () => {
  const context = React.useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobals must be used within a GlobalProvider");
  }
  return context;
};
