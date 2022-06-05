import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import Create from "./create";
import FormLogout from "./formLogout";
import styles from "./header.module.css";
export default function Header() {
  const { user } = useIsLogin();
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <div>
            <Link to="/">
              <img alt="Worldee logo" src="images/logo/logo-black-3.png" />
            </Link>
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
          <Link to="/">
            <div className={styles.menuIcon}>
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#earth_fullY-usage"
                alt="common/earth_full"
              />
            </div>
            <span>Home</span>
          </Link>
          <Create />
          <div className={styles.menuButton} aria-describedby="popup-3">
            <button>
              <div className={styles.menuIcon}>
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#heart-bold_emptyab-usage"
                  alt="common/heart-bold_empty"
                />
              </div>
              <span>Notifications</span>
            </button>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileList}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/profile">
                <div className={styles.profileIcon}>
                  <img
                    className="w_km"
                    alt="profile"
                    src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                  />
                </div>
                <div>
                  <span>{user.username}</span>
                </div>
              </Link>
              <FormLogout />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
