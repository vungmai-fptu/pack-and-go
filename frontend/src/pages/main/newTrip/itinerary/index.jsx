import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "../trip.module.css";
export default function Itinerary() {
  return (
    <div className={styles.iTin}>
      <div className={styles.iTin} style={{ position: "relative" }}>
        <div className={styles.tripItin}>
          <div style={{ padding: "32px 32px 0" }}>
            <label className="w_rI w_rS w_UW">Trip Itinerary</label>
            <input type="text" placeholder="Write a decription to the trip" />
          </div>
          <div className={styles.allDay}>
            <div className={styles.leftAdd} />
            <div className={styles.day}>
              <div className={styles.containerDay}>
                <div className={styles.addADay}>
                  <div className={styles.aDay}>
                    <div className={styles.addDIcon}>
                      <IoMdAddCircleOutline />
                    </div>
                    <div>
                      <span>Add a Day</span>
                    </div>
                  </div>
                </div>
              </div>
              long
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="w_adf">
              <div style={{ visibility: "visible" }}>
                <div className="w_ac0">
                  <div className="w_acZ">
                    <img
                      src="/client/sprites/src_app_components_components_svgIcon_icons_commonsprite-762d5c.svg#arrowj-usage"
                      alt="common/arrow"
                      className="w_f w_m w_B"
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  </div>
                  <div className="w_ac1">Day 1</div>
                  <div className="w_ac3">
                    <div className="w_ac7">
                      <div
                        className="w_alK w_alR"
                        width="379.96875"
                        height={0}
                      />
                    </div>
                    <div className="w_ac9">
                      <div title="Description" className="w_bs">
                        <div>
                          <img
                            src="/client/sprites/src_app_components_components_svgIcon_icons_commonsprite-762d5c.svg#noteaT-usage"
                            alt="common/note"
                            className="w_f w_l w_h w_ac- w_B"
                          />
                        </div>
                      </div>
                      <div className="w_bs">
                        <div>
                          <img
                            src="/client/sprites/src_app_components_components_svgIcon_icons_commonsprite-762d5c.svg#sortcf-usage"
                            alt="common/sort"
                            className="w_f w_l w_h w_ac- w_ac_ w_B"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className>
                  <div className="w_adh">
                    <div className="w_adm w_ado">
                      <div
                        data-rbd-droppable-id="STOPS-2"
                        data-rbd-droppable-context-id={1}
                        className
                      >
                        <div className="w_add" />
                        <div className="w_adr">
                          <div className="w_adp">
                            <div className="w_amZ w_ada">
                              <div className="w_w1 w_w2 w_am0">
                                <div className="w_w4 w_w5">
                                  <img
                                    src="/client/sprites/src_app_components_components_svgIcon_icons_common_place_mark_emptysprite-49a3ef.svg#place_mark_empty_dark_graycD-usage"
                                    alt="common/place_mark_empty/place_mark_empty_dark_gray"
                                    className="w_f w_k "
                                  />
                                </div>
                                <div className="w_w8">
                                  <div className="w_am1">
                                    <div className="w_am2">
                                      <div className="w_aa6 w_aa_ w_aa-">
                                        <div
                                          tabIndex={1}
                                          className="comboboxSmall__control w_aaZ"
                                        >
                                          <div className="comboboxSmall__value-container w_aa0">
                                            <input
                                              type="text"
                                              placeholder="Enter the place you want to visit"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="w_e- w_aa7"
                                          aria-describedby="popup-65"
                                        >
                                          <div className="w_ik w_ic w_aa9">
                                            <img
                                              src="/client/sprites/src_app_components_components_svgIcon_icons_commonsprite-762d5c.svg#mapaI-usage"
                                              alt="common/map"
                                              className="w_f w_l w_aa8 w_y"
                                            />
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
                      </div>
                    </div>
                  </div>
                  <div className="w_adh w_acS">
                    <div className="w_w1 w_w3 w_acT">
                      <div className="w_w4 w_w5">
                        <img
                          src="/client/sprites/src_app_components_components_svgIcon_icons_common_plus_in_circlesprite-ac0f5d.svg#plus_in_circle_activecP-usage"
                          alt="common/plus_in_circle/plus_in_circle_active"
                          className="w_f w_l w_acV"
                        />
                      </div>
                      <div className="w_w8">
                        <span className="w_acU">Add a Day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */
}
{
  /* <div className="w_oz w_UX">
  <div className="w_i- w_UY">
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
</div>; */
}
