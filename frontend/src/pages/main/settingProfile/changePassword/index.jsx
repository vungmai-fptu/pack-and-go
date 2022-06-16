import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./changePassword.module.css";
function ChangePassword() {
  return (
    <div className={styles.accountPageContent}>
      <div className={styles.titleHeader}>
        <h1> My Account</h1>
        <div className="spinner-master">
          <input type="checkbox" id="spinner-form" />
          <label htmlFor="spinner-form" className="spinner-spin">
            <span className="spinner diagonal part-1" />
            <span className="spinner horizontal" />
            <span className="spinner diagonal part-2" />
          </label>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <form
            action="/account/change-password"
            method="post"
            id={styles.frmChangePasswordForm}
          >
            <div className={styles.row}>
              <div className={styles.boxInput}>
                <label for="frm-changePasswordForm-heslo2">
                  New password (8 characters minimum)
                </label>
                <div className={styles.inputAnother}>
                  <span>
                    <img
                      src="https://www.worldee.com/images/asideheslo.svg"
                      alt="password"
                    />
                  </span>
                  <input
                    type="password"
                    name="heslo2"
                    placeholder="New password"
                    id={styles.frmChangePasswordFormHeslo2}
                  />
                </div>
              </div>
              <div className={styles.boxInput}>
                <label for="frm-changePasswordForm-heslo3">
                  Password confirmation
                </label>
                <div className={styles.inputAnother}>
                  <span>
                    <img
                      src="https://www.worldee.com/images/asideheslo.svg"
                      alt="password"
                    />
                  </span>
                  <input
                    type="password"
                    name="heslo3"
                    placeholder="Confirm your password"
                    id={styles.frmChangePasswordFormHeslo3}
                  />
                </div>
              </div>
            </div>

            <button className={styles.button} type="submit" name="button">
              <span>Save password</span>
            </button>
            <input type="hidden" name="_do" value="changePasswordForm-submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
