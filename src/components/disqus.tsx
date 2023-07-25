"use client";

import { DiscussionEmbed } from "disqus-react";

export default function Disqus(
  props: React.ComponentProps<typeof DiscussionEmbed>
) {
  return <DiscussionEmbed {...props} />;
}
