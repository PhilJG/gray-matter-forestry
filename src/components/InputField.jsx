import React, { useState, useEffect } from "react";

import PhoneNumberInput from "react-phone-number-input";

export const InputField = ({ label, type, name }) => {
  return (
    <div className="form-group">
      {type === "textarea" ? (
        <textarea className="form-control" name={name} placeholder={label} />
      ) : type === "phone" ? (
        <input
          type={type}
          className="form-control"
          name={name}
          placeholder={label}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      ) : (
        <input
          type={type}
          className="form-control"
          name={name}
          placeholder={label}
        />
      )}
    </div>
  );
};

export const CategoryDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="form-group">
      <select
        id="question-category"
        value={selectedCategory}
        name="data[category]"
        onChange={handleCategoryChange}
        className="form-control"
      >
        <option value="">Select a category</option>
        <option value="tree-safety-risk-assessment">
          Tree Safety/Risk Assessment
        </option>
        <option value="construction-regulations">
          Construction/Regulations
        </option>
        <option value="tree-care">Tree Care (Pruning, Healthcare, etc.)</option>
        <option value="other-not-sure">Other/Not Sure</option>
      </select>
    </div>
  );
};

export const AddressInputField = () => {
  const [query, setQuery] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInput, setHasInput] = useState(false);
  const [addressSelected, setAddressSelected] = useState(false);

  const fetchData = async () => {
    if (query.length > 0 && query.length >= 3) {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            query
          )}&format=json&namedetails=1&addressdetails=1&extratags=1&limit=1`
        );
        const data = await response.json();

        console.log("data", data);

        console.log("data[0].display_name", data[0].display_name);

        setAddresses(data);
        setAddressSelected(true);
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
  //Address search
  useEffect(() => {
    fetchData();
  }, [query, hasInput]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(event.target.value);
    if (event.target.value.length >= 3) {
      setHasInput(true);
      setAddressSelected(false);
      setAddresses([]); // clear addresses when input field is changed
      fetchData(); // fetch new data when input field is changed
    } else {
      setHasInput(false);
      setAddresses([]); // clear addresses when input field is cleared
    }
  };

  const handleSelectAddress = (address) => {
    setQuery(address);

    setAddresses([]);
  };

  return (
    <>
      <input
        name="data[address]"
        id="addressInput"
        placeholder="Address / Location of the trees"
        type="text"
        value={query}
        onChange={handleInputChange}
        className="form-control w-full text-dark border border-gray-300 rounded-md relative"
      />
      <div
        id="autocompleteResults"
        className={`absolute z-10 bg-white border border-gray-300 rounded-md ${
          hasInput && addresses.length > 0 && addressSelected ? "" : "none"
        }`}
        style={{ display: hasInput ? "block" : "none" }}
      >
        {addresses.map((item) => (
          <div
            key={item.place_id}
            onClick={() => handleSelectAddress(item.display_name)}
            style={{ cursor: "pointer" }}
            className="address-string p-2 cursor-pointer bg-white text-dark"
          >
            {item.display_name}
          </div>
        ))}
      </div>
    </>
  );
};
