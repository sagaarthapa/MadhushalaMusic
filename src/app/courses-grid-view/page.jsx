"use client";
import React, { useState } from "react";
import { CoursesAllContainer } from "@/components/courses/CoursesAllContainer";
import CoursesAllGrid from "@/components/courses/CoursesAllGrid";
import { Layout } from "@/layouts/Layout";

export default function CoursesGridView() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Layout
      breadcrumbTitle={"Courses Grid View"}
      breadcrumbSubtitle={"Courses Grid View"}
    >
      <CoursesAllContainer
        isGrid
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      >
        <CoursesAllGrid selectedCategory={selectedCategory} />
      </CoursesAllContainer>
    </Layout>
  );
}
