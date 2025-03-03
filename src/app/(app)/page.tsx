import Home from "./Home";
import { getCachedGlobal } from "@/utilities/getGlobals";
import { Homepage } from "@/types/payload-types";

export default async function HomePage() {
  const homepageData: Homepage = await getCachedGlobal("homepage", 1)();

  console.log("HomepageData", homepageData);

  return <Home subtitle={homepageData.subtitle} />;
}
