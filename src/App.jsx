import Section from './components/Section.jsx'
import CTA from './components/CTA.jsx'
import Logo from './components/Logo.jsx'
import ColumnsTwo from './components/ColumnsTwo.jsx'
import IconTray from './components/IconTray.jsx'
import './App.css'

function App() {
  return (
    <>
      <Section id="welcome" className="primary dark" bgImage="/header.png">
        <Logo src="/logo01.svg" className="small"></Logo>
        <h1>TMP Electrical</h1>
        <p>High-quality electrical services</p>

        <p>
          <a href="tel:+447846442660">+44 7846 442660</a>
        </p>

        <p>
          <a href="mailto:tom@tmpelectrical.co.uk">tom@tmpelectrical.co.uk</a>
        </p>

        <p>
          NAPIT Approved | ECS Gold Card | 2391 Inspection & Testing | BS 7671 18th Edition
        </p>
        <Logo src="/NAPIT_membership logo_ mono.svg" className="small"></Logo>
        <CTA color="green" text="Contact" url="#contact"></CTA>
      </Section>
      <Section title="Services" id="services" className="secondary light">
        <ColumnsTwo image="/tom_profile.jpeg" altText="Tom from TMP Electrical, electrician in Coventry">  
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
      <Section title="Contact" id="contact" className="secondary dark">
        <p>TMP Electrical is a trusted provider of electrical services, offering a wide range of solutions for both domestic and commercial clients. TMP Electrical is dedicated to delivering high-quality workmanship and exceptional customer service.</p>
        <IconTray
          items={[
            { icon: "fa-regular fa-envelope", href: "mailto:tom@tmpelectrical.co.uk" },
            { icon: "fa-brands fa-whatsapp", href: "https://wa.me/+447846442660" },
            { icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/tmpelectrical" },
            { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/tmp.electrical" },
            { icon: "fa-regular fa-comment", href: "https://www.yell.com/biz/tmp-electrical-coventry-10936102/" },
            { icon: "fa-brands fa-linktree", href: "https://linktr.ee/tmpelectrical?utm_source=linktree_profile_share&ltsid=4c710486-b60e-4cae-afff-ba0a74d7b140" }
          ]}
        />
      </Section>
    </>
  )
}

export default App