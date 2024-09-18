import React, { useState, useEffect } from "react";

export const InputField = ({ label, type, name }) => {
  return (
    <div className="form-group">
      {type === "textarea" ? (
        <textarea className="form-control" name={name} placeholder={label} />
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

export const AddressInputField = () => {
  const [query, setQuery] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInput, setHasInput] = useState(false);

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
      </div>
    </>
  );
};
