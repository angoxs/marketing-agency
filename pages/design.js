import Layout from "../components/Layout";
import {
  DesignHero,
  RelatedWorkDesign,
  DesignDemo,
  DesignInfo,
  DesignDemoTwo,
  DesignInfoTwo,
  DesignDemoThree,
  DesignInfoThree,
} from "../components";

export default function design() {
  return (
    <Layout>
      <DesignHero />
      <DesignDemo />
      <DesignInfo />
      <DesignDemoTwo />
      <DesignInfoTwo />
      <DesignDemoThree />
      <DesignInfoThree />
      <RelatedWorkDesign />
    </Layout>
  );
}
