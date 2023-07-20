import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import pageHeaderBg from "@/assets/images/resources/page-header-bg.jpg";

const PageHeader = ({ title = "", page = "", outerPage = "" }) => {
  console.log(pageHeaderBg)
  return (
    <section className="page-header">
      <div className="page-header__top">
        <div
          className="page-header-bg"
          style={{backgroundImage: `url(${pageHeaderBg.src})`}}
        ></div>
        <div className="page-header-bg-overly"></div>
        <Container>
          <div className="page-header__top-inner">
            <h2>{title || page}</h2>
          </div>
        </Container>
      </div>
      <div className="page-header__bottom">
        <Container>
          <div className="page-header__bottom-inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>{" "}
              <li>
                <span>.</span>
              </li>{" "}
              {outerPage && (
                <>
                  <li>{outerPage}</li>{" "}
                  <li>
                    <span>.</span>
                  </li>{" "}
                </>
              )}
              <li className="active">{page || title}</li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PageHeader;
