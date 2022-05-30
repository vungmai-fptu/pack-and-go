import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.col}>
            <a href="/" className={styles.footerLogo}>
              <img alt="Worldee logo" src="images/3bl.png" />
            </a>
          </div>
          <div className={styles.col}>
            <h2>Company</h2>
            <a href="/homepage/about">
              <div>
                <span>About Us</span>
              </div>
            </a>
            <a href="https://blog.worldee.com/">
              <div>
                <span>Blog</span>
              </div>
            </a>
            <a href="/homepage/contact">
              <div>
                <span>Contact</span>
              </div>
            </a>
          </div>
          <div className={styles.col}>
            <h2>Useful Links</h2>
            <a href="/doc/privacy-policy">
              <div>
                <span>Privacy Policy</span>
              </div>
            </a>
            <a href="/doc/terms">
              <div>
                <span>Terms &amp; Conditions</span>
              </div>
            </a>
            <a href="/page/verified-itineraries">
              <div>
                <span>Verified Itineraries</span>
              </div>
            </a>
            <a href="/page/community">
              <div>
                <span>Community</span>
              </div>
            </a>
            <a href="/page/ambassador">
              <div>
                <span>Ambassadors</span>
              </div>
            </a>
            <a href="/page/buddy">
              <div>
                <span>Travel Buddies</span>
              </div>
            </a>
          </div>
          <div className={styles.col}>
            <h2>Find us at</h2>
            <a
              href="/"
              rel="noopener"
              target="_blank"
              className={styles.socialIcons}
            >
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-fb2bT-usage"
                alt="common/socials-fb2"
              />
            </a>
            <a
              href="/"
              rel="noopener"
              target="_blank"
              className={styles.socialIcons}
            >
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-instagrambV-usage"
                alt="common/socials-instagram"
              />
            </a>
            <a
              href="/"
              rel="noopener"
              target="_blank"
              className={styles.socialIcons}
            >
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-pinterestbU-usage"
                alt="common/socials-pinterest"
              />
            </a>
          </div>
          <div className={styles.col}>
            <h2>Partners</h2>
            <a
              href="/"
              rel="noopener"
              className={styles.socialIcons}
              target="_blank"
            >
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#logo_booking_smallax-usage"
                alt="common/logo_booking_small"
              />
            </a>
            <a
              href="/"
              rel="noopener"
              className={styles.socialIcons}
              target="_blank"
            >
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#logo_kiwi_smallaB-usage"
                alt="common/logo_kiwi_small"
              />
            </a>
            <a
              href="/"
              rel="noopener"
              className={styles.socialIcons}
              target="_blank"
            >
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#logo_rentalcars_smallaE-usage"
                alt="common/logo_rentalcars_small"
              />
            </a>
            <a
              href="/"
              rel="noopener"
              className={styles.socialIcons}
              target="_blank"
            >
              <img
                src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#logo_tripadvisor_smallaD-usage"
                alt="common/logo_tripadvisor_small"
              />
            </a>
          </div>
        </div>
      </div>
      ;
    </footer>
  );
}
