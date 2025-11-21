"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

const Logo = "/home_1/Madhushala Music Logo.svg";

export const HeaderOne = () => {
  useMobilemenu();
  useStickyHeader();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((v) => !v);

  return (
    <>
      <header className="td_site_header td_style_1 td_type_3 td_sticky_header td_medium td_heading_color">
        <div className="td_main_header">
          <div className="container-fluid">
            <div className="td_main_header_in">
              {/* left */}
              <div className="td_main_header_left">
                <Link className="td_site_branding" href="/">
                  <img src={Logo} alt="Logo" />
                </Link>
                <div className="td_header_social_btns">
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>

              <div className="td_main_header_center">
                <nav className="td_nav">
                  <div className="td_nav_list_wrap">
                    <div className="td_nav_list_wrap_in">
                      {/* first three */}
                      <ul className="td_nav_list">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/courses-grid-view">Courses</Link>
                        </li>
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                      </ul>

                      <Link className="td_site_branding" href="/">
                        <img src={Logo} alt="Logo" />
                      </Link>

                      {/* last three */}
                      <ul className="td_nav_list">
                        <li>
                          <Link href="/team-members">Team</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              {/* right */}
              <div className="td_main_header_right">
                {/* lang dropdown */}
                <div className="position-relative td_language_wrap">
                  <HeaderLanguage />
                </div>

                <div className="position-relative">
                  <HeaderSearch />
                </div>

                <button className="td_hamburger_btn" onClick={toggleSidebar} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};
