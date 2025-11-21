"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
import { HeaderSearch } from "./HeaderSearch";

const callIcon = "/icons/call.svg";
const envelopeIcon = "/icons/envlop.svg";
const menuSquareIcon = "/icons/menu-square.svg";
const loveIcon = "/icons/love.svg";
const cartIcon = "/icons/cart.svg";
const Logo = "/Madhushala Music Logo v2.svg";

export const HeaderNine = () => {
  useMobilemenu();
  useStickyHeader();
  const pathname = usePathname();

  return (
    <>
      <style jsx>{`
        .td_header_apply_dropdown:hover .td_apply_dropdown_menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
        }
        .td_apply_dropdown_item:hover {
          background-color: #f8f8f8 !important;
        }
      `}</style>
      <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
        <div className="td_top_header td_heading_bg td_white_color">
          <div className="container">
            <div className="td_top_header_in">
              <div className="td_top_header_left">
                <ul className="td_header_contact_list td_mp_0 td_normal">
                  <li>
                    <img src={callIcon} alt="call icon" />
                    <span>
                      Call: <a href="tel:99066789768">990 66789 768</a>
                    </span>
                  </li>
                  <li>
                    <img src={envelopeIcon} alt="envelope icon" />
                    <span>
                      Email:{" "}
                      <a href="mailto:support@educat.com">support@educat.com</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="td_top_header_right">
                <div className="td_header_apply_dropdown" style={{ position: 'relative', display: 'inline-block' }}>
                  <a href="#" className="td_btn td_style_1 td_medium td_apply_dropdown_trigger">
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Apply Now</span>
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
                  </a>
                  <div className="td_apply_dropdown_menu" style={{
                    position: 'absolute',
                    top: '100%',
                    right: '0',
                    marginTop: '10px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    minWidth: '220px',
                    opacity: '0',
                    visibility: 'hidden',
                    transform: 'translateY(-10px)',
                    transition: 'all 0.3s ease',
                    zIndex: '1000'
                  }}>
                    <Link
                      href="/students-registrations"
                      className="td_apply_dropdown_item"
                      style={{
                        display: 'block',
                        padding: '15px 20px',
                        color: '#333',
                        textDecoration: 'none',
                        borderBottom: '1px solid #f0f0f0',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <strong>Student Registration</strong>
                      <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Apply as a student</div>
                    </Link>
                    <Link
                      href="/instructor-registrations"
                      className="td_apply_dropdown_item"
                      style={{
                        display: 'block',
                        padding: '15px 20px',
                        color: '#333',
                        textDecoration: 'none',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <strong>Instructor Registration</strong>
                      <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Join our team</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td_main_header">
          <div className="container">
            <div className="td_main_header_in">
              <div className="td_main_header_left">
                <Link className="td_site_branding td_accent_color" href="/">
                  <img src={Logo} alt="Logo" style={{ maxHeight: "90px" }} />
                </Link>
              </div>
              <div className="td_main_header_right">
                <nav className="td_nav">

                  <div className="td_nav_list_wrap">
                    <div className="td_nav_list_wrap_in">
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
                <div className="td_hero_icon_btns position-relative">
                  <div className="position-relative">
                    <HeaderSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
