import styles from "./validate.module.css";
function Validate(props) {
  const error = props.error;
  return (
    error && (
      <div className={styles.MuiTooltipPopper}>
        <div className={styles.validation}>
          {error}
          <span className={styles.MuiTooltipArrow} />
        </div>
      </div>
    )
  );
}
export default Validate;
