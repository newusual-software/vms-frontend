import jwt_decode from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      // Decode the token
      const decodedToken = jwt_decode(token);

      // Check if the token has expired
      const currentTime = Date.now() / 1000; // Convert current time to seconds
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        // Token has expired, return false
        return false;
      }

      // Token is valid, return true
      return true;
    } catch (error) {
      console.log(error);
      // Error occurred during token decoding, return false
      return false;
    }
  }
  console.log("token does not exist");
  // Token doesn't exist, return false
  return false;
};
