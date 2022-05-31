const validateInput = (e, user, error, setError) => {
  let { name, value } = e.target;
  setError((prev) => {
    const stateObj = { ...prev, [name]: "" };
    switch (name) {
      case "email":
        if (!value) {
          stateObj[name] = "Please enter Email.";
        }
        break;
      case "username":
        if (!value) {
          stateObj[name] = "Please enter Username.";
        }
        break;
      case "usernameOrEmail":
        if (!value) {
          stateObj[name] = "Please enter email Or UserName.";
        }
        break;
      case "forgotPassword":
        if (!value) {
          stateObj[name] = "Please enter forgotten Password.";
        }
        break;
      case "password":
        if (!value) {
          stateObj[name] = "Please enter Password.";
        } else if (user.confirmPassword && value !== user.confirmPassword) {
          stateObj["confirmPassword"] =
            "Password and Confirm Password does not match.";
        } else {
          stateObj["confirmPassword"] = user.confirmPassword
            ? ""
            : error.confirmPassword;
        }
        break;
      case "confirmPassword":
        if (!value) {
          stateObj[name] = "Please enter Confirm Password.";
        } else if (user.password && value !== user.password) {
          stateObj[name] = "Password and Confirm Password does not match.";
        }
        break;
      default:
        break;
    }
    return stateObj;
  });
};
export default validateInput;
