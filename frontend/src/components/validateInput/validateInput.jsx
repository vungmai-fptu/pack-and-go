const validateInput = (e, user, error, setError) => {
  let { name, value } = e.target;
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  setError((prev) => {
    const stateObj = { ...prev, [name]: "" };
    switch (name) {
      case "email":
        if (!value) {
          stateObj[name] = "Please enter Email.";
        } else if (!user.email.match(mailFormat)) {
          stateObj[name] = "Invalid email address (@).";
        }
        break;
      case "username":
        if (!value) {
          stateObj[name] = "Please enter Username.";
        } else if (user.username.length < 4) {
          stateObj[name] = "Username must contain at least 5 characters.";
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
        } else if (user.password.length < 7) {
          stateObj[name] = "Password must contain at least 8 characters.";
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
