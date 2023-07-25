import { Metadata } from "next";

import Container from "@/components/container";
import DateDisplay from "@/components/date";
import Header from "@/components/header";
import Link from "@/components/link";
import SegmentedControl from "@/components/segmented-control";
import SpaceBetween from "@/components/space-between";
import { getAllPosts } from "@/utils/blog";

export const metadata: Metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Container header={<Header>Blog</Header>}>
      <SpaceBetween variant="container">
        {posts.map(
          (
            { slug, meta: { title, description, author, publish_date } },
            key
          ) => (
            <section key={key}>
              <Link href={`/blog/${slug}`}>{title}</Link>
              <div className="text-gray-500 text-xs">
                Published on <DateDisplay date={new Date(publish_date)} /> by{" "}
                {author}
              </div>
              <div>{description}</div>
            </section>
          )
        )}
      </SpaceBetween>
    </Container>
  );
}
