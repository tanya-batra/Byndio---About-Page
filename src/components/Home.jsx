import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/assets";

const Home = () => {
  const [activeTab, setActiveTab] = useState("why");
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false); // for slide-up on close

  const handleTabChange = (tabId) => setActiveTab(tabId);
  const openModal = () => {
    setShowModal(true);
    setClosing(false);
  };
  const closeModal = () => {
    // trigger slide-up before unmount
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
    }, 300); // must match CSS animation duration
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Team card animation
    const cards = document.querySelectorAll(".team-card.animate");
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
          card.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

    // Counter animation
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 150;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("load", revealOnScroll);
    };
  }, []);

  // ✅ Re-init AOS when tab changes
  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  // Re-init AOS after modal mounts
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        AOS.refresh();
      }, 50); // small delay
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const testimonialData = [
    {
      id: 1,
      name: "Priya S.",
      role: "Fashion Influencer",
      rating: "★★★★★",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "Byndio transformed my social media presence into a real business. I can now recommend products I genuinely believe in to my followers while earning meaningful commissions. The no-inventory model means I can focus on creating content and building trust with my audience",
    },
    {
      id: 2,
      name: "Rajesh M.",
      role: "Electronics Seller",
      rating: "★★★★★",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      text: "As a small business owner, I was hesitant to enter e-commerce due to inventory costs. Byndio's platform allowed me to test products and scale gradually without financial risk. The logistics support is seamless, and my customers are always satisfied.",
    },
    {
      id: 3,
      name: "Anita K.",
      role: "Regular Customer",
      rating: "★★★★☆",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
      text: "Shopping on Byndio gives me confidence in quality and pricing. I love discovering products recommended by influencers I follow, and the delivery experience has been consistently excellent. It feels like a more personal way to shop online.",
    },
    {
      id: 4,
      name: "Vikram P.",
      role: "Retail Business Owner",
      rating: "★★★★★",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "The B2B features on Byndio have helped us connect with suppliers we never would have found otherwise. The platform makes wholesale purchasing transparent and efficient. It's become an essential tool for our business.",
    },
    //  {
    //   id: 5,
    //   name: "Priya S.",
    //   role: "Fashion Influencer",
    //   rating: "★★★★★",
    //   image: "https://randomuser.me/api/portraits/women/45.jpg",
    //   text: "Byndio transformed my social media presence into a real business. I can now recommend products I genuinely believe in to my followers while earning meaningful commissions. The no-inventory model means I can focus on creating content and building trust with my audience"
    // },
  ];

  return (
    <div>
      {/* Topbar Start */}
      <div
        className="container-fluid text-white d-none d-lg-flex wow fadeIn"
        style={{ backgroundColor: "#fff", color: "#043A55" }}
        data-wow-delay="0.1s"
      >
        <div className="container py-3">
          <div className="d-flex align-items-center">
            <a href="/">
              <img src={assets.logo} alt="Logo" style={{ height: "60px" }} />
            </a>

            <div
              className="ms-auto d-flex align-items-center"
              style={{ color: "#043A55" }}
            >
              <small className="ms-4">
                <i className="fa fa-map-marker-alt me-3"></i>Hyderabad
                ,Telangana <b>500090</b>, India
              </small>
              <small className="ms-4">
                <i className="fa fa-envelope me-3"></i>support@byndio.in
              </small>
              <small className="ms-4">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </small>
              <div className="ms-3 d-flex">
                <a
                  className="btn btn-sm-square btn-light text-primary ms-2"
                  href="https://www.facebook.com/share/1CbV4iCf2G/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-sm-square btn-light text-primary ms-2"
                  href="https://www.instagram.com/byndio_?igsh=MTJrbnp2bGJ3N29kYg=="
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-sm-square btn-light text-primary ms-2"
                  href="https://www.linkedin.com/company/byndio/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Header Start */}
      <div
        className="container-fluid page-header pt-5 mb-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="bg-white p-5">
                <h1 className="display-6 text-uppercase mb-3 animated slideInDown anoop">
                  About
                </h1>
                <nav aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* About Start */}
      <section className="about-modern position-relative py-6">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 wow fadeInLeft" data-aos-delay="0.2s">
              <div className="about-modern-img">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?q=80&w=1170&auto=format&fit=crop"
                  className="img-fluid rounded-4 shadow-lg"
                  alt="Our Journey"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-aos-delay="1.3s">
              <h6 className="about-subtitle">About Us</h6>
              <h1 className="display-4 fw-bold mb-4">
                Our <span className="highlight">Journey</span>
              </h1>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="year">2023</span>
                  <p>
                    Byndio's story began in 2023 when founder Praveen Kumar
                    recognized a critical gap in India's e-commerce landscape.
                    He envisioned a unified platform that could simultaneously
                    serve retail customers, businesses, and the growing
                    community of social influencers—all while eliminating the
                    traditional barriers of inventory investment and stock
                    management.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="year">2024</span>
                  <p>
                    The journey started with extensive market research and
                    platform development throughout 2024. During this crucial
                    phase, we built our innovative no-inventory model and
                    conducted beta testing with early adopters—sellers,
                    influencers, and buyers who provided invaluable feedback
                    that shaped our platform's evolution.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="year">2025</span>
                  <p>
                    By 2025, Byndio officially launched to the public at
                    Byndio.in, marking a significant milestone in our mission to
                    democratize e-commerce. We successfully onboarded hundreds
                    of sellers and influencers, while thousands of buyers
                    discovered the convenience and value our platform offers.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="year">Present</span>
                  <p>
                    Today, we continue to evolve and expand, introducing
                    cutting-edge features like AI-driven recommendations and
                    enhanced influencer commerce tools. Our journey is far from
                    over—we're building toward becoming India's most trusted and
                    comprehensive e-commerce ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
      </section>
      {/* About End */}

      {/* Mission Start */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container pt-4">
          <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
            <div
              className="col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature-item border h-100">
                <div
                  className="feature-icon btn-xxl-square mb-4"
                  style={{ backgroundColor: "#043A55", color: "white" }}
                >
                  <i className="fas fa-bullseye fa-2x text-white mb-3"></i>
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase mb-3">Our Mission</h5>
                  <p>
                    To empower sellers, buyers, and influencers by building a
                    transparent, reliable, and opportunity-driven e-commerce
                    ecosystem. We strive to create a marketplace that is
                    inclusive, growth-oriented, and accessible to all
                    participants, regardless of their size or investment
                    capacity.
                  </p>
                  <a
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    href="#"
                  >
                    <b className="bg-white pe-3" style={{ color: "#043A55" }}>
                      Read More
                    </b>
                    <i
                      className="bi bi-arrow-right bg-white ps-3"
                      style={{ color: "#043A55" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature-item border h-100">
                <div
                  className="feature-icon btn-xxl-square mb-4 mt-n4"
                  style={{ backgroundColor: "#043A55", color: "white" }}
                >
                  <i className="fas fa-eye fa-2x text-white mb-3"></i>
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase">Our Vision</h5>
                  <p>
                    To become India's most trusted marketplace for retail,
                    wholesale, and influencer-driven commerce—enabling small
                    businesses to grow, helping creators monetize their reach,
                    and delivering exceptional value and convenience to
                    consumers nationwide.
                  </p>
                  <a
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    href="#"
                  >
                    <b className="bg-white pe-3" style={{ color: "#043A55" }}>
                      Read More
                    </b>
                    <i
                      className="bi bi-arrow-right bg-white ps-3"
                      style={{ color: "#043A55" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Start */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 text-uppercase">Our Core Values</h2>
            <p className="text-muted fw-normal">
              What drives our mission and vision every day
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div
                className="bg-white p-4 shadow-sm h-100 text-center rounded"
                style={{ border: "2px solid #043A55" }}
              >
                <i className="fas fa-universal-access fa-2x text-primary mb-3"></i>
                <h5 className="text-uppercase">Accessibility</h5>
                <p className="text-muted">
                  Removing financial barriers through our no-inventory model.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div
                className="bg-white p-4 shadow-sm h-100 text-center rounded"
                style={{ border: "2px solid #043A55" }}
              >
                <i className="fas fa-lightbulb fa-2x text-primary mb-3"></i>
                <h5 className="text-uppercase">Innovation</h5>
                <p className="text-muted">
                  Leveraging technology to create seamless experiences.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div
                className="bg-white p-4 shadow-sm h-100 text-center rounded"
                style={{ border: "2px solid #043A55" }}
              >
                <i className="fas fa-handshake fa-2x text-primary mb-3"></i>
                <h5 className="text-uppercase">Trust</h5>
                <p className="text-muted">
                  Building transparent relationships between all platform
                  participants.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div
                className="bg-white p-4 shadow-sm h-100 text-center rounded"
                style={{ border: "2px solid #043A55" }}
              >
                <i className="fas fa-user-shield fa-2x text-primary mb-3"></i>
                <h5 className="text-uppercase">Empowerment</h5>
                <p className="text-muted">
                  Enabling individuals and businesses to achieve their
                  entrepreneurial dreams.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div
                className="bg-white p-4 shadow-sm h-100 text-center rounded"
                style={{ border: "2px solid #043A55" }}
              >
                <i className="fas fa-chart-line fa-2x text-primary mb-3"></i>
                <h5 className="text-uppercase">Growth</h5>
                <p className="text-muted">
                  Supporting scalable success for sellers, influencers, and
                  buyers alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <section className="founder-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <div className="founder-img-wrapper mx-auto">
                <img
                  src={assets.profile}
                  alt="Praveen Kumar – Founder & CEO"
                  className="img-fluid rounded-circle shadow"
                />
              </div>
            </div>
            <div className="col-md-8">
              <h5 className="fw-bold mb-1">
                Praveen Kumar,{" "}
                <span className="text-primary">Founder & CEO - Byndio</span>
              </h5>
              <p className="founder-quote fst-italic fw-semibold mt-3">
                Praveen Kumar is the visionary leader behind Byndio's
                revolutionary approach to e-commerce. With a deep understanding
                of India's digital marketplace challenges, he founded Byndio to
                bridge the gap between retail, wholesale, and influencer-driven
                commerce.
                <br />
                <br />
                Praveen's leadership philosophy centers on democratizing
                e-commerce opportunities. He recognized that traditional
                inventory requirements prevented many talented individuals and
                small businesses from participating in the digital economy. His
                solution was Byndio's innovative no-inventory model, which
                enables sellers and influencers to compete with established
                players without significant upfront investment.
                <br />
                <br />
                Under his guidance, Byndio has grown from a conceptual idea to a
                thriving marketplace that serves thousands of users. Praveen
                leads with values of simplicity, trust, and innovation, ensuring
                that every platform feature and policy benefits all ecosystem
                participants equally.
                <br />
                <br />
                His vision extends beyond just building a marketplace—he's
                creating a movement that empowers the next generation of Indian
                entrepreneurs and digital creators to build sustainable,
                scalable businesses.
              </p>
              <div className="quote-icon text-end">
                <i className="fas fa-quote-right fa-3x text-primary opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card animate">
              <div className="team-img">
                <img
                  src="https://plus.unsplash.com/premium_photo-1676106976666-ce2cc1e81650?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Walter White"
                />
              </div>
              <div className="team-info">
                <h3>Walter White</h3>
                <p className="role">E-Commerce Developer</p>
                <p className="desc">
                  Builds high-performing online stores, integrating payment
                  gateways and smooth UX for seamless shopping.
                </p>
              </div>
            </div>
            <div className="team-card animate">
              <div className="team-img">
                <img
                  src="https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzc2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
                  alt="Sarah Jhinson"
                />
              </div>
              <div className="team-info">
                <h3>Sarah Jhinson</h3>
                <p className="role">Digital Marketing Strategist</p>
                <p className="desc">
                  Creates campaigns that drive traffic, increase conversions,
                  and grow brand awareness for online stores.
                </p>
              </div>
            </div>
            <div className="team-card animate">
              <div className="team-img">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzc2luZXNzJTIwbWFufGVufDB8fDB8fHww"
                  alt="William Anderson"
                />
              </div>
              <div className="team-info">
                <h3>William Anderson</h3>
                <p className="role">Content & Product Specialist</p>
                <p className="desc">
                  Crafts engaging product descriptions, blog posts, and visuals
                  that boost e-commerce sales and customer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="container mt-5 mb-4">
        <h2 className="section-title pb-5">What We Offer ?</h2>
        <div className="row g-4">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card-offering">
              <div className="icon-wrapper icon-b2c">
                <i className="bi bi-bag-check-fill"></i>
              </div>
              <h3 className="card-title">B2C Shopping Experience</h3>
              <p className="card-text">
                We provide consumers with access to a wide range of everyday
                products—electronics, fashion, home essentials, and
                more—delivered with speed, quality, and competitive pricing.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card-offering">
              <div className="icon-wrapper icon-b2b">
                <i className="bi bi-diagram-3-fill"></i>
              </div>
              <h3 className="card-title">B2B Marketplace Solutions</h3>
              <p className="card-text">
                Byndio connects wholesalers, manufacturers, and retailers in a
                comprehensive digital ecosystem, enabling seamless bulk sourcing
                and scalable relationships.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card-offering">
              <div className="icon-wrapper icon-influencer">
                <i className="bi bi-person-video2"></i>
              </div>
              <h3 className="card-title">Influencer Commerce Platform</h3>
              <ul className="card-list">
                <li>Curate and promote branded products</li>
                <li>Earn commissions on every sale</li>
                <li>Build trust with authentic content</li>
                <li>Scale into a digital business</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card-offering">
              <div className="icon-wrapper icon-no-inventory">
                <i className="bi bi-box-seam"></i>
              </div>
              <h3 className="card-title">No-Inventory Risk Model</h3>
              <p className="card-text">
                Grow your business without upfront inventory. We handle storage,
                fulfillment, and logistics—so you can focus on selling and
                scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Start - Using React Swiper */}
      <section className="testimonial-area py-5">
        <div className="container">
          <div className="text-center mb-5">
            <small className="text-uppercase text-muted">Testimonials</small>
            <h2 className="fw-bold">What Are They Saying</h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="testimonial-slider"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-item p-4 border rounded bg-white">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={testimonial.image}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      alt={testimonial.name}
                    />
                    <div>
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <small className="text-muted">{testimonial.role}</small>
                      <div className="text-warning mt-1">
                        {testimonial.rating}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">
                    <i
                      className="fas fa-quote-left me-2"
                      style={{ color: "#043A55" }}
                    ></i>
                    {testimonial.text}
                    <i
                      className="fas fa-quote-right ms-2"
                      style={{ color: "#043A55" }}
                    ></i>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Achievements Start */}
      <section className="achievements py-5">
        <div className="container">
          <div className="text-center mb-5">
            <small className="text-uppercase text-light opacity-75">
              Achievements
            </small>
            <h2 className="fw-bold text-white display-6">
              Our Milestones & Recognitions
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="achievement-card p-4 h-100">
                <div className="icon-box mb-3">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4 className="fw-bold mb-3">Platform Growth</h4>
                <ul className="list-unstyled">
                  <li>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "white" }}
                    ></i>{" "}
                    Successful Beta Launch
                  </li>
                  <li>
                    <i className="fas fa-users" style={{ color: "white" }}></i>{" "}
                    Hundreds of Active Sellers
                  </li>
                  <li>
                    <i
                      className="fas fa-user-friends"
                      style={{ color: "white" }}
                    ></i>{" "}
                    Growing Influencer Network
                  </li>
                  <li>
                    <i className="fas fa-smile" style={{ color: "white" }}></i>{" "}
                    Thousands of Satisfied Customers
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="achievement-card p-4 h-100">
                <div className="icon-box mb-3">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h4 className="fw-bold mb-3">Technology Excellence</h4>
                <ul className="list-unstyled">
                  <li>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "white" }}
                    ></i>{" "}
                    Zero-Downtime Launch
                  </li>
                  <li>
                    <i
                      className="fas fa-mobile-alt"
                      style={{ color: "white" }}
                    ></i>{" "}
                    Mobile-First Design
                  </li>
                  <li>
                    <i className="fas fa-lock" style={{ color: "white" }}></i>{" "}
                    Secure Payment Gateways
                  </li>
                  <li>
                    <i className="fas fa-server" style={{ color: "white" }}></i>{" "}
                    Scalable Infrastructure
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="achievement-card p-4 h-100">
                <div className="icon-box mb-3">
                  <i className="fas fa-award"></i>
                </div>
                <h4 className="fw-bold mb-3">Industry Recognition</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-medal" style={{ color: "white" }}></i>{" "}
                    Innovation in E-commerce
                  </li>
                  <li>
                    <i className="fas fa-store" style={{ color: "white" }}></i>{" "}
                    No-Inventory Model Success
                  </li>
                  <li>
                    <i className="fas fa-star" style={{ color: "white" }}></i>{" "}
                    Social Commerce Leadership
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="achievement-card p-4 h-100">
                <div className="icon-box mb-3">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4 className="fw-bold mb-3">Future Ready</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-robot" style={{ color: "white" }}></i>{" "}
                    AI Integration Roadmap
                  </li>
                  <li>
                    <i
                      className="fas fa-layer-group"
                      style={{ color: "white" }}
                    ></i>{" "}
                    Category Expansion
                  </li>
                  <li>
                    <i
                      className="fas fa-chart-pie"
                      style={{ color: "white" }}
                    ></i>{" "}
                    Advanced Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Start */}
      <section className="trust-badges py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title mb-5">Why You Can Trust Byndio</h2>
          <div className="row justify-content-center g-4">
            <div
              className="col-6 col-sm-4 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="badge-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-scale">
                <i className="fas fa-lock fa-3x text-primary mb-3"></i>
                <h6 className="mb-0 fw-bold">Secure Payments</h6>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="badge-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-scale">
                <i className="fas fa-user-check fa-3x text-primary mb-3"></i>
                <h6 className="mb-0 fw-bold">Verified Sellers</h6>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="badge-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-scale">
                <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
                <h6 className="mb-0 fw-bold">Fast Shipping</h6>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <div className="badge-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-scale">
                <i className="fas fa-headset fa-3x text-primary mb-3"></i>
                <h6 className="mb-0 fw-bold">24/7 Support</h6>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="badge-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-scale">
                <i className="fas fa-star fa-3x text-primary mb-3"></i>
                <h6 className="mb-0 fw-bold">Trusted by Influencers</h6>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <div className="badge-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-scale">
                <i className="fas fa-hand-holding-usd fa-3x text-primary mb-3"></i>
                <h6 className="mb-0 fw-bold">Money-Back Guarantee</h6>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="badge-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-scale">
                <i className="fas fa-box-open fa-3x text-primary mb-3"></i>
                <h6 className="mb-0 fw-bold">No-Inventory Risk</h6>
              </div>
            </div>
            <div
              className="col-6 col-sm-4 col-md-3"
              data-aos="zoom-in"
              data-aos-delay="450"
            >
              <div className="badge-card p-4 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-scale">
                <i className="fas fa-robot fa-3x text-primary mb-3"></i>
                <h6 className="mb-0 fw-bold">AI Recommendations</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section Start */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img
                  className="img-fluid w-99 rounded shadow"
                  src="https://static.investindia.gov.in/s3fs-public/2024-12/image-4_0.png"
                  alt="Invest in Byndio"
                  height="400"
                />
              </div>
            </div>
            <div
              className="col-lg-7 wow fadeIn"
              data-wow-delay="0.1s"
              data-aos="fade-up"
            >
              <h1 className="display-6 text-uppercase mb-4">
                Invest in the Future of Social Commerce –{" "}
                <span className="text-primary">Byndio</span>
              </h1>
              <p className="text-muted mb-3">
                Empowering sellers, creators, and customers through a trusted
                multi-vendor platform.
              </p>
              <p>
                Byndio is a multi-vendor social commerce platform where sellers
                can sell directly to customers with the support of influencers
                and creators. We focus on trust, simplicity, and growth.
              </p>
              <ul
                className="nav nav-pills mb-4 gap-2"
                id="investTab"
                role="tablist"
              >
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "why" ? "active" : ""
                    } shadow-sm text-white`}
                    style={{ backgroundColor: "#043A55" }}
                    onClick={() => handleTabChange("why")}
                  >
                    <i className="fas fa-chart-line me-2"></i> Why Invest
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link shadow-sm text-white ${
                      activeTab === "opportunities" ? "active" : ""
                    }`}
                    style={{ backgroundColor: "#05597B" }}
                    onClick={() => handleTabChange("opportunities")}
                  >
                    <i className="fas fa-lightbulb me-2"></i> Opportunities
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link shadow-sm text-white ${
                      activeTab === "progress" ? "active" : ""
                    }`}
                    style={{ backgroundColor: "#06789F" }}
                    onClick={() => handleTabChange("progress")}
                  >
                    <i className="fas fa-tachometer-alt me-2"></i> Progress
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "why" ? "show active" : ""
                  }`}
                  data-aos="fade"
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="feature-box p-4 bg-light rounded shadow-sm h-100 d-flex">
                        <div
                          className="icon-circle me-3"
                          style={{ backgroundColor: "#043A55", color: "white" }}
                        >
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">High Growth Market</h6>
                          <p className="small text-muted mb-0">
                            India's e-commerce is growing at 25%+ CAGR.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box p-4 bg-light rounded shadow-sm h-100 d-flex">
                        <div
                          className="icon-circle me-3"
                          style={{ backgroundColor: "#043A55", color: "white" }}
                        >
                          <i className="fas fa-users"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Community Driven</h6>
                          <p className="small text-muted mb-0">
                            Sellers + influencers + buyers = stronger ecosystem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box p-4 bg-light rounded shadow-sm h-100 d-flex">
                        <div
                          className="icon-circle me-3"
                          style={{ backgroundColor: "#043A55", color: "white" }}
                        >
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Low Risk Model</h6>
                          <p className="small text-muted mb-0">
                            No inventory handling or storage cost for Byndio.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box p-4 bg-light rounded shadow-sm h-100 d-flex">
                        <div
                          className="icon-circle me-3"
                          style={{ backgroundColor: "#043A55", color: "white" }}
                        >
                          <i className="fas fa-globe"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Global Scalability</h6>
                          <p className="small text-muted mb-0">
                            Built to expand beyond India into global markets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "opportunities" ? "show active" : ""
                  }`}
                  data-aos="fade"
                >
                  <div className="row g-4 text-center">
                    <div className="col-md-4">
                      <div className="opportunity-box p-4 rounded shadow-sm h-100">
                        <div
                          className="icon-circle mx-auto mb-3"
                          style={{ backgroundColor: "#043A55", color: "white" }}
                        >
                          <i className="fas fa-briefcase"></i>
                        </div>
                        <h6 className="fw-bold">Equity</h6>
                        <p className="small text-muted mb-0">
                          Be part of Byndio's ownership.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="opportunity-box p-4 rounded shadow-sm h-100">
                        <div
                          className="icon-circle mx-auto mb-3"
                          style={{ backgroundColor: "#043A55", color: "white" }}
                        >
                          <i className="fas fa-handshake"></i>
                        </div>
                        <h6 className="fw-bold">Partnerships</h6>
                        <p className="small text-muted mb-0">
                          Collaborate strategically for growth.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="opportunity-box p-4 rounded shadow-sm h-100">
                        <div
                          className="icon-circle mx-auto mb-3"
                          style={{ backgroundColor: "#043A55", color: "white" }}
                        >
                          <i className="fas fa-rocket"></i>
                        </div>
                        <h6 className="fw-bold">Seed Funding</h6>
                        <p className="small text-muted mb-0">
                          Angel & early-stage options.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "progress" ? "show active" : ""
                  }`}
                  data-aos="fade"
                >
                  <div className="row g-4 text-center">
                    <div className="col-md-4">
                      <div
                        className="stat-box text-white p-4 rounded shadow-sm h-100"
                        style={{ backgroundColor: "#043A55", color: "white" }}
                      >
                        <h3 className="fw-bold mb-1">1,200+</h3>
                        <p className="small mb-0">Sellers</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="stat-box text-white p-4 rounded shadow-sm h-100"
                        style={{ backgroundColor: "#043A55", color: "white" }}
                      >
                        <h3 className="fw-bold mb-1">25+</h3>
                        <p className="small mb-0">Partnerships</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="stat-box text-white p-4 rounded shadow-sm h-100"
                        style={{ backgroundColor: "#043A55", color: "white" }}
                      >
                        <h3 className="fw-bold mb-1">10k+</h3>
                        <p className="small mb-0">Pilot Users</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn mt-4"
                style={{ backgroundColor: "#043A55", color: "white" }}
                onClick={openModal}
              >
                Become an Investor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Investor Form Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          onClick={closeModal}
        >
          <div className={`modal-dialog `} onClick={(e) => e.stopPropagation()}>
            <div
              className={`modal-content ${closing ? "slide-up" : "slide-down"}`}
              data-aos={!closing ? "fade-down" : undefined}
            >
              <div className="modal-header">
                <h5 className="modal-title">Join as an Investor</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Investment Interest</label>
                    <select className="form-select">
                      <option>Equity</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{ backgroundColor: "#043A55", color: "white" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="container">
          <div className="section-title">
            <h1>Ready to Transform Your Business Journey?</h1>
            <p>
              Whether you're a seller, influencer, shopper, or wholesale buyer —
              Byndio is your gateway to the future of e-commerce.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="cta-card">
                <div className="content">
                  <div className="icon-box">
                    <i className="fas fa-store"></i>
                  </div>
                  <h5>For Sellers</h5>
                  <p>
                    Start selling without inventory risk. Join hundreds of
                    growing businesses.
                  </p>
                  <a
                    href="https://byndio.in/seller-registration"
                    className="btn btn-primary"
                  >
                    Become a Seller
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cta-card">
                <div className="content">
                  <div className="icon-box">
                    <i className="fas fa-user-friends"></i>
                  </div>
                  <h5>For Influencers</h5>
                  <p>
                    Turn your influence into income. Recommend products your
                    fans love.
                  </p>
                  <a
                    href="https://byndio.in/influencer-signup"
                    className="btn btn-primary"
                  >
                    Join as Influencer
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cta-card">
                <div className="content">
                  <div className="icon-box">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <h5>For Shoppers</h5>
                  <p>
                    Shop top-quality products at competitive prices with trusted
                    delivery.
                  </p>
                  <a href="https://byndio.in/shop" className="btn btn-primary">
                    Start Shopping
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cta-card">
                <div className="content">
                  <div className="icon-box">
                    <i className="fas fa-truck-loading"></i>
                  </div>
                  <h5>For Wholesale Buyers</h5>
                  <p>
                    Connect with verified suppliers and streamline your
                    procurement.
                  </p>
                  <a
                    href="https://byndio.in/wholesale"
                    className="btn btn-primary"
                  >
                    Explore B2B
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-lg-square back-to-top"
        style={{ backgroundColor: "#043A55", color: "white" }}
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default Home;
