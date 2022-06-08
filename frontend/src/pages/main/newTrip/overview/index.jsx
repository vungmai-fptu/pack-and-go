import {
  IoCamera,
  IoLocationSharp,
  IoLocationOutline,
  IoNotificationsOutline,
  IoCarSport,
} from "react-icons/io5";
import {
  FaPlane,
  FaMotorcycle,
  FaBicycle,
  FaBusAlt,
  FaTrain,
  FaWalking,
  FaShippingFast,
} from "react-icons/fa";
export default function Overview() {
  return (
    <div className="w_CU">
      <div className="w_oz w_CX">
        <div className="w_aam w_iW">
          <div className="w_aan" />
          <img
            src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#background-mapiV-usage"
            alt="custom/background-map"
            className="w_fu w_fB w_aao w_aap"
          />
          <div className="w_aaq">
            <div className="w_ZZ">
              <div className="w_zA w_zB w_zF">
                <div className="w_zH w_zL w_zO">
                  <div className="w_zG">
                    <div className="w_My w_MD w_Z0">
                      <IoCamera />
                      <div className="w_MB">
                        <label className="w_rI w_rQ w_MC">0</label>
                        Photos
                      </div>
                    </div>
                    <div className="w_My w_MD w_Z0">
                      <IoLocationSharp />
                      <div className="w_MB">
                        <label className="w_rI w_rQ w_MC">0</label>
                        Places
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w_oz w_iX">
          <label className="w_rI w_rS w_UW">Trip’s destination</label>
          <div className="w_oz w_UX">
            <div
              data-rbd-droppable-id="STOPS-3333"
              data-rbd-droppable-context-id={0}
              className
            />
            <div className="w_i- w_UY">
              <IoLocationOutline />
              <div className="w_Za w_Zf w_Ze w_UZ">
                <div tabIndex={1} className="comboboxSmall__control w_Y5">
                  <div className="comboboxSmall__value-container w_Y6">
                    <input type="text" placeholder="Enter a place" />
                  </div>
                </div>
                <div className="w_kX w_Zb" aria-describedby="popup-5">
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
          </div>
          <label className="w_rI w_rS w_UW">Announce me before</label>
          <div className="w_oz w_UX">
            <div
              data-rbd-droppable-id="STOPS-3333"
              data-rbd-droppable-context-id={0}
              className
            />
            <div className="w_i- w_UY">
              <IoNotificationsOutline />
              <div className="w_Za w_Zf w_Ze w_UZ">
                <div tabIndex={1} className="comboboxSmall__control w_Y5">
                  <div className="comboboxSmall__value-container w_Y6">
                    <input type="text" placeholder="Enter a place" />
                  </div>
                </div>
                <div className="w_kX w_Zb" aria-describedby="popup-5">
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
          </div>
          <label className="w_rI w_rS w_UW">Transportation</label>
          <div className="w_oz w_UX">
            <div className="w_i- w_UY">
              <div className="w_Za w_Zf w_Ze w_UZ">
                <div
                  className="log"
                  style={{
                    background: "hsla(0, 0%, 4%, .15)",
                    height: "34px",
                    margin: "0 100px",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <FaPlane />
                  <IoCarSport />
                  <FaBusAlt />
                  <FaTrain />
                  <FaShippingFast />
                  <FaMotorcycle />
                  <FaBicycle />
                  <FaWalking />
                </div>
              </div>
            </div>
          </div>
          <div className="w_ja w_UU" style={{ flex: "1 1 0%" }}>
            <img
              style={{ width: "auto", height: "auto" }}
              src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#toVisitEmptyj6-usage"
              alt="custom/toVisitEmpty"
              className="w_fu w_fB w_UV"
            />
            <div className="w_Eb w_Ee">
              <div className="w_Ej">
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#info_fullar-usage"
                  alt="common/info_full"
                  className="w_fu w_fz w_El w_fM"
                />
                <div className="w_Em">
                  First, fill in the places you want to visit. Then you will be
                  able to easily move them to the itinerary.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
