import { useState, useMemo, type RefObject } from "react";
import type React from "react";
import { checkCommand, handleCommand } from "../helpers";
import { useContent } from "@/content/ContentContext";
import CommandData from "../data/commands.json";

export default function CmdInput({
  addOutput,
  onExit,
  inputRef,
}: {
  addOutput: (els: JSX.Element[]) => void;
  onExit: () => void;
  inputRef: RefObject<HTMLInputElement>;
}) {
  const [cmd, setCmd] = useState("");
  const [cmdList, setCmdList] = useState<string[]>([]);
  const [suggIndex, setSuggIndex] = useState<number>(-1);
  const [anchor, setAnchor] = useState<string | null>(null);

  const { content, locale } = useContent();
  const allCommands = useMemo(
    () => Object.keys(CommandData).map((c) => c.toLowerCase()),
    []
  );

  // Prefix used for cycling; when empty we'll cycle through all commands
  const effectivePrefix = (anchor ?? cmd.trim()).toLowerCase();

  const breakCmd = (str: string) => {
    setCmdList(str.split(" "));
  };

  const onSubmit = () => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    if (["clear", "cls"].includes(trimmed.toLowerCase())) {
      addOutput([]);
      setCmd("");
      setCmdList([]);
      setSuggIndex(-1);
      setAnchor(null);
      return;
    }
    if (trimmed.toLowerCase() === "exit") {
      onExit();
      return;
    }

    const rendered = handleCommand(trimmed, content);
    const parts = trimmed.split(" ");
    addOutput([
      <li
        key={"cmd" + Date.now()}
        className="flex flex-col font-semibold w-full max-w-full"
      >
        <div
          className={`flex font-semibold w-full max-w-full ${
            locale === "ar" ? "flex-row-reverse rtl:space-x-reverse" : ""
          }`}
        >
          <p className="text-cyber-purple">user</p>
          <p className="text-slate-500 mx-2">$</p>
          {parts.map((token, i) => (
            <p
              className="font-medium"
              key={"token" + i}
              style={{
                color: checkCommand(token) ? "#16a34a" : "#ef4444",
                marginRight: i === cmdList.length - 1 ? 0 : "0.5rem",
              }}
            >
              {token}
            </p>
          ))}
        </div>
        <div className="pl-3 font-mono text-[0.9rem] font-thin my-2">
          {rendered}
        </div>
      </li>,
    ]);

    setCmd("");
    setCmdList([]);
    setSuggIndex(-1);
    setAnchor(null);
  };

  const handleTab = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const prefix = (anchor ?? cmd.trim()).toLowerCase();
    // When no prefix, offer all commands to cycle through
    const options = prefix
      ? allCommands.filter((c) => c.startsWith(prefix))
      : allCommands;
    if (options.length === 0) return;
    if (options.length === 1) {
      const completion = options[0];
      setCmd(completion);
      breakCmd(completion);
      setSuggIndex(-1);
      setAnchor(null);
      return;
    }
    if (anchor === null) setAnchor(cmd.trim());
    const step = e.shiftKey ? -1 : 1;
    const base =
      suggIndex < 0 ? (e.shiftKey ? options.length - 1 : 0) : suggIndex;
    const nextIndex = (base + step + options.length) % options.length;
    setSuggIndex(nextIndex);
    const completion = options[nextIndex];
    setCmd(completion);
    breakCmd(completion);
  };

  return (
    <li
      className={`flex font-semibold w-full max-w-full ${
        locale === "ar" ? "flex-row-reverse rtl:space-x-reverse" : ""
      }`}
      onMouseDown={() => inputRef.current?.focus()}
    >
      <p className="text-cyber-purple">user</p>
      <p className="text-slate-500 mx-2">$</p>
      {cmdList.map((token, i) => (
        <p
          className="font-medium"
          key={"cmdview" + i}
          style={{
            color: checkCommand(token) ? "#16a34a" : "#ef4444",
            marginRight: i === cmdList.length - 1 ? 0 : "0.5rem",
          }}
        >
          {token}
        </p>
      ))}
      <span className="blinking-cursor">|</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          className="text-black w-1 opacity-0"
          autoFocus
          type="text"
          ref={inputRef}
          value={cmd}
          onChange={(e) => {
            const v = e.target.value.toLowerCase();
            setCmd(v);
            breakCmd(v);
            setSuggIndex(-1);
            setAnchor(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Tab") handleTab(e);
          }}
        />
      </form>
      {/* Suggestions UI removed: use Tab/Shift+Tab to cycle through candidates, including all commands when input is empty. */}
    </li>
  );
}
