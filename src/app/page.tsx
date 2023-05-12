import Banner from "@/components/domain/home/banner/Banner";
import SelectPlatform from "@/components/domain/home/selectPlatform/SelectPlatform";

export default function HomePage() {
  return (
    <main>
      <section>
        <Banner />
        <SelectPlatform />
      </section>
    </main>
  );
}
