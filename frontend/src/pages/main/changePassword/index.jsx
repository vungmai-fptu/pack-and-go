import classNames from "classnames";
import { Component } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./changePassword.module.css";
class changePassword extends Component {

    render() {
        return (
            <div id={styles.app}>
                <div id="snippet--flashes" />
                <div className={styles.pageContent}>
                    <div className={styles.accountPage}>
                        <div className={styles.container}>
                            <div className={styles.flexAccount}>
                                <aside className={styles.menuAside}>
                                    <div className={styles.bcg} />
                                    <ul>
                                        <li>
                                            <a href="/setting">
                                                <span className={styles.barOfSpan}>
                                                    <img
                                                        src="https://www.worldee.com/images/asideucet.svg"
                                                        alt="Můj účet"
                                                    />
                                                </span>
                                                <label> My account </label>{" "}
                                            </a>
                                        </li>
                                        <li i className={styles.active}>
                                            <a
                                                className={styles.barOfa}
                                                href="/changePassword"
                                            >
                                                <span className={styles.barOfSpan}>
                                                    <img
                                                        src="https://www.worldee.com/images/asideheslo.svg"
                                                        alt="Změna hesla"
                                                    />
                                                </span>
                                                <label> Password change</label>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a className={styles.barOfa} href="/sign/out">
                                                <span className={styles.barOfSpan}>
                                                    <img
                                                        src="https://www.worldee.com/images/asideodhlasitse.svg"
                                                        alt="Odhlásit se"
                                                    />
                                                </span>{" "}
                                                <label>Log out</label>{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </aside>
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
                                            <form action="/account/change-password" method="post" id={styles.frmChangePasswordForm}>
                                            <div className={styles.row}>
                                                    <div className={styles.boxInput}>
                                                        <label for="frm-changePasswordForm-heslo2">New password (8 characters minimum)</label>
                                                        <div className={styles.inputAnother}>
                                                            <span><img src="https://www.worldee.com/images/asideheslo.svg" alt="password" /></span>
                                                            <input type="password" name="heslo2" placeholder="New password" id={styles.frmChangePasswordFormHeslo2}/>
                                                        </div>
                                                    </div>
                                                    <div className={styles.boxInput}>
                                                        <label for="frm-changePasswordForm-heslo3">Password confirmation</label>
                                                        <div className={styles.inputAnother}>
                                                            <span><img src="https://www.worldee.com/images/asideheslo.svg" alt="password"/></span>
                                                            <input type="password" name="heslo3" placeholder="Confirm your password" id={styles.frmChangePasswordFormHeslo3} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className={styles.button} type="submit" name="button"><span>Save password</span></button>
                                                <input type="hidden" name="_do" value="changePasswordForm-submit"/>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modalHandler}>
                        <div className={styles.modalContent}>
                            <h4> Confirm </h4>
                            <a className={styles.zavritOkno} href="#">
                                <img
                                    src="https://www.worldee.com/images/close.svg"
                                    alt="Close"
                                />
                            </a>
                            <hr />
                            <p> Are you sure you want to delete your account? </p>
                            <a className={styles.smazat} href="#">
                                {" "}
                                Erase{" "}
                            </a>
                            <a className={styles.button} href="#">
                                Cancel{" "}
                            </a>
                        </div>
                    </div>
                    <div className={styles.containerEdWrap}>
                        <div id={styles.edWrap}>
                            <div id={styles.editor} />
                            <div className={styles.buttony}>
                                <div className={styles.rotateButtons}>
                                    <button
                                        data-tool="Rotate left"
                                        type="button"
                                        name="button"
                                        data-deg={90}
                                        className={styles.croppieRotate}
                                    >
                                        <img
                                            src="https://www.worldee.com/images/rotate-left.svg"
                                            alt="arrow"
                                        />
                                    </button>
                                    <button
                                        data-tool="Rotate left"
                                        type="button"
                                        name="button"
                                        data-deg={-90}
                                        className={styles.croppieRotate}
                                    >
                                        <img
                                            src="https://www.worldee.com/images/rotate-right.svg"
                                            alt="arrow"
                                        />
                                    </button>
                                </div>
                                <button id="editor-cancel" className={styles.croppieRotate}>
                                    <span>Cancel</span>
                                </button>
                                <button id="editor-save" className={styles.button}>
                                    crop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default changePassword;
