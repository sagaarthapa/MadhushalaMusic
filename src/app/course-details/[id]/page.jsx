"use client";
import React from "react";
import { CouresesNine } from "@/components/courses/CouresesNine";
import { CourseDetailContent } from "@/components/courses/CourseDetailContent";
import { Layout } from "@/layouts/Layout";
import { coursesList } from "@/data/courses";
import { notFound } from "next/navigation";

export default function CourseDetails({ params }) {
    const course = coursesList.find((c) => c.id === parseInt(params.id));

    if (!course) {
        return notFound();
    }

    return (
        <Layout
            breadcrumbTitle={course.title}
            breadcrumbSubtitle={course.category}
        >
            <div style={{ marginTop: "300px" }}>
                {/* details */}
                <CourseDetailContent course={course} />

                {/* popular */}
                <CouresesNine />
            </div>
        </Layout>
    );
}
