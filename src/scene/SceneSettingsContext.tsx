import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type SceneSettings = {
  showBackground: boolean;
  setShowBackground: (v: boolean) => void;
  lowPower: boolean;
  setLowPower: (v: boolean) => void;
};

const SceneSettingsContext = createContext<SceneSettings | undefined>(
  undefined
);

const BG_KEY = "scene-bg";
const LOW_KEY = "scene-low";

export function SceneSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBackground, setShowBackground] = useState<boolean>(true);
  const [lowPower, setLowPower] = useState<boolean>(false);

  // load persisted
  useEffect(() => {
    try {
      const storedBg = localStorage.getItem(BG_KEY);
      const storedLow = localStorage.getItem(LOW_KEY);
      if (storedBg === "0" || storedBg === "1") {
        setShowBackground(storedBg === "1");
      }
      if (storedLow === "0" || storedLow === "1") {
        setLowPower(storedLow === "1");
      }
    } catch {}
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(BG_KEY, showBackground ? "1" : "0");
    } catch {}
  }, [showBackground]);

  useEffect(() => {
    try {
      localStorage.setItem(LOW_KEY, lowPower ? "1" : "0");
    } catch {}
  }, [lowPower]);

  const value = useMemo(
    () => ({ showBackground, setShowBackground, lowPower, setLowPower }),
    [showBackground, lowPower]
  );

  return (
    <SceneSettingsContext.Provider value={value}>
      {children}
    </SceneSettingsContext.Provider>
  );
}

export function useSceneSettings() {
  const ctx = useContext(SceneSettingsContext);
  if (!ctx)
    throw new Error(
      "useSceneSettings must be used within SceneSettingsProvider"
    );
  return ctx;
}
