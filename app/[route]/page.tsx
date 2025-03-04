import DefaultContainer from "@/containers/DefaultContainer";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  console.log(slug);

  return <DefaultContainer slug={slug} />;
};

export default Page;
