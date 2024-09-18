import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";

import Logo from "../gray-matter-wordmark-white.png";
import ISACetrification from "../isa-certification.webp";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const formRef = useRef(null);
  // const navigate = useNavigate();
  // const [{ name, email, message }, setState] = useState(initialState);
  const [query, setQuery] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInput, setHasInput] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };
  // const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(formRef.current.action, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Form successfully submitted");
      });
  };

  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       e.target,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         clearState();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  //Address search
  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 0 && query.length >= 3) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              query
            )}&countrycodes=ca&limit=5`
          );
          const data = await response.json();
          setAddresses(data);
        } catch (error) {
          console.error("Error fetching geocoding data:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setAddresses([]);
      }
    };

    fetchData();
  }, [query, hasInput]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(event.target.value);
    if (event.target.value.length >= 3) {
      setHasInput(true);
    } else {
      setHasInput(false);
    }
  };

  const handleSelectAddress = (address) => {
    setQuery(address);

    setAddresses([]);
  };

  return (
    <div id="contact">
      <div className="container contact-container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form
              name="sentMessage"
              validate
              onSubmit={handleSubmit}
              ref={formRef}
              id="sheetdb-form"
              action="https://sheetdb.io/api/v1/zevs0j3gpu78v"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      id="nameInput"
                      name="data[name]"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <input
                    name="data[address]"
                    id="addressInput"
                    placeholder="Address / Location of the trees"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    className="form-control w-full text-dark border border-gray-300 rounded-md relative"
                  />
                  {/* {isLoading && (
                      <div className="text-xs">
                        <LoadSpinner />
                      </div>
                    )} */}
                  <div
                    id="autocompleteResults"
                    className={`absolute z-10 bg-white border border-gray-300 rounded-md ${
                      hasInput ? "" : "hidden"
                    }`}
                  >
                    {addresses.map((item) => (
                      <div
                        key={item.place_id}
                        onClick={() => handleSelectAddress(item.display_name)}
                        className="address-string p-2 cursor-pointer bg-white text-dark"
                      >
                        {item.display_name}
                      </div>
                    ))}
                  </div>{" "}
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="data[email]"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="data[message]"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3>Contact Info</h3>
            {/* <p>
              <span>
                <i className="fa fa-map-marker"></i> Address
              </span>
              {props.data ? props.data.address : "loading"}
            </p> */}
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-phone"></i> Phone
              </span>{" "}
              {props.data ? props.data.phone : "loading"}
            </p>
          </div>
          <div className="contact-item">
            {/* <p>
              <span>
                <i className="fa fa-envelope-o"></i> Email
              </span>{" "}
              {props.data ? props.data.email : "loading"}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
