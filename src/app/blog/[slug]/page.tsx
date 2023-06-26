import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import Container from "@/components/container";
import Header from "@/components/header";
import { getPost, postFilePaths } from "@/utils/blog";
import { formatRelative } from "date-fns";
import { Metadata } from "next";

export const dynamicParams = false;

interface BlogEntryParams {
  slug: string;
}

interface BlogEntryPageProps {
  params: BlogEntryParams;
}

export default async function BlogEntryPage({
  params: { slug },
}: BlogEntryPageProps) {
  const {
    content,
    meta: { title, publish_date },
  } = await getPost(`${slug}.mdx`);

  return (
    <article>
      <Breadcrumb label={title} href={`/blog/${slug}`} />
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
    meta: { title, description, author },
  } = await getPost(`${props.params.slug}.mdx`);

  return {
    title: `${title} | Blog`,
    description,
    authors: {
      name: author,
    },
    openGraph: {
      type: "article",
    },
  };
}
