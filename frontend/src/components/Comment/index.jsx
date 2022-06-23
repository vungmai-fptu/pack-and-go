import React from "react";
import { Link } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import styles from "./comment.module.css";

function Comment() {
  return (
    <div className={styles.container}>
      {/* <div>
        <div>
          <div>
            <div>
              <div className="w_aby">
                <div className="w_hm">
                  <div className="w_bo">
                    <a href="/son">img</a>
                  </div>
                </div>
              </div>
              <div className="w_abz">
                <div className="w_abA">
                  <a href="/son" className="w_tU w_abB">
                    <span className="w_abC">
                      <span className="w_abD">Sơn Lê</span>
                      <span className="w_abE">06/03/2022, 22:26:42</span>
                    </span>
                  </a>
                  <div className="w_abF">test comment</div>
                </div>
                <div className="w_abG">
                  <button className="w_d8 w_ec w_abH">
                    <span className="w_dZ">Reply</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w_abx w_abK">
              <div className="w_aby">
                <div className="w_hm">
                  <div title="Long Trần" className="w_bo">
                    <div style={{ zIndex: 1 }}>
                      <a href="/longpc" className="w_tU w_hn w_hv">
                        img
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w_abz">
                <div className="w_abA">
                  <a href="/longpc" className="w_tU w_abB">
                    <span className="w_abC">
                      <span className="w_abD">Long Trần</span>
                      <span className="w_abE">06/23/2022, 20:23:25</span>
                    </span>
                  </a>
                  <div className="w_abF">test comment tiếp</div>
                </div>
                <div className="w_abG">
                  <button className="w_d8 w_ec w_abH">
                    <span className="w_dZ">Reply</span>
                  </button>
                  <button className="w_d8 w_ec w_abH">
                    <span className="w_dZ">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.formComment}>
        <div className={styles.comment}>
          <Link to="/">
            <img
              alt="profile"
              src="https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
            />
          </Link>
        </div>
        <div className={styles.comment_box}>
          <input type="text" placeholder="Enter comment..." />
          <button disabled>
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
