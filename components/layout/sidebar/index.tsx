'use client'

import "./Sidebar.css";

import Image from "next/image";
import Link from "next/link";

import {RiDashboardFill as DashboardIcon} from "react-icons/ri";
import {BsGraphUpArrow as Stats} from "react-icons/bs";
import {BsCreditCardFill as Money} from "react-icons/bs";
import {FaWineBottle as Bottle} from "react-icons/fa";
import {AiOutlineSearch as Search} from "react-icons/ai";

import {useState} from "react";
import IconWithText from "@/components/icon-w-text/IconWithText";
import {useRouter} from "next/navigation";
import { usePathname } from 'next/navigation';
export default function Header() {
  const [showNav, setShowNav] = useState<any>(false);
  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <div className="header_app_page h-screen top-[-0vh]">
        <header>
          <Link href={"/"}>
            <Image
              src="/Picto.png"
              className="logo-vv"
              alt="Logo VinoInvest"
              width={70}
              height={60}
            />
          </Link>
        </header>
        <div className="row_icons">
          <Link href={"/dashboard"}>
            <IconWithText icon={DashboardIcon} text="Dashboard"/>
          </Link>
        </div>
        <div className="row_icons">
          <Link href={"/dashboard/collection"}>
            <IconWithText icon={Bottle} text="Collection"/>
          </Link>
          <Link href={"/dashboard/catalog"}>
            <IconWithText icon={Search} text="Catalogue"/>
          </Link>
        </div>
        <div className="row_icons">
          <Link href={"/wallet"}>
            <IconWithText icon={Money} text="Your wallet"/>
          </Link>
          <Link href={"/dashboard/stats"}>
            <IconWithText icon={Stats} text="Stats"/>
          </Link>
        </div>
        <div className="row_icons">
        </div>
      </div>

      {/* for mobile */}
      <div className="mobile_menu">
        <div className="header_mobile">
          <div className="menu_btn" onClick={toggleNavItems}>
            <div className={`burger ${showNav ? 'active' : ''}`} onClick={toggleNavItems}>
              <span className="burger_span"></span>
            </div>
          </div>
        </div>
        {showNav && (
          <div className="nav_mobile">
            <div className="nav_mobile_content">
              <Link className="btn_mobile" href={"/dashboard"}><DashboardIcon/><p>Dashboard</p></Link>
              <Link className="btn_mobile" href={"/invest"}><Bottle/><p>Invest</p></Link>
              <Link className="btn_mobile" href={"/catalog"}><Search/><p>Catalog</p></Link>
              <Link className="btn_mobile" href={"/wallet"}><Money/><p>Wallet</p></Link>
              <Link className="btn_mobile" href={"/stats"}><Stats/><p>Stats</p></Link>
              <Link className="btn_mobile" href={"/settings"}><DashboardIcon/><p>Settings</p></Link>
              <Link className="btn_mobile" href={"/dashboard"}><DashboardIcon/><p>Profile</p></Link>
              <Link className="btn_mobile" href={"/dashboard"}><DashboardIcon/><p>Help</p></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
