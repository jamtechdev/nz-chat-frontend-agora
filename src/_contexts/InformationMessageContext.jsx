import { useState, createContext, useContext, useEffect } from "react";
import { AlertBox,JoinMeeting } from "../components/general/AlertBox";
export const InformationMessageContext = createContext();
export default function InformationMessageProvider({ children }) {
  const [showInformationMessage, setShowInformationMessage] = useState(false);
  const [informationMessage, setInformationMessage] = useState(false);
  return (
    <InformationMessageContext.Provider
      value={{ setShowInformationMessage, setInformationMessage }}
    >
      {showInformationMessage && informationMessage.type === "normal" && (
        <AlertBox
          title={informationMessage?.title}
          message={informationMessage?.message}
          icon={informationMessage?.icon || "success"}
          isLoader={informationMessage?.isLoader || false}
        />
      )}
      {showInformationMessage && informationMessage.type === "joinMeeting" && (
        <JoinMeeting
          title={informationMessage?.title}
          message={informationMessage?.message}
        />
      )}
      {children}
    </InformationMessageContext.Provider>
  );
}
export const useInformationMessageContext = () =>
  useContext(InformationMessageContext);
