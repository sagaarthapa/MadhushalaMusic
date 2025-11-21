"use client";

import React from "react";
import Link from "next/link";
import { useHobble } from "../../lib/hooks/useHobble";

const pageHeadingBg = "/others/page_heading_bg.jpg";
const shape3 = "/others/page_heading_shape_3.svg";
const shape4 = "/others/page_heading_shape_4.svg";
const shape5 = "/others/page_heading_shape_5.svg";

export const Breadcrumb = ({ title, subtitle }) => {
  // Breadcrumb section hidden as per user request, but maintaining spacing
  return <div className="td_height_120 td_height_lg_80" />;
};
