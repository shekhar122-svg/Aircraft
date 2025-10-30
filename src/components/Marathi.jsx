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
  <div className="bg-primary bg-opacity-50 p-3 ps-5 w-100 h-100 rounded-0">
    <h1 className="display-6 p-1 fw-bold text-start">
      &nbsp;&nbsp;तुम्हाला पैसे कमवायचे आहेत का ? <br />
      &nbsp; आम्ही येथे आहोत, <br /> &nbsp; तुम्ही कुठे आहात !!
    </h1>
    <p className="lead mb-4 text-start ps-4">
      एअरक्राफ्ट डेटा एंट्री प्रायव्हेट लिमिटेड हे एक डिजिटल प्लॅटफॉर्म आहे
      <br />
      जे आपल्या ग्राहकांना त्यांच्या सेवांद्वारे
      <br />
      जसे की फॉर्म भरणे आणि कॅप्चा काम करून उत्पन्न वाढवण्याची संधी देते.
    </p>

    <div className="text-start ps-4">
      <button className="btn btn-danger btn-lg rounded-5 ps-4 pe-4 fs-8 pt-1 pb-1">
        सुरू करा
      </button>
    </div>
    <br />

    {/* ⭐ Ratings Section */}
    <div className="pt-2 d-flex justify-content-start">
      <div className="container-fluid">
        <div className="row g-2">
          {/* Facebook */}
          <div className="col-auto">
            <div className="bg-light text-dark d-flex flex-column align-items-center justify-content-center rounded shadow-sm rating-card">
              <img
                src="data:image/png;base64,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"
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

          {/* Instagram */}
          <div className="col-auto">
            <div className="bg-light text-dark d-flex flex-column align-items-center justify-content-center rounded shadow-sm rating-card">
              <img
                src="https://aircraftdataentry.com/assets/google.c6fa97b5.png"
                alt="Instagram"
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

          {/* LinkedIn */}
          <div className="col-auto">
            <div className="bg-light text-dark d-flex flex-column align-items-center justify-content-center rounded shadow-sm rating-card">
              <img
                src="https://aircraftdataentry.com/assets/justdial.2d62dcc9.png"
                alt="LinkedIn"
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

          {/* Google */}
          <div className="col-auto">
            <div className="bg-light text-dark d-flex flex-column align-items-center justify-content-center rounded shadow-sm rating-card">
              <img
                src="https://aircraftdataentry.com/assets/instagram.a5e8582f.png"
                alt="Google"
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

  {/* ✅ Responsive Size Control */}
  <style>
    {`
      .rating-card {
        width: 100px;
        height: 120px;
      }

      @media (max-width: 576px) {
        .rating-card {
          width: 70px;
          height: 110px;
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
      {/* 🧭 डाव्या बाजूचा टेक्स्ट */}
      <Col xs={12} md={6} className="mb-4 mb-md-0">
        <p className="lead fs-3 fw-bold">आमच्या सेवांविषयी जाणून घ्या</p>
        <h1 style={{ fontSize: "48px", color: "blue", fontWeight: "800" }}>
          सेवा
        </h1>
      </Col>

      {/* 💼 उजव्या बाजूचे कार्ड */}
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
            <h6>फक्त संगणक, लॅपटॉप, डेस्कटॉप किंवा पीसी वर काम करा</h6>

            <Button
              variant="primary"
              className="mt-3 px-4 rounded-pill btn-danger"
            >
              फॉर्म भरणे
            </Button>
            <p className="text-muted">
              फॉर्म भरणे हे एक सोपे काम आहे. फॉर्म एन्क्रिप्टेड असतात, त्यामुळे त्यांना तसंच भरा जसं Aircraft Data Entry Private Limited कडून मिळाले आहे. प्रशिक्षण, काम, मदत आणि सर्व काही प्रदान केले जाईल. हे मूलतः डेटा एंट्री काम आहे आणि तुम्ही हे दिवसभर कुठल्याही वेळेस करू शकता. प्रत्येक फॉर्म तीन पानांचा असतो, जसं तुम्ही इंटरनेटवर फॉर्म भरता.
            </p>
          </div>

          {/* कार्ड 2 */}
          <div
            className="bg-info p-3 rounded shadow text-center text-white d-flex flex-column align-items-center justify-content-between"
            style={{ width: "300px", minHeight: "500px" }}
          >
            <img
              src="https://aircraftdataentry.com/assets/captcha_filling.38d414b2.svg"
              alt="कॅप्चा भरणे"
              width="120"
              className="mb-3"
            />
            <h6>
              मोबाइल, संगणक, लॅपटॉप, डेस्कटॉप किंवा पीसी वर काम करा
            </h6>
            <Button
              variant="success"
              className="mt-3 px-4 rounded-pill btn-danger"
            >
              कॅप्चा
            </Button>
            <p className="text-muted">
              येथे काम खूप सोपे आहे. फक्त आपल्या वापरकर्तानाव आणि पासवर्डसह आपल्या खात्यात लॉगिन करा, आणि कामाच्या क्षेत्रात गेल्यावर तुम्ही कॅप्चा प्रत लोड होताना पाहाल. प्रशिक्षण, काम आणि सर्व आवश्यक मदत प्रदान केली जाईल. तुम्हाला फक्त प्रतीत दिलेले अक्षरे बरोबर वाचणे, योग्य कोड टाईप करणे आणि सबमिट बटणावर क्लिक करणे आवश्यक आहे. प्रत्येक बरोबर कॅप्च्यासाठी तुम्हाला पैसे दिले जातील.
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
      {/* डाव्या बाजू */}
      <Col xs={12} md={6} className="mb-5 mb-md-0 text-center">
        <div className="d-flex flex-column align-items-center gap-4">
          <div>
            <h2 className="fw-bold fs-1">हे कसे कार्य करते?</h2>
            <h4 className="fw-bold fs-1 text-danger">फॉर्म भरणे</h4>
          </div>
          <div className="ratio ratio-16x9 w-100">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_RKW8IZz8yE?si=-N4VQfbTOhaO6riK"
              title="YouTube व्हिडिओ प्लेयर"
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
                alt="डेस्कटॉप लोगो"
                width="20"
                height="20"
                className="mb-1"
              />
              &nbsp;&nbsp; फॉर्म भरण्याचे डेमो कार्य
            </Button>
            <Button variant="danger" className="rounded-pill px-4">
              <img
                src="data:image/png;base64,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"
                alt="Google Logo"
                width="20"
                height="20"
                className="mb-1"
              />
              &nbsp;&nbsp; फॉर्म भरण्याचे प्रशिक्षण व्हिडिओ
            </Button>
          </div>
        </div>
      </Col>

      {/* उजव्या बाजू - सर्कलसह डिव्ह्ज */}
      <Col xs={12} md={6}>
        <div className="d-flex flex-column gap-3">
          {[
            {
              desc1:
                "आम्ही एक MCA नोंदणीकृत कंपनी आहोत जी मागील 11 वर्षांपासून कार्यरत आहे आणि 13 हजारहून अधिक समाधानी वापरकर्त्यांशी जोडलेली आहे.",
            },
            {
              desc1:
                "ऑनलाइन नोंदणी पूर्ण झाल्यानंतर, ग्राहकास 300 फॉर्म सॉफ्टवेअर आणि प्रशिक्षण व्हिडिओसह दिले जातील, जे भरणे आवश्यक आहे.",
            },
            {
              desc1:
                "300 फॉर्म यशस्वीपणे पूर्ण झाल्यानंतर, रक्कम ग्राहकाच्या बँक खात्यात योजनेनुसार जमा केली जाईल.",
            },
            {
              desc1:
                "फॉर्म भरताना 92% अचूकता राखणे आवश्यक आहे कारण डेटा एन्क्रिप्टेड आहे. म्हणजे 300 फॉर्ममधून 24 पेक्षा जास्त फॉर्म चुकीचे नसावेत. (एक फॉर्म म्हणजे तीन पृष्ठे).",
            },
            {
              desc1:
                "पहिला 300 फॉर्म यशस्वीपणे भरण्यानंतर आणि गुणवत्ता मानक पूर्ण झाल्यानंतर, दुसरा संच उच्च दरावर प्रदान केला जाईल. ग्राहक ₹35,000 कमाई पूर्ण केल्यास, संपूर्ण नोंदणी रक्कम परत केली जाईल.",
            },
            {
              desc1:
                "आम्ही आमच्या वापरकर्त्यांना काम करताना प्रत्येक समस्येत पूर्ण सहाय्य प्रदान करतो. आम्ही डेटा पुरवतो आणि फक्त कामाची आवश्यकता असते, वेळ वापरकर्ता त्यानुसार ठरवू शकतो. पेमेंट योजना नुसार केली जाते.",
            },
          ].map((feature, index) => (
            <div key={index} className="d-flex gap-3 align-items-center">
              {/* सर्कल */}
              <div
                className="d-flex justify-content-center align-items-center border border-white rounded-circle bg-danger text-white flex-shrink-0"
                style={{ width: "30px", height: "30px", fontSize: "1.2rem" }}
              >
                {index + 1}
              </div>

              {/* मुख्य डिव्ह */}
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
      {/* डाव्या बाजू - वैशिष्ट्ये */}
      <Col xs={12} md={6} className="mb-5 mb-md-0">
        <div className="d-flex flex-column gap-3">
          {[
            {
              desc1: "कॅप्चा कामासाठी कोणताही लक्ष्य, अचूकता, कपात किंवा वेळ मर्यादा नाही.",
            },
            {
              desc1: "आपल्या मोबाइल / संगणक / लॅपटॉपद्वारे कुठूनही, कधीही (24/7) काम करा.",
            },
            {
              desc1: "आपली दैनिक कमाई थेट आपल्या बँक खात्यात जमा होईल.",
            },
            {
              desc1: "एकदा पैसे भरा, आयुष्यभर काम करा आणि कमाई करा.",
            },
            {
              desc1: "जेव्हा आपण ₹35,000 कमवाल, तेव्हा आपली सुरक्षा ठेव रक्कम परत केली जाईल.",
            },
            {
              desc1: "आम्ही एक MCA नोंदणीकृत कंपनी आहोत जी मागील 11 वर्षांपासून काम करत आहे आणि आमचे 13,000 हून अधिक समाधानी वापरकर्ते आहेत. आम्ही आमच्या वापरकर्त्यांना प्रत्येक प्रकारची सहाय्य आणि मार्गदर्शन पुरवतो.",
            },
          ].map((feature, index) => (
            <div key={index} className="d-flex gap-3 align-items-center">
              {/* सर्कल */}
              <div
                className="d-flex justify-content-center align-items-center border border-white rounded-circle bg-danger text-white flex-shrink-0"
                style={{ width: "30px", height: "30px", fontSize: "1.2rem" }}
              >
                {index + 1}
              </div>

              {/* मजकूर बॉक्स */}
              <div className="bg-primary border border-white rounded shadow text-start p-3 flex-grow-1">
                <p className="small mb-0 text-light">{feature.desc1}</p>
              </div>
            </div>
          ))}
        </div>
      </Col>

      {/* उजव्या बाजू - शीर्षक, व्हिडिओ आणि बटण */}
      <Col xs={12} md={6} className="text-center">
        <div className="d-flex flex-column align-items-center gap-4">
          <div>
            <h2 className="fw-bold fs-1 text-danger">कॅप्चा</h2>
          </div>

          {/* YouTube व्हिडिओ */}
          <div className="ratio ratio-16x9 w-100">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_RKW8IZz8yE?si=-N4VQfbTOhaO6riK"
              title="YouTube व्हिडिओ प्लेयर"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* बटण */}
          <div className="d-flex flex-column align-items-center gap-3 w-100">
            <Button variant="danger" className="rounded-pill px-4">
              <img
                src="https://aircraftdataentry.com/assets/desktop.33bf672e.png"
                alt="डेस्कटॉप चिन्ह"
                width="20"
                height="20"
                className="mb-1"
              />{" "}
              &nbsp; कॅप्चा डेमो कार्य
            </Button>

            <Button variant="danger" className="rounded-pill px-4 w-40">
              <img
                src="data:image/png;base64,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"
                alt="अॅप चिन्ह"
                width="20"
                height="20"
                className="mb-1"
              />{" "}
              &nbsp; कॅप्चा डेमो App
            </Button>

            <Button variant="danger" className="rounded-pill px-3 py-2">
              <img
                src="data:image/png;base64,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"
                alt="YouTube चिन्ह"
                width="20"
                height="20"
                className="mb-1"
              />{" "}
              &nbsp; व्हिडिओ पहा
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
  <h1 className="text-center fs-1 fw-bold text-white py-5"> आमचे प्लॅन्स </h1>
  <Container>
    <Row className="g-4 justify-content-center">
      {[
        {
          title: "कॅप्चा प्लॅन",
          price: "3999",
          description: "GST सहित - सेवा + सर्विस चार्ज",
          tag: "रिफंडेबल",
          note: "नियम आणि अटी लागू",
          info: [
            "या प्लॅनमध्ये तुम्हाला कॅप्चा कार्य मिळेल",
            "साधे डेटा एंट्री कार्य, अचूकतेच्या बोनससह. कुठूनही लवचिक कार्य तास. तात्काळ ऑनलाइन सहाय्य उपलब्ध."
          ],
        },
        {
          title: "फॉर्म भरण्याचा प्लॅन",
          price: "4999",
          description: "GST + सेवा शुल्क सहित",
          tag: "रिफंडेबल",
          note: "नियम आणि अटी लागू",
          info: [
            "या प्लॅनमध्ये तुम्हाला फॉर्म भरण्याचे कार्य मिळेल",
            "फॉर्म भरण्याची माहिती - तुम्हाला सुरुवातीला 300 फॉर्म मिळतील. पहिल्या 300 फॉर्मसाठी दर 12 रुपये प्रति फॉर्म. 92% गुणवत्ता राखल्यानंतर पुढील 300 फॉर्मसाठी दर 30 रुपये प्रति फॉर्म वाढेल."
          ],
        },
        {
          title: "कॅप्चा प्लॅन",
          price: "5999",
          description: "GST + सेवा शुल्क सहित",
          tag: "रिफंडेबल",
          note: "नियम आणि अटी लागू",
          info: [
            "या प्लॅनमध्ये तुम्हाला कॅप्चा कार्य मिळेल.",
            "कॅप्चाची माहिती - कॅप्चासाठी 999 बरोबर शब्द टाइप करा आणि तुम्हाला 1 डॉलर मिळेल. (1 डॉलर = 75 रुपये)"
          ],
        },
        {
          title: "फॉर्म भरणे & कॅप्चा प्लॅन",
          price: "6999",
          description: "GST + सेवा शुल्क सहित",
          tag: "रिफंडेबल",
          note: "नियम आणि अटी लागू",
          info: [
            "या प्लॅनमध्ये तुम्हाला दोन्ही कार्य मिळतील: फॉर्म भरणे आणि कॅप्चा",
            "फॉर्म भरण्याची माहिती - पहिल्या 300 फॉर्मसाठी दर 16 रुपये प्रति फॉर्म. 92% गुणवत्ता राखल्यानंतर पुढील 300 फॉर्मसाठी दर 60 रुपये प्रति फॉर्म वाढेल.",
            "कॅप्चाची माहिती - कॅप्चासाठी 2499 बरोबर शब्द टाइप करा आणि तुम्हाला 1 डॉलर मिळेल. (1 डॉलर = 75 रुपये)"
          ],
        },
        {
          title: "फॉर्म भरणे & कॅप्चा प्लॅन",
          price: "8999",
          description: "GST + सेवा शुल्क सहित",
          tag: "रिफंडेबल",
          note: "नियम आणि अटी लागू",
          info: [
            "या प्लॅनमध्ये तुम्हाला दोन्ही कार्य मिळतील: फॉर्म भरणे आणि कॅप्चा",
            "फॉर्म भरण्याची माहिती - तुम्हाला 300 फॉर्म मिळतील. पहिल्या 300 फॉर्मसाठी दर 25 रुपये प्रति फॉर्म. 92% गुणवत्ता राखल्यानंतर पुढील 300 फॉर्मसाठी दर 120 रुपये प्रति फॉर्म वाढेल.",
            "कॅप्चाची माहिती - कॅप्चासाठी 1999 बरोबर शब्द टाइप करा आणि तुम्हाला 1 डॉलर मिळेल. (1 डॉलर = 75 रुपये)"
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
                  सब्सक्राइब करा
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
                  टीप: हा सुरक्षा ठेव शुल्क प्रशिक्षण आणि सॉफ्टवेअरसाठी आहे. आणि हा ₹35,000 कार्य पूर्ण झाल्यानंतर रिफंडेबल आहे.
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
        <h2 className="fw-bold mb-4 text-primary display-5">आमच्याबद्दल</h2>
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
            एअरक्राफ्ट डेटा एंट्री प्रायव्हेट लिमिटेड एक डिजिटल प्लॅटफॉर्म आहे जे ग्राहकांना
            फॉर्म भरणे आणि कॅप्चा सारख्या सेवा वापरून उत्पन्न मिळविण्यात मदत करते.
            काही वर्षांपूर्वी आम्हाला हा विचार प्रेरित केला की अशी कंपनी अस्तित्वात आहे जी
            ग्राहकांना कमी प्रयत्नात उत्पन्न मिळविण्याची संधी देते. 2009 पासून, एअरक्राफ्ट डेटा एंट्री
            प्रायव्हेट लिमिटेड वापरकर्त्यांना साध्या आणि सोप्या मार्गाने सेवा पुरवित आहे.
            वर्षांमध्ये, आम्ही यशस्वीरित्या 13,000 पेक्षा जास्त ग्राहकांना आमच्या प्लॅटफॉर्मचा भाग बनवले आहे.
            मेहनती, यशस्वी आणि स्वप्न पाहणारे लोक आम्हाला प्रेरित करतात — आणि आमचा प्लॅटफॉर्म
            उद्दिष्टे साध्य करण्याचे आणि उत्पन्न मिळविण्याचे साधन आहे.
            आम्ही अचूकता, विश्वास आणि पारदर्शकतेसह वाढीवर विश्वास ठेवतो.
            आमची कंपनी पूर्णपणे नियामक आहे आणि सर्व आवश्यक कागदपत्रांसह आहे, जे सुनिश्चित करते की
            तुमचे पेमेंट नेहमी सुरक्षित आहेत.
          </p>

          {/* Note at Bottom */}
          <div className="bg-danger text-white text-center rounded py-2 px-3 fw-semibold position-absolute bottom-0 start-0 w-100">
            <small>संधीचा फायदा घ्या, मित्रांनो!</small>
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
            ऑनलाइन फॉर्म भरणे आणि कॅप्चा जॉब्स घरबसल्या करण्यासाठी सर्वात सोप्या कामांपैकी एक आहेत.
            कंपन्या तुम्हाला फॉर्म भरण्यासाठी पैसे देण्यासाठी तयार आहेत कारण भरायचे फॉर्म खूप आहेत.
            इंटरनेट सामग्रीने भरलेले आहे आणि मला खात्री आहे की तुम्ही रोज एक किंवा दोन फॉर्म भरलेले असतील.
            म्हणून, हे फक्त सोपे काम नाही तर पटकन पैसे कमावण्याचा एक उत्कृष्ट आणि सोपा मार्ग देखील आहे.
          </p>

          {/* Note at Bottom */}
          <div className="bg-danger text-white text-center rounded py-2 px-3 fw-semibold position-absolute bottom-0 start-0 w-100">
            <small>तुम्ही आमचा वेळ वाचवता, आणि वेळ = पैसे, त्यामुळे आम्ही तुम्हाला जास्त वेळ मिळावा यासाठी पैसे देण्यासाठी तयार आहोत.</small>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-12 col-md-5 text-center">
        <h2 className="fw-bold mb-4 text-primary display-5">आम्हाला का निवडा</h2>
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

{/* Testimonials */}
<section
  className="py-5"
  style={{
    backgroundColor: "#007bff",
  }}
>
  <h1 className="text-center text-white fw-bold">प्रशंसापत्रे</h1> <br /><br />
  <Container>
    <Row className="g-4 justify-content-center">
      {[
        {
          name: "छोटी दास",
          stars: 5,
          text: "मागील दोन वर्षांपासून मी या संस्थेत काम करत आहे. घरबसल्या अतिरिक्त पैसे कमावणे एक उत्कृष्ट कल्पना आहे. माझ्यासाठी पैशाची कोणतीही अडचण नाही. एअरक्राफ्ट डेटा एंट्रीसाठी ही सर्वोत्तम कंपनी आहे.",
        },
        {
          name: "खुशी सहना",
          stars: 5,
          text: "मी नुकतीच या कंपनीत काम सुरू केले आहे. कर्मचारी खूप दयाळू आणि उत्साहवर्धक आहेत. ही सर्वाधिक यशस्वी कंपन्यांपैकी एक आहे — एअरक्राफ्ट डेटा एंट्री चांगले कार्य वातावरण देते आणि कर्मचाऱ्यांचा योग्य सन्मान करते.",
        },
        {
          name: "सुनील सुहु",
          stars: 5,
          text: "आज एअरक्राफ्ट डेटा एंट्री उद्योगात एक प्रसिद्ध नाव आहे. कर्मचारी दयाळू आणि मदतगार आहेत, आणि सर्वांची मदत करण्यासाठी वेळ घेतात. मला त्यांची कार्यपद्धती खूप आवडते.",
        },
        {
          name: "कुमकुम दास",
          stars: 5,
          text: "मागील दोन वर्षांपासून मी या कंपनीत काम करत आहे. तुम्ही तुमच्या घरच्या सोयीने पैसे कमावू शकता. ही एअरक्राफ्ट डेटा एंट्रीमधील सर्वोत्तम डेटा एंट्री कंपन्यांपैकी एक आहे.",
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
    <h1 className="text-center text-primary fw-bold pb-4">दस्तऐवज</h1>

    
    <Row className="justify-content-center mb-4 g-4">
      {/* कार्ड 1 */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
        <div
          className="bg-white shadow rounded p-3 text-center"
          style={{ width: "340px", minHeight: "300px" }}
        >
          <img
            src="https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/1.jpeg"
            alt="दस्तऐवज 1"
            className="rounded mb-3"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <h6 className="fw-bold mb-2">दस्तऐवज 1</h6>
          <p className="text-muted small mb-3">आपली पहिली फाइल डाउनलोड करा.</p>
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

      {/* कार्ड 2 */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
        <div
          className="bg-white shadow rounded p-3 text-center"
          style={{ width: "340px", minHeight: "300px" }}
        >
          <img
            src="https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/2.jpeg"
            alt="दस्तऐवज 2"
            className="rounded mb-3"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <h6 className="fw-bold mb-2">दस्तऐवज 2</h6>
          <p className="text-muted small mb-3">आपली दुसरी फाइल डाउनलोड करा.</p>
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
      {/* कार्ड 3 */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
        <div
          className="bg-white shadow rounded p-3 text-center"
          style={{ width: "340px", minHeight: "300px" }}
        >
          <img
            src="https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/3.jpeg"
            alt="दस्तऐवज 3"
            className="rounded mb-3"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <h6 className="fw-bold mb-2">दस्तऐवज 3</h6>
          <p className="text-muted small mb-3">आपली तिसरी फाइल डाउनलोड करा.</p>
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

      {/* कार्ड 4 */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
        <div
          className="bg-white shadow rounded p-3 text-center"
          style={{ width: "340px", minHeight: "300px" }}
        >
          <img
            src="https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/4.jpeg"
            alt="दस्तऐवज 4"
            className="rounded mb-3"
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <h6 className="fw-bold mb-2">दस्तऐवज 4</h6>
          <p className="text-muted small mb-3">आपली अंतिम फाइल डाउनलोड करा.</p>
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

    {/* 🎥 व्हिडिओ विभाग */}
    <Row className="justify-content-center text-center">
      <Col xs={12}>
        <h2 className="fw-bold display-4 mb-5 text-primary">व्हिडिओ दस्तऐवज</h2>

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

    {/* 📞 संपर्क विभाग */}
    <Row className="align-items-center justify-content-center mt-5 g-4">
      {/* डावीकडील प्रतिमा */}
      <Col xs={12} md={6} className="text-center">
        <img
          src="https://aircraftdataentry.com/assets/contact.6f65b4b0.svg"
          alt="Contact Us"
          className="img-fluid rounded"
          style={{ maxHeight: "250px", objectFit: "cover" }}
        />
        <h1 className="pt-5 text-primary fw-bold">संपर्क करा</h1>
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
