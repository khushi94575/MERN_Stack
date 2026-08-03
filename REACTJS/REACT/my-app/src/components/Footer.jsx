import React from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';

const LightFooter = () => {
  return (
    <footer className="bg-body-tertiary text-dark py-5 border-top mt-auto" style={{ width: '100%' }}>
      <Container>
        <Row className="gy-4">
          {/* Column 1: Brand & Description */}
          <Col xs={12} md={4}>
            <h5 className="fw-bold mb-3 text-primary">BrandName</h5>
            <p className="text-muted small">
              Building modern web applications with elegant design patterns. Clean code, high efficiency, and reusable layouts.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col xs={6} md={2}>
            <h6 className="fw-bold text-uppercase small mb-3">Company</h6>
            <Nav className="flex-column small">
              <Nav.Link href="#about" className="p-0 mb-2 text-muted hover-link">About Us</Nav.Link>
              <Nav.Link href="#careers" className="p-0 mb-2 text-muted hover-link">Careers</Nav.Link>
              <Nav.Link href="#blog" className="p-0 mb-2 text-muted hover-link">Our Blog</Nav.Link>
            </Nav>
          </Col>

          {/* Column 3: Resources */}
          <Col xs={6} md={2}>
            <h6 className="fw-bold text-uppercase small mb-3">Resources</h6>
            <Nav className="flex-column small">
              <Nav.Link href="#docs" className="p-0 mb-2 text-muted hover-link">Documentation</Nav.Link>
              <Nav.Link href="#help" className="p-0 mb-2 text-muted hover-link">Help Center</Nav.Link>
              <Nav.Link href="#privacy" className="p-0 mb-2 text-muted hover-link">Privacy Policy</Nav.Link>
            </Nav>
          </Col>

          {/* Column 4: Newsletter */}
          <Col xs={12} md={4}>
            <h6 className="fw-bold text-uppercase small mb-3">Stay Updated</h6>
            <p className="text-muted small mb-3">Subscribe to our weekly newsletter.</p>
            <Form className="d-flex gap-2">
              <Form.Control type="email" placeholder="Enter email address" aria-label="Email Address" className="form-control-sm" />
              <Button variant="primary" size="sm" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom Bar: Copyright & Attribution */}
        <hr className="my-4 text-muted" />
        <Row className="align-items-center small">
          <Col md={6} className="text-center text-md-start text-muted mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} BrandName Inc. All rights reserved.
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end gap-3">
              <Nav.Link href="#terms" className="p-0 text-muted small">Terms of Service</Nav.Link>
              <Nav.Link href="#cookies" className="p-0 text-muted small">Cookie Settings</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default LightFooter;
