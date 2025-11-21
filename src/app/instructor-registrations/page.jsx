"use client";
import { Layout } from "@/layouts/Layout";
import { coursesList } from "@/data/courses";
import { useState } from "react";

export default function InstructorRegistrations() {
  const [selectedDisciplines, setSelectedDisciplines] = useState([]);

  const handleDisciplineToggle = (discipline) => {
    setSelectedDisciplines(prev =>
      prev.includes(discipline)
        ? prev.filter(d => d !== discipline)
        : [...prev, discipline]
    );
  };

  const disciplines = [...new Set(coursesList.map(c => c.category))];

  return (
    <Layout
      breadcrumbTitle={"Instructor Registrations"}
      breadcrumbSubtitle={"Instructor Registrations"}
    >
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <div className="td_form_card_in">
                  <h2 className="td_fs_36 td_mb_20 text-uppercase td_mb_16">
                    Instructor Registrations
                  </h2>
                  <h3 className="td_fs_24 td_medium td_opacity_9 td_mb_32">
                    Fields with * are required
                  </h3>
                  <p className="td_fs_18 td_heading_color td_opacity_7 td_mb_40">
                    Join our team of expert instructors at Madhushala Music. Share your passion for music and dance
                    with the next generation of artists. We&apos;re looking for experienced professionals who can inspire and teach.
                  </p>

                  <h3 className="td_fs_32 td_medium td_mb_30">Your Information</h3>

                  <label className="td_medium td_heading_color td_mb_12">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Enter your full name"
                  />

                  <label className="td_medium td_heading_color td_mb_12">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="your.email@example.com"
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
                    Area of Expertise * (Select all that apply)
                  </label>
                  <div className="td_discipline_selection td_mb_30" style={{ border: '1px solid #e0e0e0', borderRadius: '10px', padding: '15px', backgroundColor: 'white' }}>
                    {disciplines.map((discipline) => (
                      <div key={discipline} className="form-check td_mb_10">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`discipline-${discipline}`}
                          checked={selectedDisciplines.includes(discipline)}
                          onChange={() => handleDisciplineToggle(discipline)}
                          style={{ cursor: 'pointer' }}
                        />
                        <label
                          className="form-check-label td_medium text-capitalize"
                          htmlFor={`discipline-${discipline}`}
                          style={{ cursor: 'pointer', marginLeft: '8px' }}
                        >
                          {discipline}
                        </label>
                      </div>
                    ))}
                    <div className="form-check td_mb_10">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="discipline-others"
                        checked={selectedDisciplines.includes('others')}
                        onChange={() => handleDisciplineToggle('others')}
                        style={{ cursor: 'pointer' }}
                      />
                      <label
                        className="form-check-label td_medium text-capitalize"
                        htmlFor="discipline-others"
                        style={{ cursor: 'pointer', marginLeft: '8px' }}
                      >
                        Others
                      </label>
                    </div>
                    {selectedDisciplines.includes('others') && (
                      <input
                        type="text"
                        className="td_form_field td_mt_10 td_medium td_white_bg"
                        placeholder="Please specify your area of expertise..."
                        style={{ marginTop: '10px' }}
                      />
                    )}
                  </div>

                  <label className="td_medium td_heading_color td_mb_12">
                    Years of Experience *
                  </label>
                  <select className="td_form_field td_mb_30 td_medium td_white_bg">
                    <option value="">Select experience level</option>
                    <option value="1-3">1-3 years</option>
                    <option value="4-7">4-7 years</option>
                    <option value="8-15">8-15 years</option>
                    <option value="15+">15+ years</option>
                  </select>

                  <label className="td_medium td_heading_color td_mb_12">
                    Educational Background & Achievements
                  </label>
                  <textarea
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    rows="4"
                    placeholder="Tell us about your education, certifications, performances, and notable achievements in music/dance..."
                  ></textarea>

                  <label className="td_medium td_heading_color td_mb_12">
                    Teaching Philosophy & Why You Want to Join Madhushala *
                  </label>
                  <textarea
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    rows="5"
                    placeholder="Share your approach to teaching and what motivates you to join our team..."
                  ></textarea>

                  <label className="td_medium td_heading_color td_mb_12">
                    Availability (Days/Hours per week)
                  </label>
                  <input
                    type="text"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="e.g., Weekends, 10 hours/week"
                  />

                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_10 td_medium w-100 td_fs_20"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Submit Application</span>
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
