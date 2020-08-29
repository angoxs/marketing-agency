import Layout from "../components/Layout";
import {
  DevelopHero,
  RelatedDevelop,
  DevelopDemo,
  DevelopInfo,
  DevelopDemoTwo,
} from "../components";

export default function develop() {
  return (
    <Layout>
      <DevelopHero />
      <DevelopDemo />
      <DevelopInfo />
      <DevelopDemoTwo />
      <RelatedDevelop />
    </Layout>
  );
}
