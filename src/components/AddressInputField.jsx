const AddressInputField = (props) => {
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
      </div>
    </>
  );
};
