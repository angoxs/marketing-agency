import Layout from "../components/Layout";
import {
  EcommerceHero,
  EcommerceDemo,
  EcommerceInfo,
  EcommerceDemoTwo,
} from "../components";

export default function ecommerce() {
  return (
    <Layout>
      <EcommerceHero />
      <EcommerceDemo />
      <EcommerceInfo />
      <EcommerceDemoTwo />
    </Layout>
  );
}
