import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
            </h1>
            <img src="/Users/dustin/Desktop/IMG_1790.jpeg" alt="A bird" />
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <ol>
                <li>C</li>
                <li>B</li>
                <li>C</li>
            </ol>
            <p>Dustin Stark</p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 50,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
