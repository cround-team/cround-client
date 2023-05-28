"use client";

import CreatorDetailContainer from "@/components/domain/creators/detail/container/CreatorDetailContainer";

type CreatorDetailPageProps = {
  params: {
    slug: number;
  };
};

export default async function CreatorDetailPage({
  params,
}: CreatorDetailPageProps) {
  return (
    <>
      <CreatorDetailContainer />
    </>
  );
}
