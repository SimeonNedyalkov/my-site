import Code from "./Code";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeAboutMe">
        <span className="homeText">Hello</span>
        <a
          className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600  transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
          role="button"
          href="https://sso.teachable.com/secure/146684/identity/sign_up"
        >
          Check Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-6 h-4 inline-block transition-all duration-200 ease-out group-hover:ml-3"
          >
            <path
              fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>

      <div className="homeCode">
        <Code></Code>
      </div>
    </div>
  );
}
