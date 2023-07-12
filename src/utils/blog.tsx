import fs, { readFileSync } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "@/components/link";

export const POST_DIR = path.resolve(process.cwd(), "src", "content", "blog");

export const postFilePaths = fs
  .readdirSync(POST_DIR)
  .filter((path) => /.mdx?$/.test(path));

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
    options: { parseFrontmatter: true },
    components: {
      a: ({ children, href = "", ...props }) => (
        <Link href={href} {...props}>
          {children}
        </Link>
      ),
      ol: ({ children, ...props }) => (
        <ol {...props} className="ml-2 list-decimal list-inside">
          {children}
        </ol>
      ),
    },
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
