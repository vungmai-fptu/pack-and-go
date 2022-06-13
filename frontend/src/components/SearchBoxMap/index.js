import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { IoLocationOutline } from "react-icons/io5";
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    console.log(address);
    geocodeByAddress(address)
      .then((results) => {
        console.log(results[0]);
        getLatLng(results[0]);
      })
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
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
                  <div
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
}

export default LocationSearchInput;
