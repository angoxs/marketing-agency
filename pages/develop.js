import Layout from "../components/Layout";
import {
  DevelopHero,
  RelatedDevelop,
  DevelopDemo,
  DevelopInfo,
  DevelopDemoTwo,
  DevelopInfoTwo,
  DevelopDemoThree,
} from "../components";

export default function develop() {
  return (
    <Layout>
      <DevelopHero />
      <DevelopDemo />
      <DevelopInfo />
      <DevelopDemoTwo />
      <DevelopInfoTwo />
      <DevelopDemoThree />
      <RelatedDevelop />
    </Layout>
  );
}
