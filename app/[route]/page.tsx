import DefaultContainer from "@/containers/DefaultContainer";

export default async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  console.log(slug);

  return <DefaultContainer slug={slug} />;
};
