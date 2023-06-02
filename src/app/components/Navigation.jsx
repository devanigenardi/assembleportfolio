
"use client"
import styles from "./Navigation.module.css" 
import Link from "next/link"
import { usePathname} from 'next/navigation';
import { useState } from "react"

const links = [
    {
      label: "Production",
      route: "/",
    },
    {
      label: "Creative",
      route: "/creative",
    },
    {
      label: "Web Development",
      route: "/web-development",
    }
  ];


export function Navigation() {

  const [activeNav, setActiveNav] = useState(false); 
  const pathname = usePathname();

  // activeNav ? document.body.style.overflow = "hidden":document.body.style.overflow="auto";

  return (
    <section className="full aqua">
        <nav className={`flex justify-between px-4 ${styles.nav}`}>
            <ul className={`w-full flex flex-col md:flex-row md:justify-around items-start ${activeNav ? "active-nav" : "un-active-nav"} ${styles.navigation}`}>
                {links.map(({ label, route }) => (
                <li className={`${styles.navItems}`} key={label}>
                    <Link onClick={() => setActiveNav(!activeNav)} className={`block py-2 md:py-5 font-bold text-[22px] ${pathname == route ?  "active" : "" }`} href={`${route}`}>
                      <span className="navLinks">{label}</span>
                    </Link>
                </li>
                ))}
            </ul>
            <div className={`menuIconToggle ${activeNav ? "active-nav" : "un-active-nav"} ${styles.unactivenav}`} onClick={() => setActiveNav(!activeNav)}>
              <span className="hamb-line dia p-1"></span>
              <span className="hamb-line hor"></span>
              <span className="hamb-line dia p-2"></span>
            </div>
        </nav>
    </section>
  );
}