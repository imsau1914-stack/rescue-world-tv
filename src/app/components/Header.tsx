"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="live-topbar">
      <a className="live-brand" href="/">
        <img
          src="/logo rescue-world-tv2.svg"
          alt="Rescue World TV"
          className="brand-logo"
        />
      </a>

      <nav className="live-nav">
        <a className={pathname === "/" ? "active" : ""} href="/">
          HOME
        </a>

        <a className={pathname === "/live" ? "active" : ""} href="/live">
          LIVE
        </a>

        <a className={pathname === "/watch" ? "active" : ""} href="/watch">
          WATCH
        </a>

        <a
          className={pathname === "/categories" ? "active" : ""}
          href="/categories"
        >
          CATEGORIES
        </a>

        <a className={pathname === "/about" ? "active" : ""} href="/about">
          ABOUT
        </a>
      </nav>

      <div className="live-top-actions">
       <form
  className="header-search"
  action="/search"
  method="get"
>
  <label htmlFor="header-search-input" className="header-search-icon">
    ⌕      
  </label>
  <input
    id="header-search-input"
    type="search"
    name="q"
    placeholder="Search..."
    aria-label="Search Rescue World TV"
  />
</form>

        <button className="donate-button">
          DONATE <span>♡</span>
        </button>

        <button className="signin-button">
          ♟ &nbsp; SIGN IN
        </button>
      </div>
    </header>
  );
}
