import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link, Route} from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import {NavDropdown} from "react-bootstrap";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                {/*<Navbar.Brand href="/">*/}
                {/*    <img src={'img'} className="img-fluid logo" alt="brand" />*/}
                {/*</Navbar.Brand>*/}
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >

                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={(<span><CgFileDocument style={{ marginBottom: "2px" }} /> Résumé</span>)}
                            menuVariant="dark"
                        >
                            <NavDropdown.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/awards"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    Awards
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/education"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    Education
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/experience"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    Experience
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/interests"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    Interests
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/projects"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    Projects
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/publications"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    Publications
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/skills"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    Skills
                                </Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
