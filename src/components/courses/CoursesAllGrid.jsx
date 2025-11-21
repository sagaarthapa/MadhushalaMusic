import React from "react";
import Link from "next/link";
import { coursesList } from "@/data/courses";

const CoursesAllGrid = ({ selectedCategory }) => {
    const filtered = selectedCategory
        ? coursesList.filter((c) => c.category === selectedCategory)
        : coursesList;
    const displayed = filtered.slice(0, 12);

    return (
        <div className="row td_gap_y_24">
            {displayed.map((course) => (
                <div key={course.id} className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="td_card td_style_3 d-block td_radius_10">
                        {course.label && (
                            <span className="td_card_label td_accent_bg td_white_color">
                                {course.label}
                            </span>
                        )}
                        <Link href={`/course-details/${course.id}`} className="td_card_thumb">
                            <img src={course.image} alt={course.title} style={{width: '100%', height: '220px', objectFit: 'cover'}} />
                        </Link>
                        <div className="td_card_info td_white_bg">
                            <div className="td_card_info_in">
                                <ul className="td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color">
                                    <li>
                                        <span role="img" aria-label="seats">👥</span>
                                        <span className="td_opacity_7"> {course.seats} Seats</span>
                                    </li>
                                    <li>
                                        <span role="img" aria-label="semesters">📅</span>
                                        <span className="td_opacity_7"> {course.semesters} Months</span>
                                    </li>
                                </ul>
                                <span className="td_card_category td_fs_14 td_bold td_heading_color td_mb_14">
                                    {course.category}
                                </span>
                                <h2 className="td_card_title td_fs_24 td_mb_16">
                                    <Link href={`/course-details/${course.id}`}>{course.title}</Link>
                                </h2>
                                <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_20">
                                    {course.description}
                                </p>
                                <div className="td_card_review">
                                    <div className="td_rating" data-rating={course.rating}>
                                        {[1,2,3,4,5].map((star) => (
                                            <i key={star} className={
                                                course.rating >= star ? "fa-solid fa-star fa-fw" : "fa-regular fa-star"
                                            }></i>
                                        ))}
                                    </div>
                                    <span className="td_heading_color td_opacity_5 td_medium">
                                        ({course.rating}/{course.totalRatings} Ratings)
                                    </span>
                                </div>
                                <div className="td_card_btn">
                                    <Link
                                        href={`/course-details/${course.id}`}
                                        className="td_btn td_style_1 td_radius_10 td_medium"
                                    >
                                        <span className="td_btn_in td_white_color td_accent_bg">
                                            <span>Details</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoursesAllGrid;
