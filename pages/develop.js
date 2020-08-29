import Layout from "../components/Layout";
import {
  DevelopHero,
  RelatedDevelop,
  DevelopDemo,
  DevelopInfo,
} from "../components";

export default function develop() {
  return (
    <Layout>
      <DevelopHero />
      <DevelopDemo />
      <DevelopInfo />
      <RelatedDevelop />
    </Layout>
  );
}
