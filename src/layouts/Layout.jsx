"use client";

import React, { useLayoutEffect } from "react";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { FooterOne } from "@/components/footers/FooterOne";
import { HeaderNine } from "@/components/headers/HeaderNine";
import { HeaderOne } from "@/components/headers/HeaderOne";
import { ScrollToTop } from "@/components/scroll_to_top/ScrollToTop";
import { usePathname } from "next/navigation";

export const Layout = ({
  children,
  header = 9,
  footer = 1,
  bodyClass,
  breadcrumbTitle,
  breadcrumbSubtitle,
}) => {
  const pathname = usePathname();

  // theme
  useLayoutEffect(() => {
    document.body.classList.add(bodyClass);

    return () => document.body.classList.remove(bodyClass);
  }, [bodyClass, pathname]);

  return (
    <>
      {/* scroll to top */}
      <ScrollToTop />

      {/* header */}
      {/* header */}
      {header === 1 && <HeaderOne />}
      {header === 9 && <HeaderNine />}

      {/* breadcrumb */}
      {breadcrumbTitle && (
        <Breadcrumb title={breadcrumbTitle} subtitle={breadcrumbSubtitle} />
      )}

      {children}

      {/* footer */}
      {/* footer */}
      {footer === 1 && <FooterOne />}
    </>
  );
};
