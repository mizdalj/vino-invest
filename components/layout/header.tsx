"use client";

import Link from "next/link";
import Image from "next/image";
import style from "./Header.module.css";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import Sidebar from "@/components/layout/sidebar";

export default function Header() {
  const [showNav, setShowNav] = useState<any>(false);
  const [token, setToken] = useState<any>(null);
  const [email, setEmail] = useState<any>(null);
  const [username, setUsername] = useState<any>(null);

  useEffect(() => {
    const storedToken: any = localStorage.getItem('token');
    const storedEmail: any = localStorage.getItem('email');
    const storedUsername: any = localStorage.getItem('username');

    setToken(storedToken);
    setEmail(storedEmail);
    setUsername(storedUsername);
  }, []);

  const location = usePathname();

  const [showSidebar, setShowSidebar] = useState<any>(false);


  const router = useRouter();
  const signOut = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    window.location.reload();
  }

  useEffect(() => {
    location.includes('/dashboard') ? setShowSidebar(true) : setShowSidebar(false)
  }, [location]);

  useEffect(() => {
    // location.includes('login') && token && router.replace('/dashboard');
    // location.includes('dashboard') && !token && router.replace('/');
  }, [token]);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <div className={style.container}>
        {showSidebar && <Sidebar/>}
        {!showSidebar &&
            <header className={style.header}>
                <nav>
                    <ul>
                        <div className="cursor-pointer" onClick={() => router.replace("/")}>
                            <Image
                                src="/logo_group.png"
                                alt="Logo VinoInvest"
                                width={200}
                                height={150}
                            />
                        </div>
                      {token && (
                        <>
                          <button className={style.btn_header}><Link href={"/tendencies"}>À la une</Link></button>
                          <button className={style.btn_header}><Link href={"/catalog"}>Catalogue</Link></button>
                          <button className={style.btn_header}>
                            <Link href={"/dashboard"}>Dashboard</Link>
                          </button>
                          <button onClick={signOut} className={style.btn_green}>
                            Déconnexion
                          </button>
                        </>
                      )}
                      {!token && (
                        <>
                          <button className={style.btn_header}><Link href={"/tendencies"}>À la une</Link></button>
                          <button className={style.btn_header}><Link href={"/catalog"}>Catalogue</Link></button>
                        </>
                      )}

                      {!token && (
                        <div>
                          <button className={style.btn_green}>
                            <Link href={"/login"}>Connexion</Link>
                          </button>
                          <button className={style.btn_green}>
                            <Link href={"/register"}>Inscription</Link>
                          </button>
                        </div>
                      )}

                      {/* for mobile */}
                        <div className={style.mobile_menu}>
                            <div className={style.header_mobile}>
                                <Image
                                    src="/logo_group.png"
                                    alt="Logo VinoInvest"
                                    width={160}
                                    height={120}

                                />
                                <div className={style.menu_btn} onClick={toggleNavItems}>
                                    <Image
                                        src="/menu_green.png"
                                        alt="Menu"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </div>
                          {showNav && (
                            <div className={style.nav_mobile}>
                              <button
                                className={style.btn_mobile}
                                onClick={toggleNavItems}
                              >
                                X
                              </button>
                              <div className={style.nav_mobile}>
                                <button className={style.btn_mobile}>Présentation</button>
                                <button className={style.btn_mobile}>
                                  Investissement
                                </button>
                                <button className={style.btn_mobile}>Contact</button>
                                <button className={style.btn_mobile}>
                                  <Link href={"/login"}>Connexion</Link>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>

                    </ul>
                </nav>
            </header>
        }
      </div>
    </div>
  );
}
