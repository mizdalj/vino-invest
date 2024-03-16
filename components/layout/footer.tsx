'use client';

import Image from "next/image";
import style from "./Footer.module.css";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import {usePathname} from "next/navigation";
export default function Footer() {

  let location = usePathname();

  if (location.includes('/dashboard')) {
    return null;
  }

  return (
    <footer>
      <div className={style.fournisseurs}>
        <h3>Nos fournisseurs</h3>

        <div className={style.img_fournisseurs}>
          <Image
            src="/domaine_saint_andre.png"
            alt="Domaine Saint André"
            width={250}
            height={100}
          />
          <Image
            src="/domaine_citadelle.png"
            alt="Domaine de la citadelle"
            width={250}
            height={100}
            sizes="(max-width: 768px) 30vw, (max-width: 1024px) 40vw, 20vw"
          />
          <Image
            src="/domaine_clarette.png"
            alt="Château clarettes"
            width={250}
            height={100}
            sizes="(max-width: 768px) 30vw, (max-width: 1024px) 40vw, 20vw"
          />
        </div>
        <div className={style.fournisseurstitle}>

        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footerimg}>
          <Image
            src="/logo_group.png"
            alt="Logo VinoInvest"
            width={200}
            height={150}
          />
        </div>
        <div className={style.contactinfo}>
          <p><EmailIcon/> contact@investme.com</p>
          <p><LocalPhoneIcon/> 01 42 63 84 95</p>
          <p><HomeIcon/> 23 rue de Berri 75008 Paris</p>
        </div>
      </div>
    </footer>
  );
}
