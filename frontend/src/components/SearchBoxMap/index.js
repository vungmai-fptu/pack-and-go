import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect } from "react";
import { v4 as uuid } from 'uuid';
const LocationSearchInput = () => {

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState([]);

  const handleChange = (address) => {
    setAddress(address);
  };

  console.log(coordinates);
  useEffect(() => {

    if (address.length === 0) {
      return;
    }
    let isMounted = true;
    const getCoordinates = async () => {
      const results = await geocodeByAddress(address);
      if (results && isMounted) {
        setCoordinates([results[0].geometry.location.lat(), results[0].geometry.location.lng()]);

      }
    }
    getCoordinates();
    return () => isMounted = false;
  }, [address]);

  const handleSelect = (address) => {
    console.log(address);
    setAddress(address);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <div className="w_i- w_UY">
            <IoLocationOutline />
            <div className="w_Za w_Zf w_Ze w_UZ">
              <div className="comboboxSmall__control w_Y5">
                <div className="comboboxSmall__value-container w_Y6">
                  <input
                    {...getInputProps({
                      placeholder: "Enter a place",
                      className: "location-search-input",
                    })}
                  />
                </div>
              </div>
              <div className="w_kX w_Zb">
                <div className="w_jP w_jI w_Zd">
                  <img
                    src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#mapaF-usage"
                    alt="common/map"
                    className="w_fu w_fz w_Zc w_fM"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div key={uuid()}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput;
