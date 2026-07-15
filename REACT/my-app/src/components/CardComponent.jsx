import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Flower from "./assets/Flower.png";

function CardComponent() {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
          Key Platform Features
        </h3>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          Our cutting-edge environment is optimized for development <br />
          speed, security, and responsive UI design.
        </p>
      </div>
      <div className="d-flex gap-4 flex-wrap justify-content-center mt-4 p-4">
        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            backgroundColor: "#f2f2f2",
          }}
        >
          <Card.Body>
            <Card.Text style={{ fontSize: "50px" }}>⚡</Card.Text>
            <Card.Title>Super Fast Build</Card.Title>
            <Card.Text>
              Optimized Compilation pipeline built on top of Vite for rapid
              update.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            backgroundColor: "#f2f2f2",
          }}
        >
          <Card.Body>
            <Card.Text style={{ fontSize: "50px" }}>🛡️</Card.Text>
            <Card.Title>Secure Routing</Card.Title>
            <Card.Text>
              state-of-the-art-client validation and routing safeguards.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            backgroundColor: "#f2f2f2",
          }}
        >
          <Card.Body>
            <Card.Text style={{ fontSize: "50px" }}>🎨</Card.Text>
            <Card.Title>Modern Interface</Card.Title>
            <Card.Text>
              Stunning interactive UI built with high-quality Bootstrap
              components.
            </Card.Text>
          </Card.Body>
        </Card>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <Card style={{ backgroundColor: "#f2f2f2" }}>
            <Card.Body>
              <div style={{display:"flex",gap:"20px"}}>
                <div>
                  <Card.Text
                    style={{
                      fontSize: "10px",
                      backgroundColor: "#4930af",
                      color: "white",
                      borderRadius: "10px",
                      width: "100px",
                      alignItems: "center",
                      padding: "6px 12px",
                      display: "inline-block",
                    }}
                  >
                    Interactive Guide
                  </Card.Text>
                  <Card.Title style={{ color: "#4930af" }}>
                    React state & Optimization Playground
                  </Card.Title>
                  <Card.Text>
                    Learn and Practice advanced React hooks including useRef,
                    <br />
                    useMemo,useCallback,and useReader with our live feedback{" "}
                    <br />
                    editor.
                  </Card.Text>
                </div>

                <div style={{marginTop:"46px"}}>
                  <button
                    style={{
                      backgroundColor: "#4930af",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "8px 16px",
                    }}
                  >
                    Go to Playground →
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
