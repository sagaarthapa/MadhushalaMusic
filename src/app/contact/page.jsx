import { Layout } from "@/layouts/Layout";

const contactImg = "/others/contact_img.jpg";

export default function About() {
  return (
    <Layout breadcrumbTitle={"Contact"} breadcrumbSubtitle={"Contact"}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1">
              <div className="row align-items-center td_gap_y_40">
                <div className="col-lg-7">
                  <div className="td_contact_form_wrap td_white_bg td_radius_10 td_p_40 td_shadow">
                    <h2 className="td_fs_32 td_bold td_mb_24">Contact Us</h2>
                    <form className="td_contact_form">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label td_medium">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label td_medium">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label td_medium">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label td_medium">Message</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                      </div>
                      <button type="submit" className="td_btn td_style_1 td_radius_10 td_medium w-100 td_fs_20">
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>Send Message</span>
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
                    </form>
                  </div>
                </div>
                <div className="col-xl-4 offset-xl-1 col-lg-5">
                  <div className="td_contact_info">
                    <div className="td_section_heading td_style_2 td_mb_20">
                      <h2 className="td_contact_info_title td_fs_36 mb-0">
                        Our Office Address
                      </h2>
                    </div>
                    <div className="td_mb_40">
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        USA Campus
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+1(310)620-8565">+1 (310) 620-8565</a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </p>
                    </div>
                    <div>
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        Monica Campus
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+1(310)620-8565">+1 (310) 620-8565</a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="td_height_120 td_height_lg_80" />

        <div className="td_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5535126945097!2d85.35991947902919!3d27.673669165635644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b00263591b9%3A0xe4ae76bd1101fd78!2sGet%20More%20Collection!5e1!3m2!1sen!2snp!4v1763745975119!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
