import { HydrateClient } from "~/trpc/server";
import HomepageWrapper from "./_components/home/HomepageWrapper";

export default async function Home() {
  return (
    <HydrateClient>
      <HomepageWrapper />
    </HydrateClient>
  );
}
