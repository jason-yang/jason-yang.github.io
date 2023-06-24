import Container from "@/components/container";
import DateDisplay from "@/components/date";
import Header from "@/components/header";
import Link from "@/components/link";
import { getAllPosts } from "@/utils/blog";
import { Metadata } from "next";

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
      <ol>
        {posts.map(({ slug, meta: { title, publish_date } }, key) => (
          <li key={key}>
            <Link href={`/blog/${slug}`}>{title}</Link>
            <div>
              <DateDisplay date={new Date(publish_date)} />
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}
