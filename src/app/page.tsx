"use client";

import { Banner, MainContainer, PlatformList } from "@/components/domain";

export default function HomePage() {
  return (
    <main>
      <section>
        <Banner />
        <PlatformList />
        <MainContainer />
      </section>
    </main>
  );
}
