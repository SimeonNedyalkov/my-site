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
      <p className="mt-6 text-lg">
        I'm Simeon Nedyalkov, a JavaScript Web Development graduate from
        Software University, class of 2024. Currently studying Software
        Engineering and Management in Varna Free University.<br></br> I am
        passionate about creating modern, responsive web applications. <br></br>{" "}
        I focus on building clean and efficient code.
      </p>
      <a
        href="https://drive.google.com/file/d/1FR4rM8yiobFs32aBGIov4hcI2gJkd0sK/view?usp=drive_link"
        target="_blank"
        className="button"
      >
        Check CV
      </a>
    </div>
  );
}
