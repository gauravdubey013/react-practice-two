import React from "react";
import {HashLink} from "react-router-hash-link";
import { Link } from "react-router-dom";
import Profile from '../component/Profile'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <HashLink className="navbar-brand" to={"/#home"}>
            Market Work
          </HashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> okay </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <HashLink to="">
                <button className="nav-link active" id="nav-home-tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                </HashLink>
                <Link to={"/#profile"}>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"  type="button" role="tab"  aria-selected="false">Profile</button>
                </Link>
                <HashLink to="">
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                </HashLink>
                {/* <HashLink to="">
                <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
                </HashLink> */}
            </div>
            <form className="d-flex flex-end" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
