      {/* ===== How It Works Section with Top Background Image ===== */}
<section className="py-5 position-relative text-white" style={{ overflow: "hidden" }}>
  
  {/* 🎨 Top Image */}
  <img
    src="https://aircraftdataentry.com/assets/design_light_blue_left.13e88b1e.svg"
    alt="Top Background"
    className="position-absolute top-0 start-0 w-100"
    style={{ zIndex: 0, objectFit: "cover" }}
  />

  {/* Overlay for content readability */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ backgroundColor: "rgba(0, 123, 255, 0.6)", zIndex: 1 }}
  ></div>

  {/* Content */}
  <Container className="position-relative" style={{ zIndex: 2 }}>
    <Row className="align-items-center">
      {/* 🎥 Left Side - Headings + Video + Buttons */}
      <Col xs={12} md={6} className="mb-5 mb-md-0 text-center">
        <div className="d-flex flex-column align-items-center gap-4">
          {/* 🟦 Headings */}
          <div>
            <h2 className="fw-bold fs-1 ">How it Works?</h2>
            <h2 className="fw-bold fs-1 text-danger ">Form Filling</h2>
          </div>

          {/* 🎬 YouTube Video */}
          <div className="ratio ratio-16x9 w-100">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

          {/* 🔘 Buttons (Stacked Vertically) */}
          <div className="d-flex flex-column align-items-center gap-3 w-100">
            <Button variant="danger" className="rounded-pill px-4 w-75">
              Subscribe
            </Button>
            <Button variant="warning" className="rounded-pill px-4 w-75">
              Learn More
            </Button>
          </div>
        </div>
      </Col>

      {/* 📦 Right Side - 6 Divs */}
      <Col xs={12} md={6}>
        <div className="d-flex flex-column gap-3 align-items-center align-items-md-start">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-primary border border-white rounded shadow text-center p-3 w-100"
              style={{ minHeight: "100px" }}
            >
              <h6 className="fw-bold mb-1 text-white">Feature {index + 1}</h6>
              <p className="small mb-0 text-light">Short description line 1</p>
              <p className="small mb-0 text-light">Short description line 2</p>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
</section>