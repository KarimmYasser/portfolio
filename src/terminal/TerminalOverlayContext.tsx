import { createContext, useContext, useState } from "react";

const TerminalOverlayContext = createContext({
  open: false,
  setOpen: (_: boolean) => {},
});

export const TerminalOverlayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <TerminalOverlayContext.Provider value={{ open, setOpen }}>
      {children}
    </TerminalOverlayContext.Provider>
  );
};

export const useTerminalOverlay = () => useContext(TerminalOverlayContext);
