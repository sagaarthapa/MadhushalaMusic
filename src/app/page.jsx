"use client";

import { Layout } from "@/layouts/Layout";
import { HeroOne } from "@/components/hero/HeroOne";
import { AboutOne } from "@/components/about/AboutOne";
import { CampusOne } from "@/components/campus/CampusOne";
import { CoursesAllContainer } from "@/components/courses/CoursesAllContainer";
import CoursesAllGrid from "@/components/courses/CoursesAllGrid";
import { DepartmentOne } from "@/components/departments/DepartmentOne";
import { FeatureOne } from "@/components/features/FeatureOne";
import { TestimonialOne } from "@/components/testimonials/TestimonialOne";
import { VideoOne } from "@/components/videos/VideoOne";
import React, { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <Layout header={1} footer={1}>
      {/* hero */}
      <HeroOne />

      {/* about */}
      <AboutOne />

      {/* popular */}
      <CoursesAllContainer
        isGrid
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      >
        <CoursesAllGrid selectedCategory={selectedCategory} />
      </CoursesAllContainer>

      {/* feature */}
      <FeatureOne />

      {/* campus */}
      <CampusOne />

      {/* departments */}
      <DepartmentOne />

      {/* video */}
      <VideoOne />

      <div className="td_height_120 td_height_lg_80" />

      {/* testimonial */}
      <TestimonialOne />
    </Layout>
  );
}
