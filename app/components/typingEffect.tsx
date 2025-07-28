import { useState, useEffect } from "react";

export default function TypingEffect() {
  const text = "Imagine is more important than knowledge";
  const [displayText, setDisplayText] = useState("");
  const speed = 100; // سرعة الكتابة

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-xl font-bold">{displayText}</p>;
}
