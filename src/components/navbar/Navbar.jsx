"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const currentRoute = usePathname();
console.log(currentRoute)
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Uttarakhand <span className={styles.logoColor}>Guide</span>
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <div className={styles.linkWrapper}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={`${styles.link} ${currentRoute===link.url && styles.active}`}>
            {link.title}
          </Link>
        ))}
        </div>
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
