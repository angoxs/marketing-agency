import Layout from "../components/Layout";
import {
  DesignHero,
  RelatedWorkDesign,
  DesignDemo,
  DesignInfo,
  DesignDemoTwo,
} from "../components";

export default function design() {
  return (
    <Layout>
      <DesignHero />
      <DesignDemo />
      <DesignInfo />
      <DesignDemoTwo />
      <RelatedWorkDesign />
    </Layout>
  );
}
