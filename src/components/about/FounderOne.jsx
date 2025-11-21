import React from "react";
import Link from "next/link";

const founderImg = "/home_1/about_img_1.jpg"; // Placeholder, ideally replace with Ram Karki's photo

export const FounderOne = () => {
    return (
        <section>
            <div className="td_height_120 td_height_lg_80" />
            <div className="td_about td_style_1">
                <div className="container">
                    <div className="row align-items-center td_gap_y_40">
                        {/* Text Column (Left) */}
                        <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay="0.3s"
                        >
                            <div className="td_section_heading td_style_1 td_mb_30">
                                <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                                    Founder's Message
                                </p>
                                <h2 className="td_section_title td_fs_48 mb-0">
                                    Meet Our Founder: Ram Karki
                                </h2>
                                <p className="td_section_subtitle td_fs_18 mb-0">
                                    Ram Karki founded Madhushala Music with a passion to create a
                                    space where music and dance education could thrive. His
                                    commitment to nurturing talent and fostering creativity has
                                    been the cornerstone of the institute’s growth and success.
                                </p>
                            </div>
                            <div className="td_mb_40">
                                <ul className="td_list td_style_5 td_mp_0">
                                    <li>
                                        <h3 className="td_fs_24 td_mb_8">Radio Nepal Singer</h3>
                                        <p className="td_fs_18 mb-0">
                                            Acclaimed for his contributions to the cultural and
                                            musical landscape through his performances.
                                        </p>
                                    </li>
                                    <li>
                                        <h3 className="td_fs_24 td_mb_8">Expert Instructor</h3>
                                        <p className="td_fs_18 mb-0">
                                            Specializing in Modern & Classical Vocals and Guitar,
                                            guiding students to achieve excellence.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Image Column (Right) */}
                        <div
                            className="col-lg-6 wow fadeInLeft"
                            data-wow-duration="1s"
                            data-wow-delay="0.25s"
                        >
                            <div className="td_about_thumb_wrap">
                                <div className="td_about_thumb_1" style={{ marginLeft: "0" }}>
                                    <img src={founderImg} alt="Ram Karki" />
                                </div>
                                <div className="td_circle_shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="td_height_120 td_height_lg_80" />
        </section>
    );
};
