import style from "./page.module.css";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <div className={style.firstdiv}>
          <div className={style.firstdivtitle}>
            <h1>
              Vino Invest <span>C'est quoi ?</span>
            </h1>
          </div>
          <div className={style.firstdivimage}>
            <Image
              className={style.firstimage}
              src="/fut_vin.jpg"
              alt="Image de fût de vin"
              layout="responsive"
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1024px) 80vw, 60vw"
            />
          </div>
        </div>
        <div className={style.seconddiv}>
          <div className={style.seconddivimage}>
            <Image
              className={style.secondimage}
              src="/homepage_second.png"
              alt="Image d'ordinateur"
              width={420}
              height={580}
            />
          </div>
          <div>
            <article className={style.firstarticle}>
              <h3>Notre ADN</h3>
              <p>
                Vino Invest, la nouvelle façon d'investir dans le vin ! Vous
                n'avez pas besoin d'être un connaisseur en vin pour profiter des
                avantages de Vino Invest. Grâce à notre plate-forme, vous pouvez
                acheter et vendre des vins de qualité à des prix raisonnables.
                De plus, vous bénéficiez d'un service client personnalisé et
                d'une assurance responsabilité civile, vous assurant que vos
                investissements sont protégés. Vino Invest vous offre la
                possibilité d'investir dans le vin en toute simplicité et en
                toute sécurité !
              </p>
              <section>
                Vino Invest : L'élégance des vins d'exception, l'opportunité
                d'investissement inégalée.
              </section>
            </article>
          </div>
        </div>
        <div className={style.thirddiv}>
          <div className={style.firstaccent}>
            <p>
              Sélection de vins d'exception, service client personnalisé,
              simplicité garantie.
            </p>
          </div>
          <div>
            <article className={style.secondarticle}>
              <h3>Pourquoi nous ?</h3>
              <p>
                Découvrez Vino Invest : une expérience d'investissement dans le
                vin sans égal. Profitez de notre sélection rigoureuse de vins
                d'exception, de notre service client personnalisé et de notre
                engagement en matière de sécurité. Notre plateforme intuitive et
                raffinée vous offre la simplicité et la tranquillité d'esprit
                nécessaires pour investir dans le vin en toute confiance.
                Rejoignez-nous dès aujourd'hui et plongez dans le monde
                passionnant des investissements vinicoles.
              </p>
            </article>
          </div>
          <div className={style.iconlist}>
            <div className={style.icon1}>
              <Image
                src="/icon_ecofriendly.png"
                alt="Eco-friendly"
                width={165}
                height={180}
              />
            </div>
            <div className={style.icon2}>
              <Image
                src="/icon_simple.png"
                alt="Simple"
                width={165}
                height={180}
              />
            </div>
            <div className={style.icon3}>
              <Image
                src="/icon_support.png"
                alt="Support 24/7"
                width={165}
                height={180}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
