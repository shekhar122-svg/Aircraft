import React from "react";
import { Container, Row, Col, Button, Card, Badge, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import HindiLeadForm from "./HindiLeadForm";
export default function Hindi() {
  return (
    <>
<section
  className="hero-section text-white text-center d-flex flex-column justify-content-center pt-5 align-items-center"
  style={{
    backgroundImage:
      "url('https://aircraftdataentry.com/assets/design_blue.db82f773.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  }}
>
  <div className="bg-primary bg-opacity-50 p-3 ps-4 w-100 h-100 rounded-0">
    <h1 className="display-6 p-1 fw-bold text-start">
      &nbsp;&nbsp;क्या आप पैसे कमाना चाहते हैं ? <br />
      &nbsp; हम यहाँ हैं, <br /> &nbsp; आप कहाँ हैं !!
    </h1>
    <p className="lead mb-4 text-start ps-3">
      एयरक्राफ्ट डेटा एंट्री प्राइवेट लिमिटेड एक डिजिटल प्लेटफ़ॉर्म है
      <br />
      जो अपने ग्राहकों को अपनी सेवाओं के माध्यम से
      <br />
      जैसे फॉर्म फिलिंग और कैप्चा वर्क से आय बढ़ाने का अवसर देता है।
    </p>

    <div className="text-start ps-3">
      <button className="btn btn-danger btn-lg rounded-5 ps-4 pe-4 fs-8 pt-1 pb-1">
        शुरू करें
      </button>
    </div>
    <br />

    {/* ⭐ Ratings Section */}
    <div className="pt-2 d-flex justify-content-start">
      <div className="container-fluid">
        <div className="row justify-content-start justify-content-sm-center g-3 g-md-4 flex-wrap">
          {/* Facebook */}
          <div className="col-6 col-sm-4 col-md-auto d-flex justify-content-center">
            <div className="bg-light text-dark d-flex flex-column align-items-center justify-content-center rounded shadow-sm rating-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                width="30"
                height="30"
                className="mb-1"
              />
              <div className="text-warning small">★★★★☆</div>
              <p className="small mb-0 text-center">
                4.5 / 5<br />
                800+ Reviews
              </p>
            </div>
          </div>

          {/* Google */}
          <div className="col-6 col-sm-4 col-md-auto d-flex justify-content-center">
            <div className="bg-light text-dark d-flex flex-column align-items-center justify-content-center rounded shadow-sm rating-card">
              <img
                src="https://aircraftdataentry.com/assets/google.c6fa97b5.png"
                alt="Google"
                width="30"
                height="30"
                className="mb-1"
              />
              <div className="text-warning small">★★★★★</div>
              <p className="small mb-0 text-center">
                4.8 / 5<br />
                2k+ Reviews
              </p>
            </div>
          </div>

          {/* Justdial */}
          <div className="col-6 col-sm-4 col-md-auto d-flex justify-content-center">
            <div className="bg-light text-dark d-flex flex-column align-items-center justify-content-center rounded shadow-sm rating-card">
              <img
                src="https://aircraftdataentry.com/assets/justdial.2d62dcc9.png"
                alt="Justdial"
                width="30"
                height="30"
                className="mb-1"
              />
              <div className="text-warning small">★★★★★</div>
              <p className="small mb-0 text-center">
                5.0 / 5<br />
                500+ Reviews
              </p>
            </div>
          </div>

          {/* Instagram */}
          <div className="col-6 col-sm-4 col-md-auto d-flex justify-content-center">
            <div className="bg-light text-dark d-flex flex-column align-items-center justify-content-center rounded shadow-sm rating-card">
              <img
                src="https://aircraftdataentry.com/assets/instagram.a5e8582f.png"
                alt="Instagram"
                width="30"
                height="30"
                className="mb-1"
              />
              <div className="text-warning small">★★★★★</div>
              <p className="small mb-0 text-center">
                4.9 / 5<br />
                1k+ Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* ✅ Responsive Styling */}
  <style>
    {`
      .rating-card {
        width: 110px;
        height: 120px;
        transition: all 0.3s ease-in-out;
      }

      .rating-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      @media (max-width: 768px) {
        .rating-card {
          width: 90px;
          height: 110px;
        }
      }

      @media (max-width: 576px) {
        .rating-card {
          width: 85px;
          height: 100px;
        }
        .row {
          justify-content: space-evenly !important;
        }
      }

      @media (max-width: 400px) {
        .rating-card {
          width: 80px;
          height: 95px;
          margin-bottom: 8px;
        }
        .row {
          justify-content: space-around !important;
        }
      }
    `}
  </style>
</section>


                                                       {/* Card Section  */}
  <section
  className="py-5 mt-4"
  style={{}}
>
  <Container>
    <Row className="align-items-center">
      {/* 🧭 बाईं ओर का टेक्स्ट */}
      <Col xs={12} md={6} className="mb-4 mb-md-0">
        <p className="lead fs-3 fw-bold">हमारी सेवाओं के बारे में जानें</p>
        <h1 style={{ fontSize: "48px", color: "blue", fontWeight: "800" }}>
          सेवाएँ
        </h1>
      </Col>

      {/* 💼 दाईं ओर के कार्ड */}
      <Col xs={12} md={6}>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          {/* कार्ड 1 */}
          <div
            className="bg-primary p-3 rounded shadow text-white text-center d-flex flex-column align-items-center justify-content-between"
            style={{ width: "300px", minHeight: "500px" }}
          >
            <img
              src="https://aircraftdataentry.com/assets/form_filling.d920bcd7.svg"
              alt="डेटा एंट्री"
              width="120"
              className="mb-3"
            />
            <h6>केवल कंप्यूटर, लैपटॉप, डेस्कटॉप या पीसी पर कार्य करें</h6>

            <Button
              variant="primary"
              className="mt-3 px-4 rounded-pill btn-danger"
            >
              फॉर्म भरना
            </Button>
            <p className="text-muted">
              फॉर्म भरने का कार्य एक सरल कार्य है। फॉर्म एन्क्रिप्टेड होते हैं,
              इसलिए उन्हें ठीक उसी प्रकार भरें जैसे आपको Aircraft Data Entry
              Private Limited से प्राप्त हुए हैं। प्रशिक्षण, कार्य, सहायता और
              सबकुछ प्रदान किया जाएगा। यह मूल रूप से एक डेटा एंट्री कार्य है और
              आप इसे दिन में किसी भी समय कर सकते हैं। प्रत्येक फॉर्म तीन पृष्ठों
              का होता है, जैसे आप इंटरनेट पर फॉर्म भरते हैं।
            </p>
          </div>

          {/* कार्ड 2 */}
          <div
            className="bg-info p-3 rounded shadow text-center text-white d-flex flex-column align-items-center justify-content-between"
            style={{ width: "300px", minHeight: "500px" }}
          >
            <img
              src="https://aircraftdataentry.com/assets/captcha_filling.38d414b2.svg"
              alt="कैप्चा भरना"
              width="120"
              className="mb-3"
            />
            <h6>
              मोबाइल, कंप्यूटर, लैपटॉप, डेस्कटॉप या पीसी पर कार्य करें
            </h6>
            <Button
              variant="success"
              className="mt-3 px-4 rounded-pill btn-danger"
            >
              कैप्चा
            </Button>
            <p className="text-muted">
              यहाँ कार्य काफी सरल है। बस अपने उपयोगकर्ता नाम और पासवर्ड के साथ
              अपने खाते में लॉगिन करें, और कार्य क्षेत्र में जाने के बाद आप
              कैप्चा छवि को लोड होते हुए देखेंगे। प्रशिक्षण, कार्य और सभी आवश्यक
              सहायता प्रदान की जाएगी। आपको केवल छवि में दिए गए अक्षरों को सही
              तरीके से पढ़ना है, सही कोड टाइप करना है और सबमिट बटन पर क्लिक
              करना है। प्रत्येक सही कैप्चा के लिए आपको भुगतान किया जाएगा।
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>



                                                   {/* ===== How It Works Section with Left Circles ===== */}
<section className="py-5 bg-info text-white">
  <Container>
    <Row className="align-items-center">
      {/* Left Side */}
      <Col xs={12} md={6} className="mb-5 mb-md-0 text-center">
        <div className="d-flex flex-column align-items-center gap-4">
          <div>
            <h2 className="fw-bold fs-1">यह कैसे काम करता है?</h2>
            <h4 className="fw-bold fs-1 text-danger">फॉर्म भरना</h4>
          </div>
          <div className="ratio ratio-16x9 w-100">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_RKW8IZz8yE?si=-N4VQfbTOhaO6riK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="d-flex flex-column align-items-center gap-3 w-100">
            <Button variant="danger" className="rounded-pill px-4">
              <img
                src="https://aircraftdataentry.com/assets/desktop.33bf672e.png"
                alt="Google Logo"
                width="20"
                height="20"
                className="mb-1"
              />
              &nbsp;&nbsp; फॉर्म भरने का डेमो कार्य
            </Button>
            <Button variant="danger" className="rounded-pill px-4">
              <img
                src="data:image/png;base64,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"
                alt="Google Logo"
                width="20"
                height="20"
                className="mb-1"
              />
              &nbsp;&nbsp; फॉर्म भरने का प्रशिक्षण वीडियो
            </Button>
          </div>
        </div>
      </Col>

      {/* Right Side - Divs with Circles Side by Side */}
      <Col xs={12} md={6}>
        <div className="d-flex flex-column gap-3">
          {[
            {
              desc1:
                "हम एक MCA पंजीकृत कंपनी हैं जो पिछले 11 से अधिक वर्षों से काम कर रही है और 13 हजार से अधिक संतुष्ट उपयोगकर्ताओं के साथ जुड़ी हुई है।",
            },
            {
              desc1:
                "ऑनलाइन पंजीकरण पूरा होने के बाद, ग्राहक को 300 फॉर्म सॉफ्टवेयर और प्रशिक्षण वीडियो सहित दिए जाएंगे, जिन्हें भरना होगा।",
            },
            {
              desc1:
                "300 फॉर्म सफलतापूर्वक पूर्ण होने के बाद, राशि ग्राहक के बैंक खाते में योजना के अनुसार दर पर जमा की जाएगी।",
            },
            {
              desc1:
                "फॉर्म भरते समय 92% सटीकता बनाए रखना आवश्यक है क्योंकि डेटा एन्क्रिप्टेड है। यानी 300 फॉर्म में से 24 से अधिक फॉर्म गलत नहीं होने चाहिए। (एक फॉर्म का मतलब तीन पृष्ठ होते हैं)।",
            },
            {
              desc1:
                "पहला 300 फॉर्म का सेट सफलतापूर्वक भरने और गुणवत्ता मानक पूरा करने के बाद, दूसरा सेट उच्च दर पर प्रदान किया जाएगा। यदि ग्राहक ₹35,000 तक की कमाई पूरी कर लेते हैं, तो पूरी पंजीकरण राशि वापस कर दी जाएगी।",
            },
            {
              desc1:
                "हम अपने उपयोगकर्ताओं को कार्य करते समय हर समस्या में पूर्ण सहायता प्रदान करते हैं। हम डेटा प्रदान करते हैं और केवल कार्य की आवश्यकता होती है, समय उपयोगकर्ता अपने अनुसार तय कर सकता है। भुगतान योजना के अनुसार किया जाता है।",
            },
          ].map((feature, index) => (
            <div key={index} className="d-flex gap-3 align-items-center">
              {/* Circle */}
              <div
                className="d-flex justify-content-center align-items-center border border-white rounded-circle bg-danger text-white flex-shrink-0"
                style={{ width: "30px", height: "30px", fontSize: "1.2rem" }}
              >
                {index + 1}
              </div>

              {/* Main Div */}
              <div className="bg-primary border border-white rounded shadow text-start p-3 flex-grow-1">
                <h6 className="fw-bold mb-1 text-white">{feature.title}</h6>
                <p className="small mb-0 text-light">{feature.desc1}</p>
                <p className="small mb-0 text-light">{feature.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
</section>

                                            {/* ===== How It Works Section with Left Circles on Left Side 2 ===== */}
<section className="py-5 bg-info text-white">
  <br /> <br /> <br />
  <Container>
    <Row className="align-items-center">
      {/* बाईं ओर - विशेषताएँ (Features) */}
      <Col xs={12} md={6} className="mb-5 mb-md-0">
        <div className="d-flex flex-column gap-3">
          {[
            {
              desc1: "कैप्चा कार्य के लिए कोई लक्ष्य, सटीकता, कटौती या समय सीमा नहीं है।",
            },
            {
              desc1: "अपने मोबाइल / कंप्यूटर / लैपटॉप के माध्यम से कहीं से भी, कभी भी (24/7) काम करें।",
            },
            {
              desc1: "आपकी दैनिक आय सीधे आपके बैंक खाते में स्थानांतरित की जाएगी।",
            },
            {
              desc1: "एक बार भुगतान करें, आजीवन काम करें और कमाई करें।",
            },
            {
              desc1: "जब आप ₹35,000 कमा लेते हैं, तो आपकी सुरक्षा जमा राशि वापस कर दी जाएगी।",
            },
            {
              desc1: "हम एक MCA पंजीकृत कंपनी हैं जो पिछले 11 वर्षों से काम कर रही है, और हमारे 13,000 से अधिक संतुष्ट उपयोगकर्ता हैं। हम अपने उपयोगकर्ताओं को हर प्रकार की सहायता और मार्गदर्शन प्रदान करते हैं।",
            },
          ].map((feature, index) => (
            <div key={index} className="d-flex gap-3 align-items-center">
              {/* Circle */}
              <div
                className="d-flex justify-content-center align-items-center border border-white rounded-circle bg-danger text-white flex-shrink-0"
                style={{ width: "30px", height: "30px", fontSize: "1.2rem" }}
              >
                {index + 1}
              </div>

              {/* Text Box */}
              <div className="bg-primary border border-white rounded shadow text-start p-3 flex-grow-1">
                <p className="small mb-0 text-light">{feature.desc1}</p>
              </div>
            </div>
          ))}
        </div>
      </Col>

      {/* दाईं ओर - शीर्षक, वीडियो और बटन */}
      <Col xs={12} md={6} className="text-center">
        <div className="d-flex flex-column align-items-center gap-4">
          <div>
            <h2 className="fw-bold fs-1 text-danger">कैप्चा</h2>
          </div>

          {/* YouTube Video */}
          <div className="ratio ratio-16x9 w-100">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_RKW8IZz8yE?si=-N4VQfbTOhaO6riK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-column align-items-center gap-3 w-100">
            <Button variant="danger" className="rounded-pill px-4">
              <img
                src="https://aircraftdataentry.com/assets/desktop.33bf672e.png"
                alt="Desktop Icon"
                width="20"
                height="20"
                className="mb-1"
              />{" "}
              &nbsp; कैप्चा डेमो कार्य
            </Button>

            <Button variant="danger" className="rounded-pill px-4 w-40">
              <img
                src="data:image/png;base64,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"
                alt="App Icon"
                width="20"
                height="20"
                className="mb-1"
              />{" "}
              &nbsp; कैप्चा डेमो ऐप
            </Button>

            <Button variant="danger" className="rounded-pill px-3 py-2">
              <img
                src="data:image/png;base64,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"
                alt="YouTube Icon"
                width="20"
                height="20"
                className="mb-1"
              />{" "}
              &nbsp; वीडियो देखें
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

                                                {/* Professional priceing card section  */}
   
<section
  className="py-5"
  style={{
    background: "linear-gradient(180deg, #3584daff 100%)",
  }}
>
  <h1 className="text-center fs-1 fw-bold text-white py-5"> हमारे प्लान्स </h1>
  <Container>
    <Row className="g-4 justify-content-center">
      {[
        {
          title: "कैप्चा प्लान",
          price: "3999",
          description: "GST सहित - सेवा + सर्विस चार्ज",
          tag: "रिफंडेबल",
          note: "नियम और शर्तें लागू",
          info: [
            "इस प्लान में आपको कैप्चा कार्य मिलेगा",
            "साधारण डेटा एंट्री कार्य, सटीकता बोनस के साथ। कहीं से भी लचीले कार्य घंटे। तात्कालिक ऑनलाइन सपोर्ट उपलब्ध।"
          ],
        },
        {
          title: "फॉर्म भरने का प्लान",
          price: "4999",
          description: "GST + सेवा शुल्क सहित",
          tag: "रिफंडेबल",
          note: "नियम और शर्तें लागू",
          info: [
            "इस प्लान में आपको फॉर्म भरने का कार्य मिलेगा",
            "फॉर्म भरने की जानकारी - आपको पहले 300 फॉर्म मिलेंगे। पहले 300 फॉर्म की दर 12 रुपये प्रति फॉर्म होगी। और 92% गुणवत्ता बनाए रखने के बाद अगले 300 फॉर्म की दर 30 रुपये प्रति फॉर्म बढ़ जाएगी।"
          ],
        },
        {
          title: "कैप्चा प्लान",
          price: "5999",
          description: "GST + सेवा शुल्क सहित",
          tag: "रिफंडेबल",
          note: "नियम और शर्तें लागू",
          info: [
            "इस प्लान में आपको कैप्चा कार्य मिलेगा।",
            "कैप्चा जानकारी - कैप्चा के लिए 999 सही शब्द टाइप करें और आपको 1 डॉलर मिलेगा। (1 डॉलर = 75 रुपये)"
          ],
        },
        {
          title: "फॉर्म भरने & कैप्चा प्लान",
          price: "6999",
          description: "GST + सेवा शुल्क सहित",
          tag: "रिफंडेबल",
          note: "नियम और शर्तें लागू",
          info: [
            "इस प्लान में आपको दोनों कार्य मिलेंगे: फॉर्म भरना और कैप्चा",
            "फॉर्म भरने की जानकारी - पहले 300 फॉर्म की दर 16 रुपये प्रति फॉर्म। 92% गुणवत्ता बनाए रखने के बाद अगले 300 फॉर्म की दर 60 रुपये प्रति फॉर्म बढ़ जाएगी।",
            "कैप्चा जानकारी - कैप्चा के लिए 2499 सही शब्द टाइप करें और आपको 1 डॉलर मिलेगा। (1 डॉलर = 75 रुपये)"
          ],
        },
        {
          title: "फॉर्म भरने & कैप्चा प्लान",
          price: "8999",
          description: "GST + सेवा शुल्क सहित",
          tag: "रिफंडेबल",
          note: "नियम और शर्तें लागू",
          info: [
            "इस प्लान में आपको दोनों कार्य मिलेंगे: फॉर्म भरना और कैप्चा",
            "फॉर्म भरने की जानकारी - आपको 300 फॉर्म मिलेंगे। पहले 300 फॉर्म की दर 25 रुपये प्रति फॉर्म। 92% गुणवत्ता बनाए रखने के बाद अगले 300 फॉर्म की दर 120 रुपये प्रति फॉर्म बढ़ जाएगी।",
            "कैप्चा जानकारी - कैप्चा के लिए 1999 सही शब्द टाइप करें और आपको 1 डॉलर मिलेगा। (1 डॉलर = 75 रुपये)"
          ],
        },
      ].map((plan, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={4}>
          <Card
            className="h-100 shadow border-0 bg-white text-dark"
            style={{
              borderRadius: "15px",
              transition: "transform 0.3s ease",
            }}
          >
            <Card.Body style={{ background: "#d6f3f3ff", borderRadius: "25px" }} className="d-flex flex-column p-4">
              {/* Header */}
              <div className="text-center border-bottom pb-3 mb-3">
                <h4 style={{ color: "#2e8cf0ff" }} className="fw-bold">{plan.title}</h4>
                <h5 style={{ color: "#55718eff" }} className="fw-bold mb-2 fs-1">
                  ₹ {plan.price}/-
                </h5>
                <p style={{ fontSize: "0.7rem" }} className="small text-muted mb-1">{plan.description}</p>
                <span className="badge bg-danger text-white px-3 py-2 fw-semibold">
                  {plan.tag}
                </span>
                <p style={{ fontSize: "0.7rem" }} className="small mt-2">{plan.note}</p>
              </div>

              {/* Content */}
              <div className="mb-3">
                {plan.info.map((item, i) => (
                  <p key={i} style={{ fontSize: "0.7rem" }} className="mb-1 small">
                    <i className="bi bi-check2-circle text-primary me-2"></i>
                    {item}
                  </p>
                ))}
              </div>

              {/* Button */}
              <div className="mt-auto text-center">
                <Button
                  variant="danger"
                  className="fw-semibold px-4 py-2 rounded-pill"
                >
                  सब्सक्राइब करें
                </Button>
              </div>

              {/* Note with Background Image */}
              <div
                className="mt-3 p-2 text-center rounded text-black small bg-primary"
                style={{
                  backgroundImage: "url('https://aircraftdataentry.com/assets/design_light_blue_left.13e88b1e.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p style={{ fontSize: "0.7rem" }} className="mb-0">
                  नोट: यह सुरक्षा जमा शुल्क प्रशिक्षण और सॉफ्टवेयर के लिए है। और यह 35,000 रुपये कार्य पूरा करने के बाद रिफंडेबल है।
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>
                                                    {/* About Us   */}


<section className="py-5">
  <div className="container">
    <div className="row align-items-center justify-content-center g-4">
      {/* Left Side */}
      <div className="col-12 col-md-5 text-center">
        <h2 className="fw-bold mb-4 text-primary display-5">हमारे बारे में</h2>
        <img
          src="https://aircraftdataentry.com/assets/about_us_image.af9576e5.svg"
          alt="About Illustration"
          className="img-fluid rounded"
          style={{ maxHeight: "300px", objectFit: "contain" }}
        />
      </div>

      {/* Right Side */}
      <div className="col-12 col-md-6">
        <div
          className="p-4 bg-primary text-white shadow position-relative mx-auto"
          style={{
            width: "90%",
            minHeight: "480px",
            border: "6px solid #0dcaf0",
            borderTopLeftRadius: "45px",
            borderBottomRightRadius: "15px",
          }}
        >
          <p className="mb-3 fs-6 lh-base">
            एयरक्राफ्ट डेटा एंट्री प्राइवेट लिमिटेड एक डिजिटल प्लेटफ़ॉर्म है जो ग्राहकों को
            फॉर्म भरने और कैप्चा जैसी सेवाओं के माध्यम से आय अर्जित करने में मदद करता है।
            कुछ साल पहले हमें उस विचार ने आकर्षित किया कि ऐसी कंपनी मौजूद है जो ग्राहकों को कम प्रयास में
            आय अर्जित करने का अवसर प्रदान करती है। 2009 से, एयरक्राफ्ट डेटा एंट्री प्राइवेट लिमिटेड
            उपयोगकर्ताओं को सरल और सुलभ तरीके से सेवाएं प्रदान कर रही है। 
            वर्षों में, हमने सफलतापूर्वक 13,000 से अधिक ग्राहकों को हमारे प्लेटफ़ॉर्म का हिस्सा बनाया है।
            हमें मेहनती, सफल और सपने देखने वाले लोग प्रेरित करते हैं — और हमारा प्लेटफ़ॉर्म
            लक्ष्यों को हासिल करने और आय उत्पन्न करने का एक साधन है।
            हम सटीकता, विश्वास और पारदर्शिता के साथ मिलकर बढ़ने में विश्वास करते हैं।
            हमारी कंपनी पूरी तरह से नियामक है और सभी आवश्यक दस्तावेजों के साथ है, जो यह सुनिश्चित करता है कि
            आपके भुगतान हमेशा सुरक्षित हैं।
          </p>

          {/* Note at Bottom */}
          <div className="bg-danger text-white text-center rounded py-2 px-3 fw-semibold position-absolute bottom-0 start-0 w-100">
            <small>Go Grab the opportunity People !</small>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <br /><br /><br /><br /><br /><br />

  {/* About Us 2 */}
  <div className="container">
    <div className="row align-items-center justify-content-center g-4">
      {/* Left Side */}
      <div className="col-12 col-md-6">
        <div
          className="p-4 bg-primary text-white shadow position-relative mx-auto"
          style={{
            width: "80%",          
            minHeight: "300px",    
            border: "4px solid #0dcaf0",
            borderTopLeftRadius: "40px",
            borderBottomRightRadius: "15px",
          }}
        >
          <p className="mb-3 fs-6 lh-base">
            ऑनलाइन फॉर्म भरना और कैप्चा जॉब्स घर से काम करने के सबसे आसान कामों में से एक हैं।
            कंपनियां आपको फॉर्म भरने के लिए भुगतान करने को तैयार हैं क्योंकि भरने के लिए बहुत सारे फॉर्म हैं।
            इंटरनेट सामग्री से भरा हुआ है और मुझे यकीन है कि आपने रोज़ाना एक या दो फॉर्म भरे हैं।
            इसलिए, यह केवल आसान काम नहीं है बल्कि जल्दी पैसे कमाने का एक शानदार और सरल तरीका भी है।
          </p>

          {/* Note at Bottom */}
          <div className="bg-danger text-white text-center rounded py-2 px-3 fw-semibold position-absolute bottom-0 start-0 w-100">
            <small>आप हमारा समय बचाते हैं, और समय = पैसा, इसलिए हम आपको अधिक समय मिलने के लिए भुगतान करने को तैयार हैं।</small>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-12 col-md-5 text-center">
        <h2 className="fw-bold mb-4 text-primary display-5"> हम क्यों </h2>
        <img
          src="https://aircraftdataentry.com/assets/why_us.b025aab6.svg"
          alt="About Illustration"
          className="img-fluid rounded"
          style={{ maxHeight: "300px", objectFit: "contain" }}
        />
      </div>
    </div>
  </div>
</section>



                                                    {/* Testmonials  */}
<section
  className="py-5"
  style={{
    backgroundColor: "#007bff",
  }}
>
  <h1 className="text-center text-white fw-bold">प्रशंसापत्र</h1> <br /><br />
  <Container>
    <Row className="g-4 justify-content-center">
      {[
        {
          name: "छोटी दास",
          stars: 5,
          text: "पिछले दो वर्षों से मैं इस संगठन में काम कर रही हूँ। घर बैठे अतिरिक्त पैसे कमाना एक शानदार विचार है। मेरे लिए पैसे की कोई समस्या नहीं है। एयरक्राफ्ट डेटा एंट्री के लिए यह सबसे अच्छी कंपनी है।",
        },
        {
          name: "खुशी सहना",
          stars: 5,
          text: "मैंने हाल ही में इस कंपनी में काम शुरू किया है। कर्मचारी बहुत दयालु और उत्साहवर्धक हैं। यह सबसे सफल कंपनियों में से एक है — एयरक्राफ्ट डेटा एंट्री एक अच्छा कार्य वातावरण प्रदान करती है और कर्मचारियों का सही सम्मान करती है।",
        },
        {
          name: "सुनील सुहु",
          stars: 5,
          text: "आज एयरक्राफ्ट डेटा एंट्री उद्योग में एक प्रसिद्ध नाम है। कर्मचारी दयालु और मददगार हैं, और सभी की सहायता करने में समय लेते हैं। मुझे उनकी कार्यशैली बहुत पसंद है।",
        },
        {
          name: "कुमकुम दास",
          stars: 5,
          text: "पिछले दो वर्षों से मैं इस कंपनी में काम कर रहा हूँ। आप अपने घर की सुविधा से पैसे कमा सकते हैं। यह एयरक्राफ्ट डेटा एंट्री की सबसे अच्छी डेटा एंट्री कंपनियों में से एक है।",
        },
      ].map((item, index) => (
        <Col key={index} xs={12} md={5} className="d-flex justify-content-center">
          <div
            className="p-4 bg-white text-dark shadow d-flex flex-column align-items-center text-center"
            style={{
              width: "100%",
              maxWidth: "360px",
              minHeight: "300px",
              border: "3px solid #0dcaf0",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "40px",
            }}
          >
            {/* Stars at Top */}
            <div className="mb-2">
              {[...Array(item.stars)].map((_, i) => (
                <i key={i} className="bi bi-star-fill text-warning me-1"></i>
              ))}
            </div>

            {/* Name */}
            <h5 className="fw-bold text-primary mb-3">{item.name}</h5>

            {/* Paragraph */}
            <p
              className="mb-0 fst-italic"
              style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
            >
              {item.text}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>


                                                    {/* PDf download Section  */}

<section
  className="py-5"
  style={{
    backgroundColor: "#f8f9fa",
    position: "relative",
    overflow: "hidden",
  }}
>
  <Container>
    <h1 className="text-center text-primary fw-bold pb-4">दस्तावेज़</h1>
    {/* 📄 Two Rows with 2 Cards Each */}
    <Row className="justify-content-center mb-4 g-4">
      {/* Card 1 */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
        <div
          className="bg-white shadow rounded p-3 text-center"
          style={{ width: "340px", minHeight: "300px" }}
        >
          <img
            src="https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/1.jpeg"
            alt="Document 1"
            className="rounded mb-3"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <h6 className="fw-bold mb-2">दस्तावेज़ 1</h6>
          <p className="text-muted small mb-3">अपना पहला फ़ाइल डाउनलोड करें।</p>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/sample1.pdf";
              link.download = "sample1.pdf";
              link.click();
            }}
          >
            MCA प्रमाणपत्र 📥
          </Button>
        </div>
      </Col>

      {/* Card 2 */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
        <div
          className="bg-white shadow rounded p-3 text-center"
          style={{ width: "340px", minHeight: "300px" }}
        >
          <img
            src="https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/2.jpeg"
            alt="Document 2"
            className="rounded mb-3"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <h6 className="fw-bold mb-2">दस्तावेज़ 2</h6>
          <p className="text-muted small mb-3">अपना दूसरा फ़ाइल डाउनलोड करें।</p>
          <Button
            variant="success"
            size="sm"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/sample2.pdf";
              link.download = "sample2.pdf";
              link.click();
            }}
          >
            GST प्रमाणपत्र 📥
          </Button>
        </div>
      </Col>
    </Row>

    <Row className="justify-content-center mb-5 g-4">
      {/* Card 3 */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
        <div
          className="bg-white shadow rounded p-3 text-center"
          style={{ width: "340px", minHeight: "300px" }}
        >
          <img
            src="https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/3.jpeg"
            alt="Document 3"
            className="rounded mb-3"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <h6 className="fw-bold mb-2">दस्तावेज़ 3</h6>
          <p className="text-muted small mb-3">अपना तीसरा फ़ाइल डाउनलोड करें।</p>
          <Button
            variant="warning"
            size="sm"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/sample3.pdf";
              link.download = "sample3.pdf";
              link.click();
            }}
          >
            ISO प्रमाणपत्र 📥
          </Button>
        </div>
      </Col>

      {/* Card 4 */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
        <div
          className="bg-white shadow rounded p-3 text-center"
          style={{ width: "340px", minHeight: "300px" }}
        >
          <img
            src="https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/4.jpeg"
            alt="Document 4"
            className="rounded mb-3"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <h6 className="fw-bold mb-2">दस्तावेज़ 4</h6>
          <p className="text-muted small mb-3">अपना अंतिम फ़ाइल डाउनलोड करें।</p>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/sample4.pdf";
              link.download = "sample4.pdf";
              link.click();
            }}
          >
            DIN प्रमाणपत्र 📥
          </Button>
        </div>
      </Col>
    </Row>
    <br />

    {/* 🎥 Heading + Medium YouTube Video */}
    <Row className="justify-content-center text-center">
      <Col xs={12}>
        <h2 className="fw-bold display-4 mb-5 text-primary">वीडियो दस्तावेज़</h2>

        <div
          className="mx-auto"
          style={{
            maxWidth: "700px",
            aspectRatio: "16/9",
          }}
        >
          <iframe
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </Col>
    </Row>

    {/* 📞 New Contact Section Below Video */}
    <Row className="align-items-center justify-content-center mt-5 g-4">
      {/* Left Side Image */}
      <Col xs={12} md={6} className="text-center">
        <img
          src="https://aircraftdataentry.com/assets/contact.6f65b4b0.svg"
          alt="Contact Us"
          className="img-fluid rounded"
          style={{ maxHeight: "250px", objectFit: "cover" }}
        />
        <h1 className="pt-5 text-primary fw-bold">संपर्क करें</h1>
      </Col>
            
 <HindiLeadForm />
    </Row>
  </Container>
</section>

                             {/* Contact Details Section */}
<section
  className="py-5 text-white"
  style={{ backgroundColor: "#5468ff", overflow: "hidden" }}
>
  <Container>
    <Row className="gy-4">
      {/* Contact Us */}
      <Col xs={12} md={4}>
        <h5 className="fw-bold mb-3">Contact Us</h5>
        <p className="mb-1">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:demo@aircraftdataentry.com"
            className="text-white text-decoration-none"
          >
            demo@aircraftdataentry.com
          </a>
        </p>

        <h6 className="fw-bold mt-4 mb-3">Get In Touch</h6>
        <div className="d-flex align-items-center bg-white rounded-pill p-2 shadow-sm">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center mx-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
              width="28"
              height="28"
            />
          </a>
          <div className="vr"></div>
          <a
            href="#"
            className="d-flex align-items-center justify-content-center mx-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              width="28"
              height="28"
            />
          </a>
          <div className="vr"></div>
          <a
            href="#"
            className="d-flex align-items-center justify-content-center mx-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              width="28"
              height="28"
            />
          </a>
          <div className="vr"></div>
          <a
            href="#"
            className="d-flex align-items-center justify-content-center mx-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="YouTube"
              width="28"
              height="28"
            />
          </a>
          <div className="vr"></div>
          <a
            href="#"
            className="d-flex align-items-center justify-content-center mx-2"
          >
            <img
              src="https://aircraftdataentry.com/assets/justdial.2d62dcc9.png"
              alt="JustDial"
              width="28"
              height="28"
            />
          </a>
        </div>
      </Col>

      {/* Legal */}
      <Col xs={12} md={4}>
        <h5 className="fw-bold mb-3">Legal</h5>
        <p className="mb-2">
          <a href="#" className="text-white text-decoration-none">
            Terms & Conditions
          </a>
        </p>
        <p className="mb-2">
          <a href="#" className="text-white text-decoration-none">
            Privacy Policy
          </a>
        </p>
        <p className="mb-0">
          <a href="#" className="text-white text-decoration-none">
            Refund Policy
          </a>
        </p>
      </Col>

      {/* Address */}
      <Col xs={12} md={4}>
        <h5 className="fw-bold mb-3">Address</h5>
        <p className="mb-2">
          C-2 Manik Chembar, Janta Bazar Chowk,
          <br />
          Rajarampuri, Kolhapur. Pin 416008
        </p>
        <p className="mb-1">CIN NO:- U72900PN2019PTC186857</p>
        <p className="mb-0">GSTN - 27AAHCT5296R1Z9</p>
      </Col>
    </Row>
  </Container>
</section>

      <footer className="text-center py-3 bg-info text-light">
        Powered by TechAircraft Solution Private Limited
      </footer>
    </>
  );
}
