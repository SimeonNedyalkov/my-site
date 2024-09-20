import { useRef } from "react";
import useOnScreen from "../hooks/targetElement";

export default function Bio() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className={isVisible ? "dynamicBackground text-7xl" : "text-7xl"}
    >
      <h1>Bio</h1>
      <p className="mt-6">
        I'm Simeon Nedyalkov, a JavaScript Web Development graduate from
        Software University, class of 2024. Passionate about creating modern,
        responsive web applications, I focus on building clean and efficient
        code.
      </p>
    </div>
  );
}
