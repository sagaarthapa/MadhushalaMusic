import React from "react";
import Link from "next/link";

export const CoursesAllContainer = ({
  children,
  isGrid,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        {/* header */}
        <div className="td_section_head_2">
          <div className="td_section_head_2_heading">
            <h2 className="td_section_title td_mb_0 td_heading_color td_bold" style={{fontSize: '2rem', marginBottom: 0}}>
              Popular Courses
            </h2>
          </div>
          <div className="td_section_head_2_right">
            <div className="td_tabs td_fs_20" style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
              {[
                { label: 'All Categories', value: '' },
                { label: 'Vocal', value: 'vocal' },
                { label: 'Instrumental', value: 'instrumental' },
                { label: 'Dance', value: 'dance' },
              ].map((cat) => (
                <button
                  key={cat.value}
                  className={`td_tab_btn td_medium td_white_bg td_heading_color${selectedCategory === cat.value ? ' active' : ''}`}
                  style={{ border: 'none', outline: 'none', padding: '8px 18px', borderRadius: '6px', cursor: 'pointer' }}
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="td_height_60 td_height_lg_40" />

        {/* items */}
        {children}

        <div className="td_height_60 td_height_lg_40" />

        {/* all */}
        <div className="text-center">
          <Link
            href="/courses-grid-view"
            className="td_btn td_style_1 td_radius_10 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>More Courses</span>
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
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
