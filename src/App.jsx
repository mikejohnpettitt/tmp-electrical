import Section from './components/Section.jsx'
import CTA from './components/CTA.jsx'
import Logo from './components/Logo.jsx'
import ColumnsTwo from './components/ColumnsTwo.jsx'
import IconTray from './components/IconTray.jsx'
import './App.css'

const contactLinks = [
  {
    icon: "fa-regular fa-envelope",
    href: "mailto:tom@tmpelectrical.co.uk",
    label: "Email TMP Electrical",
  },
  {
    icon: "fa-brands fa-whatsapp",
    href: "https://wa.me/447846442660",
    label: "Message TMP Electrical on WhatsApp",
  },
  {
    icon: "fa-brands fa-facebook-f",
    href: "https://www.facebook.com/tmpelectrical",
    label: "TMP Electrical on Facebook",
  },
  {
    icon: "fa-brands fa-instagram",
    href: "https://www.instagram.com/tmp.electrical",
    label: "TMP Electrical on Instagram",
  },
  {
    icon: "fa-regular fa-comment",
    href: "https://www.yell.com/biz/tmp-electrical-coventry-10936102/",
    label: "TMP Electrical reviews on Yell",
  }
]

function App() {
  return (
    <>
    <header>
      <Section id="welcome" className="primary dark" bgImage="/header.png">
        <Logo src="/logo01.svg" className="small" altText="TMP Electrical Logo" />
        <h1>Electrician in Coventry | TMP Electrical</h1>
        <p>TMP Electrical provides high-quality electrical services across Coventry and the surrounding areas.</p>
        <p>
          <a href="tel:+447846442660">+44 7846 442660</a>   |   <a href="mailto:tom@tmpelectrical.co.uk">tom@tmpelectrical.co.uk</a>
        </p>

        <p>
          NAPIT Approved | ECS Gold Card | 2391 Inspection & Testing | BS 7671 18th Edition
        </p>
        <Logo src="/NAPIT_membership_logo_ mono.svg" className="small" altText="NAPIT Membership Logo" />
        <CTA color="green" text="Contact" url="#contact" />
      </Section>
    </header>
    <main>
      <Section id="services" className="secondary light">
        <ColumnsTwo image="/services.jpg" altText="An electrician working on a fuse box" orientation="left">  
        <h2>Services</h2>
        <div className="services-list">
          <article>
            <h3>Domestic electrical work</h3>
            <p>
              TMP Electrical carries out domestic electrical work across Coventry,
              including lighting, sockets, repairs, fault finding and general electrical maintenance.
            </p>
          </article>

          <article>
            <h3>Commercial electrical work</h3>
            <p>
              TMP Electrical provides reliable commercial electrical services for local businesses,
              helping keep electrical systems safe, tested and well maintained.
            </p>
          </article>

          <article>
            <h3>Inspection and testing</h3>
            <p>
              Tom is qualified in 2391 Inspection & Testing and works to BS 7671 18th Edition
              wiring regulations.
            </p>
          </article>
        </div>
        </ColumnsTwo>

      </Section>
      <Section id="about" className="secondary light">
        <ColumnsTwo image="/tom_profile.jpeg" altText="Tom from TMP Electrical, electrician in Coventry" orientation="right">
          <h2>About Tom</h2>

          <p>
            Tom is the electrician behind TMP Electrical, providing reliable domestic
            and commercial electrical services across Coventry and the surrounding areas.
          </p>

          <p>
            He is NAPIT approved, holds an ECS Gold Card, and is qualified in 2391
            Inspection & Testing and BS 7671 18th Edition wiring regulations.
          </p>

          <p>
            Whether you need electrical repairs, new installations, inspection and
            testing, fault finding, or general electrical advice, TMP Electrical offers
            a friendly, professional and dependable service.
          </p>
        </ColumnsTwo>
      </Section>
      <Section id="areas" className="secondary light">
      <ColumnsTwo image="/coventry.jpg" altText="An electrician working on a fuse box" orientation="left">  
        <h2>Areas covered</h2>
        <p>TMP Electrical provides electrical services across Coventry and nearby areas, including the wider Warwickshire area. </p>
        <p>Including: Earlsdon, Tile Hill, Allesley, Binley, Coundon, Stoke, Kenilworth, Royal Leamington Spa, Warwick, Rugby, Nuneaton.</p>
        </ColumnsTwo>
      </Section>
      </main>
      <footer>
      <Section id="contact" className="secondary dark">
        <h2>Contact TMP Electrical</h2>
        <p>TMP Electrical is a trusted provider of electrical services, offering a wide range of solutions for both domestic and commercial clients. TMP Electrical is dedicated to delivering high-quality workmanship and exceptional customer service.</p>
      <IconTray
        items={contactLinks}
      />
      </Section>
      </footer>
    </>
  )
}

export default App