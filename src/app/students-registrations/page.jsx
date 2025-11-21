"use client";
import { Layout } from "@/layouts/Layout";
import { coursesList } from "@/data/courses";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function StudentRegistrations() {
  const searchParams = useSearchParams();
  const courseIdParam = searchParams.get("courseId");

  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    if (courseIdParam) {
      const courseId = parseInt(courseIdParam);
      if (!selectedCourses.includes(courseId)) {
        setSelectedCourses([courseId]);
      }
    }
  }, [courseIdParam, selectedCourses]);

  const handleCourseToggle = (courseId) => {
    setSelectedCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <Layout
      breadcrumbTitle={"Students Registrations"}
      breadcrumbSubtitle={"Students Registrations"}
    >
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <div className="td_form_card_in">
                  <h2 className="td_fs_36 td_mb_20 text-uppercase td_mb_16">
                    Students Registrations
                  </h2>
                  <h3 className="td_fs_24 td_medium td_opacity_9 td_mb_32">
                    Fields with * are required
                  </h3>
                  <p className="td_fs_18 td_heading_color td_opacity_7 td_mb_40">
                    Join Madhushala Music and embark on your journey to master music and dance.
                    Select the courses you&apos;re interested in and we&apos;ll get back to you.
                  </p>
                  <h3 className="td_fs_32 td_medium td_mb_30">Your Information</h3>

                  <label className="td_medium td_heading_color td_mb_12">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />

                  <label className="td_medium td_heading_color td_mb_12">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />

                  <label className="td_medium td_heading_color td_mb_12">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                  />

                  <label className="td_medium td_heading_color td_mb_12">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="+977 123-4567890"
                  />

                  <label className="td_medium td_heading_color td_mb_12">
                    Select Courses * (You can select multiple)
                  </label>
                  <div className="td_course_selection_list td_mb_30" style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '15px', backgroundColor: 'white' }}>
                    {coursesList.map((course) => (
                      <div key={course.id} className="form-check td_mb_10">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`course-${course.id}`}
                          checked={selectedCourses.includes(course.id)}
                          onChange={() => handleCourseToggle(course.id)}
                          style={{ cursor: 'pointer' }}
                        />
                        <label
                          className="form-check-label td_medium"
                          htmlFor={`course-${course.id}`}
                          style={{ cursor: 'pointer', marginLeft: '8px' }}
                        >
                          {course.title} <span className="td_opacity_7">({course.category})</span>
                        </label>
                      </div>
                    ))}
                  </div>

                  <label className="td_medium td_heading_color td_mb_12">
                    Message (Optional)
                  </label>
                  <textarea
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    rows="5"
                    placeholder="Tell us about your interest in music and dance, your goals, or any questions you have..."
                  ></textarea>

                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_10 td_medium w-100 td_fs_20"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Submit Registration</span>
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          d="M15.1575 4.34302L3.84375 15.6567"
                          stroke="currentColor"
                        />
                        <path
                          d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                          stroke="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StudentRegistrations />
    </Suspense>
  );
}
