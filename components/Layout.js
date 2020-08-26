import { NextSeo } from "next-seo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FooterClip from "./FooterClip";

export default function Layout({ children }) {
  return (
    <>
      <NextSeo
        title="Voxxer"
        description="We make digital beautiful"
        canonical="https://marketing-agency.vercel.app"
        hrefLang="pt-BR"
        openGraph={{
          url: "https://marketing-agency.vercel.app",
          title: "Voxxer",
          description: "We make digital beautiful",
          images: [
            {
              url:
                "https://p69.f3.n0.cdn.getcloudapp.com/items/WnuJye1L/MacBook%20Pro%20-%201.png?source=viewer&v=7a52b6df986b384e54c036e7d3a7fc71",
              width: 800,
              height: 800,
              alt: "Preview",
            },
          ],
          site_name: "Voxxer",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <NavBar />
      {children}
      <Footer />
      <FooterClip />
    </>
  );
}
