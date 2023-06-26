import fs, { readFileSync, statSync } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

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
    frontmatter: { description, publish_date, title },
  } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return {
    content,
    meta: {
      title,
      description,
      publish_date: new Date(publish_date),
      author: "Jason Yang", // TODO: hard coded for now
    },
    slug: filePath.replace(/\.mdx?$/, ""),
  };
}

export async function getAllPosts() {
  return Promise.all(postFilePaths.map(getPost));
}
