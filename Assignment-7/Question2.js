//Give an example of using multiple callback functions in a single function in JavaScript

const registerUser = () => {
  console.log("User is Registered");
};

const login = () => {
  console.log("User is Logged In");
};

const showProfile = () => {
  console.log("Redirecting to Profile");
};

const signToken = () => {
  console.log("token is signed");
};

const verifyToken = () => {
  console.log("token is verified");
};

const applicationOrderHandler = (
  registerUser,
  login,
  showProfile,
  signToken,
  verifyToken
) => {
  if (!userRegistered) {
    registerUser();
    if (!userLoggedIn) {
      login();
      if (userAuthenticated) {
        signToken();
        verifyToken();
        if (tokenVerified) {
          showProfile();
        } else {
          console.log("Not a valid Token");
        }
      } else {
        console.log("Wrong Information entered by user");
      }
    }
  }
};
