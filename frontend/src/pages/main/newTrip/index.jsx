import React from "react";
import Tabs from "../../../components/tab/tabs";
import Header from "./header";
import PrepareList from "./PrepareList";
import PriceList from "./PriceList";
import styles from "./trip.module.css";
function NewTrip() {
  return (
    <div className={styles.newTrip}>
      <Header />
      <div className="w_i- w_hM">
        <div className="w_hN w_hO TRIP_INFO">
          <div className="w_CS">
            {/* <Tabs>
              <div label="long">
                See ya later, <em>Alligator</em>!
              </div>
              <div label="do">
                See ya later, <em>long</em>!
              </div>
            </Tabs> */}
            <div className="w_O2 TRIP_TABS">
              <Tabs className="w_O4">
                <span label="long" className="w_O8">
                  Overview
                </span>
                <span label="lo" className="w_O8">
                  sa
                </span>
                <span label="log" className="w_O8">
                  hgf
                </span>
                {/* <button label="longhai" className="w_O6">
                  <span>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#path_emptya5-usage"
                      alt="common/path_empty"
                      className="w_fu w_fy w_fO"
                    />
                  </span>
                  <span className="w_O8">Itinerary</span>
                </button>
                <button label="longba" className="w_O6">
                  <span>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#checkmark_square_emptyq-usage"
                      alt="common/checkmark_square_empty"
                      className="w_fu w_fy w_fO"
                    />
                  </span>
                  <span className="w_O8">Checklist</span>
                </button>
                <button label="longbon" className="w_O6">
                  <span>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#note_emptyaW-usage"
                      alt="common/note_empty"
                      className="w_fu w_fy w_fO"
                    />
                  </span>
                  <span className="w_O8">Notes</span>
                </button> */}
              </Tabs>
              <div className="w_O3" />
              <div className="w_O4">
                <button disabled className="w_O6">
                  <span>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#info_emptyan-usage"
                      alt="common/info_empty"
                      className="w_fu w_fy w_fO"
                    />
                  </span>
                  <span className="w_O8">Destination Info</span>
                </button>
                <button className="w_O6">
                  <span>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#bulb_emptyd-usage"
                      alt="common/bulb_empty"
                      className="w_fu w_fy w_fO"
                    />
                  </span>
                  <span className="w_O8">Get inspired</span>
                </button>
              </div>
              <div className="w_O5">
                <button className="w_O6">
                  <span>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#rescuebx-usage"
                      alt="common/rescue"
                      className="w_fu w_fy w_fO"
                    />
                  </span>
                  <span className="w_O8">Help</span>
                </button>
              </div>
            </div>

            {/* <PrepareList />
            <PriceList /> */}


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
                              <img
                                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#photobb-usage"
                                alt="photo"
                                className="w_fu w_fx w_Mz w_MA w_fQ"
                              />
                              <div className="w_MB">
                                <label className="w_rI w_rQ w_MC">0</label>
                                Photos
                              </div>
                            </div>
                            <div className="w_My w_MD w_Z0">
                              <img
                                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#place_fullbi-usage"
                                alt="common/place_full"
                                className="w_fu w_fx w_Mz w_MA w_fQ"
                              />
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
                  <label className="w_rI w_rS w_UW">
                    Places I Want to Visit
                  </label>
                  <div className="w_oz w_UX">
                    <div
                      data-rbd-droppable-id="STOPS-3333"
                      data-rbd-droppable-context-id={0}
                      className
                    />
                    <div className="w_i- w_UY">
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_common_place_mark_emptysprite-ed5495.svg#place_mark_empty_grayc1-usage"
                        alt="common/place_mark_empty/place_mark_empty_gray"
                        className="w_fu w_fy "
                      />
                      <div className="w_Za w_Zf w_Ze w_UZ">
                        <div
                          tabIndex={1}
                          className="comboboxSmall__control w_Y5"
                        >
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
                  <div className="w_ja w_UU" style={{ flex: "1 1 0%" }}>
                    <img
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
                          First, fill in the places you want to visit. Then you
                          will be able to easily move them to the itinerary.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w_i- w_hQ w_CZ">
                <div className="w_i- w_V3">
                  <div className="w_V5">
                    <button className="w_ij w_in w_ic w_V6">
                      <div className="w_ib">
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#arrowa-usage"
                          alt="common/arrow"
                          className="w_fu w_fA w_V7 w_fO"
                        />
                      </div>
                      <span className="w_ia" />
                    </button>
                  </div>
                </div>
                <div className="w_oz w_hR">
                  <div
                    className="w_i- w_jc w_iV"
                    style={{ alignItems: "stretch" }}
                  >
                    <div className="w_vX w_v0 w_vY w_iB">
                      <div
                        className="w_i- w_jc"
                        style={{
                          alignItems: "baseline",
                          justifyContent: "space-between",
                        }}
                      >
                        <label className="w_rI w_rS w_iJ">Trip Itinerary</label>
                        <div className="w_iK">
                          <button className="w_ii w_ip w_ic">
                            <div className="w_ib">
                              <div
                                title="Add Physical Demands"
                                className="w_Ch"
                              >
                                <div>
                                  <img
                                    src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#signalbE-usage"
                                    alt="common/signal"
                                    className="w_fu w_fz w_fP"
                                  />
                                </div>
                              </div>
                            </div>
                            <span className="w_ia" />
                          </button>
                          <button className="w_ii w_ip w_ic">
                            <div className="w_ib">
                              <div title="Add Price List" className="w_Ch">
                                <div>
                                  <img
                                    src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#coin-stack_fullA-usage"
                                    alt="common/coin-stack_full"
                                    className="w_fu w_fz w_fP"
                                  />
                                </div>
                              </div>
                            </div>
                            <span className="w_ia" />
                          </button>
                        </div>
                      </div>
                      <div className="w_XB w_XD w_XE w_XI w_XG w_XC">
                        <div className="w_XJ" tabIndex={1}>
                          <div className="w_XO w_XE">
                            <span className="w_Xy">
                              Write an introduction to the trip
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w_abJ">
                        <div className="w_abK" />
                        <div className="w_abL">
                          <div className="w_abG">
                            <div className="w_abH w_abh">
                              <div className="w_D1 w_D3 w_abi">
                                <div className="w_D4 w_D5">
                                  <img
                                    src="fonts/src_app_components_components_svgIcon_icons_common_plus_in_circlesprite-afc05f.svg#plus_in_circle_activedn-usage"
                                    alt="common/plus_in_circle/plus_in_circle_active"
                                    className="w_fu w_fz w_abk"
                                  />
                                </div>
                                <div className="w_D8">
                                  <span className="w_abj">Add a Day</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w_abG">
                            <div style={{ visibility: "hidden" }}>
                              <div className="w_abp">
                                <div className="w_abo">
                                  <img
                                    src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#arrowa-usage"
                                    alt="common/arrow"
                                    className="w_fu w_fA w_fP"
                                    style={{ transform: "rotate(-90deg)" }}
                                  />
                                </div>
                                <div className="w_abq">Day 1</div>
                                <div className="w_abs">
                                  <div className="w_abw">
                                    <div className="w_aia w_aif" />
                                  </div>
                                  <div className="w_aby">
                                    <div title="Description" className="w_Ch">
                                      <div>
                                        <img
                                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                                          alt="common/note"
                                          className="w_fu w_fz w_fv w_abz w_fP"
                                        />
                                      </div>
                                    </div>
                                    <div title="Sorting" className="w_Ch">
                                      <div>
                                        <img
                                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#sortca-usage"
                                          alt="common/sort"
                                          className="w_fu w_fz w_fv w_abz w_abA w_fP"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className>
                                <div className="w_abH">
                                  <div className="w_abM w_abO">
                                    <div
                                      data-rbd-droppable-id="STOPS-1"
                                      data-rbd-droppable-context-id={1}
                                      className
                                    >
                                      <div className="w_abE" />
                                      <div className="w_abR">
                                        <div className="w_abP" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w_abH w_abh">
                                  <div className="w_D1 w_D3 w_abi">
                                    <div className="w_D4 w_D5">
                                      <img
                                        src="fonts/src_app_components_components_svgIcon_icons_common_plus_in_circlesprite-afc05f.svg#plus_in_circle_activedn-usage"
                                        alt="common/plus_in_circle/plus_in_circle_active"
                                        className="w_fu w_fz w_abk"
                                      />
                                    </div>
                                    <div className="w_D8">
                                      <span className="w_abj">Add a Day</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w_vX w_v1 w_vY w_iB">
                      <div className="w_XB w_XD w_XE w_XG w_XC">
                        <div className="w_XJ" tabIndex={1}>
                          <div className="w_XO w_XE">
                            <span className="w_Xy">
                              Write a conclusion to the trip
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w_vX w_vZ w_vY w_CX w_CZ">
                <div className="w_pW w_pX">
                  <h2 className="w_jf w_jk w_jB w_jq w_iU">
                    What to arrange<span className="w_iP">0/8</span>
                  </h2>
                </div>
                <div
                  data-rbd-droppable-id="CHECK_LIST_ITEM-9999"
                  data-rbd-droppable-context-id={2}
                  className
                >
                  <div
                    data-rbd-draggable-context-id={2}
                    data-rbd-draggable-id="CHECK_LIST_ITEM-1"
                    className="w_YR w_Uw"
                  >
                    <div className="w_Ux">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-2-hidden-text-4"
                        data-rbd-drag-handle-draggable-id="CHECK_LIST_ITEM-1"
                        data-rbd-drag-handle-context-id={2}
                        draggable="false"
                        className="w_Uz"
                      >
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#drag_and_dropM-usage"
                          alt="common/drag_and_drop"
                          className="w_fu w_fz w_UA w_fP"
                        />
                      </div>
                      <label className="w_OG">
                        <div className="w_OH w_ON w_OL">
                          <input type="checkbox" />
                        </div>
                      </label>
                      <div className="w_UB">
                        <span className="w_jf w_ji w_jk w_jz w_jp w_UD">
                          Transport
                        </span>
                      </div>
                      <div title="Hide item" className="w_Ch">
                        <div>
                          <img
                            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#hideak-usage"
                            alt="common/hide"
                            className="w_fu w_fz w_fv w_Uy w_fP"
                          />
                        </div>
                      </div>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                        alt="common/note"
                        className="w_fu w_fz w_fv w_Uy w_fP"
                      />
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id={2}
                    data-rbd-draggable-id="CHECK_LIST_ITEM-2"
                    className="w_YR w_Uw"
                  >
                    <div className="w_Ux">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-2-hidden-text-4"
                        data-rbd-drag-handle-draggable-id="CHECK_LIST_ITEM-2"
                        data-rbd-drag-handle-context-id={2}
                        draggable="false"
                        className="w_Uz"
                      >
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#drag_and_dropM-usage"
                          alt="common/drag_and_drop"
                          className="w_fu w_fz w_UA w_fP"
                        />
                      </div>
                      <label className="w_OG">
                        <div className="w_OH w_ON w_OL">
                          <input type="checkbox" />
                        </div>
                      </label>
                      <div className="w_UB">
                        <span className="w_jf w_ji w_jk w_jz w_jp w_UD">
                          Insurance
                        </span>
                      </div>
                      <div title="Hide item" className="w_Ch">
                        <div>
                          <img
                            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#hideak-usage"
                            alt="common/hide"
                            className="w_fu w_fz w_fv w_Uy w_fP"
                          />
                        </div>
                      </div>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                        alt="common/note"
                        className="w_fu w_fz w_fv w_Uy w_fP"
                      />
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id={2}
                    data-rbd-draggable-id="CHECK_LIST_ITEM-3"
                    className="w_YR w_Uw"
                  >
                    <div className="w_Ux">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-2-hidden-text-4"
                        data-rbd-drag-handle-draggable-id="CHECK_LIST_ITEM-3"
                        data-rbd-drag-handle-context-id={2}
                        draggable="false"
                        className="w_Uz"
                      >
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#drag_and_dropM-usage"
                          alt="common/drag_and_drop"
                          className="w_fu w_fz w_UA w_fP"
                        />
                      </div>
                      <label className="w_OG">
                        <div className="w_OH w_ON w_OL">
                          <input type="checkbox" />
                        </div>
                      </label>
                      <div className="w_UB">
                        <span className="w_jf w_ji w_jk w_jz w_jp w_UD">
                          Car rental
                        </span>
                      </div>
                      <div title="Hide item" className="w_Ch">
                        <div>
                          <img
                            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#hideak-usage"
                            alt="common/hide"
                            className="w_fu w_fz w_fv w_Uy w_fP"
                          />
                        </div>
                      </div>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                        alt="common/note"
                        className="w_fu w_fz w_fv w_Uy w_fP"
                      />
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id={2}
                    data-rbd-draggable-id="CHECK_LIST_ITEM-4"
                    className="w_YR w_Uw"
                  >
                    <div className="w_Ux">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-2-hidden-text-4"
                        data-rbd-drag-handle-draggable-id="CHECK_LIST_ITEM-4"
                        data-rbd-drag-handle-context-id={2}
                        draggable="false"
                        className="w_Uz"
                      >
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#drag_and_dropM-usage"
                          alt="common/drag_and_drop"
                          className="w_fu w_fz w_UA w_fP"
                        />
                      </div>
                      <label className="w_OG">
                        <div className="w_OH w_ON w_OL">
                          <input type="checkbox" />
                        </div>
                      </label>
                      <div className="w_UB">
                        <span className="w_jf w_ji w_jk w_jz w_jp w_UD">
                          Driving license
                        </span>
                      </div>
                      <div title="Hide item" className="w_Ch">
                        <div>
                          <img
                            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#hideak-usage"
                            alt="common/hide"
                            className="w_fu w_fz w_fv w_Uy w_fP"
                          />
                        </div>
                      </div>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                        alt="common/note"
                        className="w_fu w_fz w_fv w_Uy w_fP"
                      />
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id={2}
                    data-rbd-draggable-id="CHECK_LIST_ITEM-5"
                    className="w_YR w_Uw"
                  >
                    <div className="w_Ux">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-2-hidden-text-4"
                        data-rbd-drag-handle-draggable-id="CHECK_LIST_ITEM-5"
                        data-rbd-drag-handle-context-id={2}
                        draggable="false"
                        className="w_Uz"
                      >
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#drag_and_dropM-usage"
                          alt="common/drag_and_drop"
                          className="w_fu w_fz w_UA w_fP"
                        />
                      </div>
                      <label className="w_OG">
                        <div className="w_OH w_ON w_OL">
                          <input type="checkbox" />
                        </div>
                      </label>
                      <div className="w_UB">
                        <span className="w_jf w_ji w_jk w_jz w_jp w_UD">
                          Visa
                        </span>
                      </div>
                      <div title="Hide item" className="w_Ch">
                        <div>
                          <img
                            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#hideak-usage"
                            alt="common/hide"
                            className="w_fu w_fz w_fv w_Uy w_fP"
                          />
                        </div>
                      </div>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                        alt="common/note"
                        className="w_fu w_fz w_fv w_Uy w_fP"
                      />
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id={2}
                    data-rbd-draggable-id="CHECK_LIST_ITEM-6"
                    className="w_YR w_Uw"
                  >
                    <div className="w_Ux">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-2-hidden-text-4"
                        data-rbd-drag-handle-draggable-id="CHECK_LIST_ITEM-6"
                        data-rbd-drag-handle-context-id={2}
                        draggable="false"
                        className="w_Uz"
                      >
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#drag_and_dropM-usage"
                          alt="common/drag_and_drop"
                          className="w_fu w_fz w_UA w_fP"
                        />
                      </div>
                      <label className="w_OG">
                        <div className="w_OH w_ON w_OL">
                          <input type="checkbox" />
                        </div>
                      </label>
                      <div className="w_UB">
                        <span className="w_jf w_ji w_jk w_jz w_jp w_UD">
                          Vaccination
                        </span>
                      </div>
                      <div title="Hide item" className="w_Ch">
                        <div>
                          <img
                            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#hideak-usage"
                            alt="common/hide"
                            className="w_fu w_fz w_fv w_Uy w_fP"
                          />
                        </div>
                      </div>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                        alt="common/note"
                        className="w_fu w_fz w_fv w_Uy w_fP"
                      />
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id={2}
                    data-rbd-draggable-id="CHECK_LIST_ITEM-7"
                    className="w_YR w_Uw"
                  >
                    <div className="w_Ux">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-2-hidden-text-4"
                        data-rbd-drag-handle-draggable-id="CHECK_LIST_ITEM-7"
                        data-rbd-drag-handle-context-id={2}
                        draggable="false"
                        className="w_Uz"
                      >
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#drag_and_dropM-usage"
                          alt="common/drag_and_drop"
                          className="w_fu w_fz w_UA w_fP"
                        />
                      </div>
                      <label className="w_OG">
                        <div className="w_OH w_ON w_OL">
                          <input type="checkbox" />
                        </div>
                      </label>
                      <div className="w_UB">
                        <span className="w_jf w_ji w_jk w_jz w_jp w_UD">
                          Currency exchange
                        </span>
                      </div>
                      <div title="Hide item" className="w_Ch">
                        <div>
                          <img
                            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#hideak-usage"
                            alt="common/hide"
                            className="w_fu w_fz w_fv w_Uy w_fP"
                          />
                        </div>
                      </div>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                        alt="common/note"
                        className="w_fu w_fz w_fv w_Uy w_fP"
                      />
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id={2}
                    data-rbd-draggable-id="CHECK_LIST_ITEM-8"
                    className="w_YR w_Uw"
                  >
                    <div className="w_Ux">
                      <div
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-2-hidden-text-4"
                        data-rbd-drag-handle-draggable-id="CHECK_LIST_ITEM-8"
                        data-rbd-drag-handle-context-id={2}
                        draggable="false"
                        className="w_Uz"
                      >
                        <img
                          src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#drag_and_dropM-usage"
                          alt="common/drag_and_drop"
                          className="w_fu w_fz w_UA w_fP"
                        />
                      </div>
                      <label className="w_OG">
                        <div className="w_OH w_ON w_OL">
                          <input type="checkbox" />
                        </div>
                      </label>
                      <div className="w_UB">
                        <span className="w_jf w_ji w_jk w_jz w_jp w_UD">
                          Buy a SIM card
                        </span>
                      </div>
                      <div title="Hide item" className="w_Ch">
                        <div>
                          <img
                            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#hideak-usage"
                            alt="common/hide"
                            className="w_fu w_fz w_fv w_Uy w_fP"
                          />
                        </div>
                      </div>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#noteaQ-usage"
                        alt="common/note"
                        className="w_fu w_fz w_fv w_Uy w_fP"
                      />
                    </div>
                  </div>
                </div>
                <button className="w_Uw w_UE">
                  <div className="w_UF">
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#plusbt-usage"
                      alt="common/plus"
                      className="w_fu w_fA w_UG w_fP"
                    />
                    <span className="w_UH">Add item</span>
                  </div>
                </button>
                <div className="w_vX w_v0 w_vY">
                  <label className="w_rI w_rS">What to pack</label>
                </div>
                <div
                  data-rbd-droppable-id="CHECK_LIST_ITEM-9999"
                  data-rbd-droppable-context-id={3}
                  className
                />
                <button className="w_Uw w_UE">
                  <div className="w_UF">
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#plusbt-usage"
                      alt="common/plus"
                      className="w_fu w_fA w_UG w_fP"
                    />
                    <span className="w_UH">Add item</span>
                  </div>
                </button>
              </div>
              <div className="w_vX w_v0 w_vY w_CX w_CZ">
                <div className="w_pW w_pX">
                  <label className="w_rI w_rS">Notes</label>
                </div>
                <div className="w_XB w_XD w_XF">
                  <div
                    id="rdw-wrapper-2193"
                    className="w_XJ rdw-editor-wrapper"
                    aria-label="rdw-wrapper"
                  >
                    <div
                      className="rdw-editor-toolbar w_XK w_XL"
                      aria-label="rdw-toolbar"
                      aria-hidden="false"
                      style={{ visibility: "visible" }}
                    >
                      <div
                        className="rdw-inline-wrapper w_XQ"
                        aria-label="rdw-inline-control"
                      >
                        <div
                          className="rdw-option-wrapper w_XM"
                          aria-selected="false"
                          title="Bold"
                        >
                          <img
                            alt
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuMjM2IDBjMS42NTIgMCAyLjk0LjI5OCAzLjg2Ni44OTMuOTI1LjU5NSAxLjM4OCAxLjQ4NSAxLjM4OCAyLjY2OSAwIC42MDEtLjE3MyAxLjEzOS0uNTE2IDEuNjEtLjM0My40NzQtLjg0NC44My0xLjQ5OSAxLjA2OC44NDMuMTY3IDEuNDc0LjUyMyAxLjg5NSAxLjA3MS40MTkuNTUuNjMgMS4xODMuNjMgMS45MDMgMCAxLjI0NS0uNDQ0IDIuMTg3LTEuMzMgMi44MjUtLjg4Ni42NDEtMi4xNDQuOTYxLTMuNzY5Ljk2MUgwdi0yLjE2N2gxLjQ5NFYyLjE2N0gwVjBoNi4yMzZ6TTQuMzA4IDUuNDQ2aDIuMDI0Yy43NTIgMCAxLjMzLS4xNDMgMS43MzQtLjQzLjQwNS0uMjg1LjYwOC0uNzAxLjYwOC0xLjI1IDAtLjYtLjIwNC0xLjA0NC0uNjEyLTEuMzMtLjQwOC0uMjg2LTEuMDE2LS40MjctMS44MjYtLjQyN0g0LjMwOHYzLjQzN3ptMCAxLjgwNFYxMWgyLjU5M2MuNzQ3IDAgMS4zMTQtLjE1MiAxLjcwNy0uNDUyLjM5LS4zLjU4OC0uNzQ1LjU4OC0xLjMzNCAwLS42MzYtLjE2OC0xLjEyNC0uNS0xLjQ2LS4zMzYtLjMzNS0uODY0LS41MDQtMS41ODItLjUwNEg0LjMwOHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
                          />
                        </div>
                        <div
                          className="rdw-option-wrapper w_XM"
                          aria-selected="false"
                          title="Italic"
                        >
                          <img
                            alt
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTcgM1YyaDR2MUg5Ljc1M2wtMyAxMEg4djFINHYtMWgxLjI0N2wzLTEwSDd6Ii8+PC9zdmc+"
                          />
                        </div>
                        <div
                          className="rdw-option-wrapper w_XM"
                          aria-selected="false"
                          title="Underline"
                        >
                          <img
                            alt
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTYuMDQ1IDJ2Ljk5Mkw0Ljc4NSAzdjUuMTcyYzAgLjg1OS4yNDMgMS41MTIuNzI3IDEuOTU3czEuMTI0LjY2OCAxLjkxOC42NjhjLjgzNiAwIDEuNTA5LS4yMjEgMi4wMTktLjY2NC41MTEtLjQ0Mi43NjYtMS4wOTYuNzY2LTEuOTYxVjNsLTEuMjYtLjAwOFYySDEzdi45OTJMMTEuNzM5IDN2NS4xNzJjMCAxLjIzNC0uMzk4IDIuMTgxLTEuMTk1IDIuODQtLjc5Ny42NTktMS44MzUuOTg4LTMuMTE0Ljk4OC0xLjI0MiAwLTIuMjQ4LS4zMjktMy4wMTctLjk4OC0uNzY5LS42NTktMS4xNTItMS42MDUtMS4xNTItMi44NFYzTDIgMi45OTJWMmg0LjA0NXpNMiAxM2gxMXYxSDJ6Ii8+PC9zdmc+"
                          />
                        </div>
                      </div>
                      <div
                        className="rdw-list-wrapper w_XQ"
                        aria-label="rdw-list-control"
                      >
                        <div
                          className="rdw-option-wrapper w_XM"
                          aria-selected="false"
                          title="Unordered"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS43MiAzLjQyN2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3LjAxIDEuNzIuMDFDLjc3LjAwOCAwIC43NzUgMCAxLjcxNWMwIC45NC43NzQgMS43MTEgMS43MiAxLjcxMXptMC0yLjYyNWMuNTEgMCAuOTIyLjQxMi45MjIuOTE0YS45Mi45MiAwIDAgMS0xLjg0MiAwIC45Mi45MiAwIDAgMSAuOTItLjkxNHpNMS43MiA4LjcwM2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3IDUuMjg3IDEuNzIgNS4yODdDLjc3IDUuMjg3IDAgNi4wNTIgMCA2Ljk5NXMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjJjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAwIDEtMS44NDIgMGMwLS41MDUuNDE1LS45MTQuOTItLjkxNHpNMS43MiAxMy45ODJjLjk1MSAwIDEuNzIyLS43NjggMS43MjItMS43MDggMC0uOTQzLS43NzQtMS43MDgtMS43MjEtMS43MDgtLjk0NyAwLTEuNzIxLjc2OC0xLjcyMSAxLjcwOHMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjVjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAxIDEtMS44NDIgMCAuOTIuOTIgMCAwIDEgLjkyLS45MTR6TTUuNzQ0IDIuMTE1aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OS40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDcuMzk0aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOThINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OC40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDEyLjY3aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjQuNC40IDAgMCAwIC40MDIuMzk4eiIvPjwvZz48L3N2Zz4="
                            alt
                          />
                        </div>
                        <div
                          className="rdw-option-wrapper w_XM"
                          aria-selected="false"
                          title="Numbered list"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4yMDIgMS40NjZoOC4xNWMuMzM4IDAgLjYxMi0uMzIyLjYxMi0uNzIgMC0uMzk3LS4yNzQtLjcyLS42MTItLjcyaC04LjE1Yy0uMzM4IDAtLjYxMS4zMjMtLjYxMS43MiAwIC4zOTguMjczLjcyLjYxLjcyek0xMi4zNTIgNS43ODNoLTguMTVjLS4zMzggMC0uNjExLjMyMi0uNjExLjcyIDAgLjM5Ny4yNzMuNzIuNjEuNzJoOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5OC0uMjc0LS43Mi0uNjEyLS43MnpNMTIuMzUyIDExLjU0aC04LjE1Yy0uMzM4IDAtLjYxMS4zMjItLjYxMS43MiAwIC4zOTYuMjczLjcxOS42MS43MTloOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5Ny0uMjc0LS43Mi0uNjEyLS43MnpNLjc2NyAxLjI0OXYxLjgwMmMwIC4xOTUuMTM2LjM0My4zMTUuMzQzLjE3NiAwIC4zMTUtLjE1LjMxNS0uMzQzVi4zNTZjMC0uMTktLjEzMy0uMzM5LS4zMDItLjMzOS0uMTQ4IDAtLjIyMy4xMTgtLjI0Ny4xNTZhLjIyOC4yMjggMCAwIDAtLjAwMy4wMDVMLjU3OS42MjFhLjQ3NC40NzQgMCAwIDAtLjA5OC4yNzNjMCAuMTk0LjEyOC4zNTEuMjg2LjM1NXpNLjM1MiA4LjE5SDEuNTVjLjE1NyAwIC4yODUtLjE2Mi4yODUtLjM2MiAwLS4xOTgtLjEyOC0uMzU5LS4yODUtLjM1OUguNjh2LS4wMDZjMC0uMTA3LjIxLS4yODEuMzc4LS40MjIuMzM2LS4yNzguNzUzLS42MjUuNzUzLTEuMjI2IDAtLjU3LS4zNzYtMS0uODc0LTEtLjQ3NyAwLS44MzYuMzg1LS44MzYuODk3IDAgLjI5Ny4xNjQuNDAyLjMwNS40MDIuMiAwIC4zMjEtLjE3Ni4zMjEtLjM0NiAwLS4xMDYuMDIzLS4yMjguMjA0LS4yMjguMjQzIDAgLjI1LjI1NC4yNS4yODMgMCAuMjI4LS4yNTIuNDQyLS40OTUuNjQ5LS4zMDEuMjU1LS42NDIuNTQ0LS42NDIuOTkydi4zODRjMCAuMjA1LjE1OS4zNDMuMzA4LjM0M3pNMS43NyAxMC41NDNjMC0uNTkyLS4yOTYtLjkzMS0uODE0LS45MzEtLjY4IDAtLjg1OS41Ny0uODU5Ljg3MiAwIC4zNTEuMjIyLjM5LjMxOC4zOS4xODUgMCAuMzEtLjE0OC4zMS0uMzY2IDAtLjA4NC4wMjYtLjE4MS4yMjQtLjE4MS4xNDIgMCAuMi4wMjQuMi4yNjcgMCAuMjM3LS4wNDMuMjYzLS4yMTMuMjYzLS4xNjQgMC0uMjg4LjE1Mi0uMjg4LjM1NCAwIC4yLjEyNS4zNS4yOTEuMzUuMjI1IDAgLjI3LjEwOC4yNy4yODN2LjA3NWMwIC4yOTQtLjA5Ny4zNS0uMjc3LjM1LS4yNDggMC0uMjY3LS4xNS0uMjY3LS4xOTcgMC0uMTc0LS4wOTgtLjM1LS4zMTctLjM1LS4xOTIgMC0uMzA3LjE0MS0uMzA3LjM3OCAwIC40My4zMTMuODg4Ljg5NS44ODguNTY0IDAgLjkwMS0uNC45MDEtMS4wN3YtLjA3NGMwLS4yNzQtLjA3NC0uNTAyLS4yMTQtLjY2Ni4wOTYtLjE2My4xNDgtLjM4LjE0OC0uNjM1eiIvPjwvZz48L3N2Zz4="
                            alt
                          />
                        </div>
                        <div
                          className="rdw-option-wrapper w_XM rdw-option-disabled"
                          title="Indent"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS43MTYgMy4yMTFIMTd2MS4xOTdINS43MTZ6TTAgLjAyaDE3djEuMTk3SDB6TTAgMTIuNzgzaDE3djEuMTk3SDB6TTUuNzE2IDkuNTkzSDE3djEuMTk3SDUuNzE2ek01LjcxNiA2LjQwMkgxN3YxLjE5N0g1LjcxNnpNLjE4NyA5LjQ5MUwyLjUyIDcgLjE4NyA0LjUwOXoiLz48L2c+PC9zdmc+"
                            alt
                          />
                        </div>
                        <div
                          className="rdw-option-wrapper w_XM rdw-option-disabled"
                          title="Outdent"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS4zOTYgMy4xOTNoMTAuNTczVjQuMzlINS4zOTZ6TS4wMzkuMDAzaDE1LjkzVjEuMkguMDM5ek0uMDM5IDEyLjc2NmgxNS45M3YxLjE5N0guMDM5ek01LjM5NiA5LjU3NWgxMC41NzN2MS4xOTdINS4zOTZ6TTUuMzk2IDYuMzg0aDEwLjU3M3YxLjE5N0g1LjM5NnpNMi4xODcgNC40OTFMMCA2Ljk4M2wyLjE4NyAyLjQ5MXoiLz48L2c+PC9zdmc+"
                            alt
                          />
                        </div>
                      </div>
                      <div
                        className="rdw-remove-wrapper"
                        aria-label="rdw-remove-control"
                      >
                        <div
                          className="rdw-option-wrapper w_XM"
                          title="Remove formating"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOC4xIDE0bDYuNC03LjJjLjYtLjcuNi0xLjgtLjEtMi41bC0yLjctMi43Yy0uMy0uNC0uOC0uNi0xLjMtLjZIOC42Yy0uNSAwLTEgLjItMS40LjZMLjUgOS4yYy0uNi43LS42IDEuOS4xIDIuNWwyLjcgMi43Yy4zLjQuOC42IDEuMy42SDE2di0xSDguMXptLTEuMy0uMXMwLS4xIDAgMGwtMi43LTIuN2MtLjQtLjQtLjQtLjkgMC0xLjNMNy41IDZoLTFsLTMgMy4zYy0uNi43LS42IDEuNy4xIDIuNEw1LjkgMTRINC42Yy0uMiAwLS40LS4xLS42LS4yTDEuMiAxMWMtLjMtLjMtLjMtLjggMC0xLjFMNC43IDZoMS44TDEwIDJoMUw3LjUgNmwzLjEgMy43LTMuNSA0Yy0uMS4xLS4yLjEtLjMuMnoiLz48L3N2Zz4="
                            alt
                          />
                        </div>
                      </div>
                      <div
                        className="rdw-history-wrapper w_XQ"
                        aria-label="rdw-history-control"
                      >
                        <div
                          className="rdw-option-wrapper w_XM rdw-option-disabled"
                          title="Undo"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTQuODc1YzIuNjcyIDAgNC44NDYtMi4xNDUgNC44NDYtNC43ODEgMC0yLjYzNy0yLjE3NC00Ljc4MS00Ljg0Ni00Ljc4MVY4LjVMMS42MTUgNC4yNSA3IDB2My4xODhjMy44NiAwIDcgMy4wOTggNyA2LjkwNlMxMC44NiAxNyA3IDE3cy03LTMuMDk4LTctNi45MDZoMi4xNTRjMCAyLjYzNiAyLjE3NCA0Ljc4MSA0Ljg0NiA0Ljc4MXoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
                            alt
                          />
                        </div>
                        <div
                          className="rdw-option-wrapper w_XM rdw-option-disabled"
                          title="Redo"
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNTA0IDEzLjk3N2E0LjQ5NyA0LjQ5NyAwIDAgMS00LjQ5Mi00LjQ5MiA0LjQ5NyA0LjQ5NyAwIDAgMSA0LjQ5Mi00LjQ5M3YyLjk5NWw0Ljk5LTMuOTkzTDYuNTA0IDB2Mi45OTVhNi40OTYgNi40OTYgMCAwIDAtNi40ODggNi40OWMwIDMuNTc4IDIuOTEgNi40OSA2LjQ4OCA2LjQ5YTYuNDk2IDYuNDk2IDAgMCAwIDYuNDg3LTYuNDloLTEuOTk2YTQuNDk3IDQuNDk3IDAgMCAxLTQuNDkxIDQuNDkyeiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                            alt
                          />
                        </div>
                      </div>
                      <div className="w_XQ">
                        <div className="w_kX" aria-describedby="popup-6">
                          <div className="w_XM" title="Emoji">
                            <img
                              className="w_XN"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjE1LjcyOSAyMi4wODIgMTcgMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5LjcwOCAyNS4xMDRjLTMuMDIxLTMuMDIyLTcuOTM3LTMuMDIyLTEwLjk1OCAwLTMuMDIxIDMuMDItMy4wMiA3LjkzNiAwIDEwLjk1OCAzLjAyMSAzLjAyIDcuOTM3IDMuMDIgMTAuOTU4LS4wMDEgMy4wMi0zLjAyMSAzLjAyLTcuOTM2IDAtMTAuOTU3em0tLjg0NSAxMC4xMTJhNi41NiA2LjU2IDAgMCAxLTkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAtOS4yNjcgNi41NiA2LjU2IDAgMCAxIDkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAgOS4yNjd6bS03LjUyNC02LjczYS45MDYuOTA2IDAgMSAxIDEuODExIDAgLjkwNi45MDYgMCAwIDEtMS44MTEgMHptNC4xMDYgMGEuOTA2LjkwNiAwIDEgMSAxLjgxMiAwIC45MDYuOTA2IDAgMCAxLTEuODEyIDB6bTIuMTQxIDMuNzA4Yy0uNTYxIDEuMjk4LTEuODc1IDIuMTM3LTMuMzQ4IDIuMTM3LTEuNTA1IDAtMi44MjctLjg0My0zLjM2OS0yLjE0N2EuNDM4LjQzOCAwIDAgMSAuODEtLjMzNmMuNDA1Ljk3NiAxLjQxIDEuNjA3IDIuNTU5IDEuNjA3IDEuMTIzIDAgMi4xMjEtLjYzMSAyLjU0NC0xLjYwOGEuNDM4LjQzOCAwIDAgMSAuODA0LjM0N3oiLz48L3N2Zz4="
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w_XO w_XF rdw-editor-main">
                      <div className="DraftEditor-root">
                        <div className="DraftEditor-editorContainer">
                          <div
                            aria-label="rdw-editor"
                            className="notranslate public-DraftEditor-content"
                            contentEditable="true"
                            role="textbox"
                            spellCheck="false"
                            style={{
                              outline: "none",
                              userSelect: "text",
                              whiteSpace: "pre-wrap",
                              overflowWrap: "break-word",
                            }}
                          >
                            <div data-contents="true">
                              <div
                                className
                                data-block="true"
                                data-editor="e68ke"
                                data-offset-key="5o7va-0-0"
                              >
                                <div
                                  data-offset-key="5o7va-0-0"
                                  className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"
                                >
                                  <span data-offset-key="5o7va-0-0">
                                    <br data-text="true" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w_vX w_v0 w_vY w_CX w_CZ">
                <div className="w_pW w_pX">
                  <label className="w_rI w_rS">Get inspired</label>
                </div>
                <div className="w_iL" />
                <div style={{ visibility: "visible" }}>
                  <div className="w_oL w_oN w_iM">
                    <img
                      className="w_oO"
                      src="https://wrld-se-prod.b-cdn.net/client/images/src/app/components/components/loader-area/41a4c6d2388bb2454ac6.gif"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="w_CX w_i0 w_CZ">
                <div>DISABLED</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w_hN w_hP TRIP_MAP">
          <div className="w_iN">
            <div className="w_BN">
              <img
                src="fonts/src_app_components_components_svgIcon_icons_customsprite-70fd46.svg#background-mapiV-usage"
                alt="custom/background-map"
                className="w_fu w_fB w_BO"
              />
              <div className="w_DN">
                <span className="w_DU w_DX">
                  The map will be displayed after entering locations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w_BG w_BK w_iw w_iS">
        <button className="w_ih w_in w_ic">
          <div className="w_ib">
            <img
              src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#mapaF-usage"
              alt="common/map"
              className="w_fu w_fx w_fM"
            />
          </div>
          <span className="w_ia" />
        </button>
      </div>
    </div>
  );
}

export default NewTrip;
