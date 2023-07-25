import { MDXProvider } from "@mdx-js/react";
import clsx from "clsx";
import fs, { readFileSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeHighlight from "rehype-highlight";

import Link from "@/components/link";
import OrderedList from "@/components/ordered-list";
import Pre from "@/components/pre";

export const POST_DIR = path.resolve(process.cwd(), "src", "content", "blog");

export const postFilePaths = fs
  .readdirSync(POST_DIR)
  .filter((path) => /.mdx?$/.test(path));

const components: React.ComponentProps<typeof MDXProvider>["components"] = {
  a: ({ children, href = "", ref, ...props }) => (
    <Link href={href} ref={typeof ref === "string" ? null : ref} {...props}>
      {children}
    </Link>
  ),
  ol: OrderedList,
  pre: Pre,
};

interface Frontmatter {
  title: string;
  author: string;
  description: string;
  publish_date: string;
  published?: boolean;
}

export async function getPost(filePath: string) {
  const fullFilePath = path.join(POST_DIR, filePath);
  const source = readFileSync(fullFilePath);

  const {
    content,
    frontmatter: { description, publish_date, title, published },
  } = await compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins: [rehypeHighlight] },
    },
    components,
  });

  return {
    content,
    meta: {
      title,
      description,
      publish_date: new Date(publish_date),
      author: "Jason Yang", // TODO: hard coded for now
      published,
    },
    slug: filePath.replace(/\.mdx?$/, ""),
  };
}

interface GetAllPostsOptions {
  showHidden?: boolean;
}

export async function getAllPosts({ showHidden }: GetAllPostsOptions = {}) {
  return (await Promise.all(postFilePaths.map(getPost))).filter(
    (post) => showHidden || post.meta.published
  );
}
