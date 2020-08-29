import Layout from "../components/Layout";
import { DesignHero, RelatedWorkDesign, DesignDemo } from "../components";

export default function design() {
  return (
    <Layout>
      <DesignHero />
      <DesignDemo />
      <RelatedWorkDesign />
    </Layout>
  );
}
