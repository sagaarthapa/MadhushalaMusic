import { AboutOne } from "@/components/about/AboutOne";
import { FounderOne } from "@/components/about/FounderOne";
import { BlogOne } from "@/components/blogs/BlogOne";
import { VideoOne } from "@/components/videos/VideoOne";
import { Layout } from "@/layouts/Layout";

export default function About() {
  return (
    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      {/* about */}
      <AboutOne />

      {/* founder */}
      <FounderOne />

      {/* video */}
      <VideoOne />

      {/* blog */}
      <BlogOne />
    </Layout>
  );
}
