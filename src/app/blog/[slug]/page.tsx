import Container from "@/components/container";
import Header from "@/components/header";
import { getPost, postFilePaths } from "@/utils/blog";
import { formatRelative } from "date-fns";
import { Metadata } from "next";

export const dynamicParams = false;

interface BlogEntryParams {
  slug: string;
}

export default async function BlogEntryPage(props: {
  params: BlogEntryParams;
}) {
  const {
    content,
    meta: { title, description, publish_date },
  } = await getPost(`${props.params.slug}.mdx`);

  return (
    <article>
      <Container
        header={
          <Header
            description={`Published ${formatRelative(
              publish_date,
              new Date()
            )}`}
          >
            {title}
          </Header>
        }
      >
        {content}
      </Container>
    </article>
  );
}

export async function generateStaticParams(): Promise<BlogEntryParams[]> {
  return postFilePaths.map((path) => ({
    slug: path.replace(/.mdx?$/, ""),
  }));
}

export async function generateMetadata(props: {
  params: BlogEntryParams;
}): Promise<Metadata> {
  const {
    meta: { title },
  } = await getPost(`${props.params.slug}.mdx`);

  return {
    title: `${title} | Blog`,
    openGraph: {
      type: "article",
      authors: "Jason Yang",
    },
  };
}
