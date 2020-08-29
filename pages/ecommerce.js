import Layout from "../components/Layout";
import {
  EcommerceHero,
  EcommerceDemo,
  EcommerceInfo,
  EcommerceDemoTwo,
  EcommerceMoreInfo,
  EcommerceDemoThree,
  EcommerceMoreInfoThree,
  RelatedWork,
} from "../components";

export default function ecommerce() {
  return (
    <Layout>
      <EcommerceHero />
      <EcommerceDemo />
      <EcommerceInfo />
      <EcommerceDemoTwo />
      <EcommerceMoreInfo />
      <EcommerceDemoThree />
      <EcommerceMoreInfoThree />
      <RelatedWork />
    </Layout>
  );
}
