"use client";

import Banner from "@/components/domain/home/banner/Banner";
import HomePageContainer from "@/components/domain/home/container/HomePageContainer";

export default function HomePage() {
  return (
    <main>
      <section>
        <Banner />
        <HomePageContainer />
      </section>
    </main>
  );
}
