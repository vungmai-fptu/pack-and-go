import { useIsLogin } from "../../hooks/useIsLogin";
import styles from "./header.module.css";
export default function Header() {
  const { isLogin, user } = useIsLogin();
  console.log("🚀 ~ file: index.jsx ~ line 5 ~ Header ~ isLogin", isLogin);
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <div>
            <a href="/">
              <img alt="Worldee logo" src="images/3bl.png" />
            </a>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.search} aria-describedby="popup-1">
            <div className={styles.searchAll}>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Search" />
              </div>
              <div className={styles.searchIcon}>
                <button>
                  <div>
                    <img
                      src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#search-inputbH-usage"
                      alt="common/search-input"
                    />
                  </div>
                  <span />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.grow} />
          <a href="/explore/feed">
            <div className={styles.menuIcon}>
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#earth_fullY-usage"
                alt="common/earth_full"
              />
            </div>
            <span>
              <span>Home</span>
            </span>
          </a>
          <div className={styles.menuButton} aria-describedby="popup-2">
            <button>
              <div className={styles.menuIcon}>
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#place-add-bold_emptybd-usage"
                  alt="common/place-add-bold_empty"
                />
              </div>
              <span>
                <span>Create</span>
              </span>
            </button>
          </div>
          <div className={styles.menuButton} aria-describedby="popup-3">
            <button>
              <div className={styles.menuIcon}>
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#heart-bold_emptyab-usage"
                  alt="common/heart-bold_empty"
                />
              </div>
              <span>
                <span>Notifications</span>
              </span>
            </button>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileList}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <a href="/longpc">
                <div className={styles.profileIcon}>
                  <img
                    className="w_km"
                    alt="profile"
                    src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                  />
                </div>
                <div>
                  <span>{user.taiKhoan}</span>
                </div>
              </a>
              <div aria-describedby="popup-4">
                <button>
                  <div className={styles.profileIcon}>
                    <div className={styles.dropdown}>
                      <img
                        src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#arrowa-usage"
                        alt="common/arrow"
                      />
                    </div>
                  </div>
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
