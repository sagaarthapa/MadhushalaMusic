"use client";

import React from "react";
import Link from "next/link";
import { useTabs } from "../../lib/hooks/useTabs";
import { coursesList } from "../../data/courses";

export const CoursesOne = () => {
  useTabs();

  // Group courses by category
  const vocalCourses = coursesList.filter(c => c.category === 'vocal').slice(0, 6);
  const instrumentalCourses = coursesList.filter(c => c.category === 'instrumental').slice(0, 6);
  const danceCourses = coursesList.filter(c => c.category === 'dance').slice(0, 6);
  const allCourses = coursesList.slice(0, 6);

  return (
    <section className="td_gray_bg_3">
      <div className="td_height_112 td_height_lg_75" />

      <div className="container">
        {/* header */}
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.15s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Popular Courses
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">Music & Dance Programs</h2>
        </div>
        <div className="td_height_30 td_height_lg_30" />

        {/* tabs */}
        <div className="td_tabs">
          <ul
            className="td_tab_links td_style_1 td_mp_0 td_fs_20 td_medium td_heading_color wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <li className="active">
              <a href="#tab_1">All Courses</a>
            </li>
            <li>
              <a href="#tab_2">Vocal</a>
            </li>
            <li>
              <a href="#tab_3">Instrumental</a>
            </li>
            <li>
              <a href="#tab_4">Dance</a>
            </li>
          </ul>
          <div className="td_height_50 td_height_lg_50" />

          <div className="td_tab_body">
            <div className="td_tab active" id="tab_1">
              <div className="row td_gap_y_24">
                {allCourses.map((course, idx) => (
                  <div
                    key={course.id}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={`0.${2 + idx}s`}
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_2">
              <div className="row td_gap_y_24">
                {vocalCourses.map((course, idx) => (
                  <div key={course.id} className="col-lg-4 col-md-6">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_3">
              <div className="row td_gap_y_24">
                {instrumentalCourses.map((course, idx) => (
                  <div key={course.id} className="col-lg-4 col-md-6">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_4">
              <div className="row td_gap_y_24">
                {danceCourses.map((course, idx) => (
                  <div key={course.id} className="col-lg-4 col-md-6">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="td_course td_style_1 td_type_1 td_radius_10 overflow-hidden">
      <Link
        href={`/course-details/${course.id}`}
        className="td_course_thumb d-block td_bg_filed"
        style={{
          backgroundImage: `url(${course.image})`,
          height: '250px',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <span className="td_course_category td_heading_bg td_white_color text-uppercase td_fs_14 td_medium">
          {course.category}
        </span>
      </Link>
      <div className="td_course_info">
        <div className="td_course_info_in">
          <p className="td_course_subtitle text-uppercase td_fs_14 td_opacity_7 td_mb_8 td_medium">
            {course.category}
          </p>
          <h2 className="td_course_title td_fs_24 td_mb_10">
            <Link href={`/course-details/${course.id}`}>{course.title}</Link>
          </h2>
          <p className="td_course_text td_opacity_7 td_mb_20">
            {course.description}
          </p>
          <ul className="td_course_meta td_mp_0 td_medium td_fs_16">
            <li>
              <span>👥</span> {course.seats} Seats
            </li>
            <li>
              <span>📅</span> {course.semesters} Months
            </li>
          </ul>
        </div>
        <Link
          href={`/course-details/${course.id}`}
          className="td_course_btn td_center td_heading_color"
        >
          <span className="td_course_btn_text td_fs_18 td_medium">
            Details
          </span>
          <span className="td_course_btn_icon td_center td_accent_bg td_white_color td_fs_24">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1575 4.34302L3.84375 15.6567"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

