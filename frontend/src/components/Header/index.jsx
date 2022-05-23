export default function Header() {
  return (
    <header>
      <div className="w_I" style={{top: "0", left:"0"}}>
        <div className="w_V w_X">
          <div className="w_i-" style={{ alignItems: "center" }}>
            <div className="w_ja w_af w_aj w_ai">
              <a href="/" className="w_AP w_hV w_hX">
                <img
                  alt="Worldee logo"
                  src="https://wrld-se-prod.b-cdn.net/client/images/src/app/components/components/logo/imgs/a83c533ff7417b8d1092.svg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w_V w_W w_az">
          <div className="w_kX w_R" aria-describedby="popup-1">
            <div className="w_i5">
              <div className="w_vG w_vO w_i6">
                <input
                  type="text"
                  placeholder="Search"
                  className="w_S"
                  defaultValue
                />
              </div>
              <div className="w_i7">
                <button className="w_ih w_ip w_ic">
                  <div className="w_ib">
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#search-inputbH-usage"
                      alt="common/search-input"
                      className="w_fu w_fy w_fU"
                    />
                  </div>
                  <span className="w_ia" />
                </button>
              </div>
            </div>
          </div>
          <div className="w_ja w_af w_ah" />
          <a href="/explore/feed" className="w_ih w_ip w_L w_M">
            <div className="w_ib w_N">
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#earth_fullY-usage"
                alt="common/earth_full"
                className="w_fu w_fy w_fM"
              />
            </div>
            <span className="w_ia">
              <span>Home</span>
            </span>
          </a>
          <a href="/explore/trips" className="w_ih w_ip w_L">
            <div className="w_ib w_N">
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#path_emptya5-usage"
                alt="common/path_empty"
                className="w_fu w_fy w_fU"
              />
            </div>
            <span className="w_ia">
              <span>Trips</span>
            </span>
          </a>
          <a href="/explore/destinations" className="w_ih w_ip w_L">
            <div className="w_ib w_N">
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#compass_emptyF-usage"
                alt="common/compass_empty"
                className="w_fu w_fy w_fU"
              />
            </div>
            <span className="w_ia">
              <span>Destinations</span>
            </span>
          </a>
          <div className="w_kX" aria-describedby="popup-2">
            <button className="w_ih w_ip w_L">
              <div className="w_ib w_N">
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#place-add-bold_emptybd-usage"
                  alt="common/place-add-bold_empty"
                  className="w_fu w_fy w_fU"
                />
              </div>
              <span className="w_ia">
                <span>Create</span>
              </span>
            </button>
          </div>
          <div className="w_kX" aria-describedby="popup-3">
            <button className="w_ih w_ip w_L">
              <div className="w_ib w_N">
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#heart-bold_emptyab-usage"
                  alt="common/heart-bold_empty"
                  className="w_fu w_fy "
                />
              </div>
              <span className="w_ia">
                <span>Notifications</span>
              </span>
            </button>
          </div>
        </div>
        <div className="w_V w_Y">
          <div
            className="w_i-"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div className="w_T">
              <a href="/longpc" className="w_ii w_ip w_U">
                <div className="w_ib">
                  <div className="w_ki">
                    <div className="w_kj w_kr" style={{ zIndex: 1 }}>
                      <img
                        className="w_km"
                        alt="profile"
                        src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                      />
                    </div>
                  </div>
                </div>
                <div className="w_A9 w_A-">
                  <span className="w_ia ">Long Trần</span>
                </div>
              </a>
              <div className="w_kX" aria-describedby="popup-4">
                <button className="w_ii w_ip w_ic">
                  <div className="w_ib">
                    <div className="w_jP w_jM">
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#arrowa-usage"
                        alt="common/arrow"
                        className="w_fu w_fz w_fO"
                      />
                    </div>
                  </div>
                  <span className="w_ia" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
