import Layout from "../components/Layout";
import { EcommerceHero, EcommerceDemo, EcommerceInfo } from "../components";

export default function ecommerce() {
  return (
    <Layout>
      <EcommerceHero />
      <EcommerceDemo />
      <EcommerceInfo />
      <EcommerceDemo />
    </Layout>
  );
}
