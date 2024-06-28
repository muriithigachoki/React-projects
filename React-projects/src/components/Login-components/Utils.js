export const login = (formData) => {
  if (
    formData.email === "chela@gmail.com" &&
    formData.password === "eliud123"
  ) {
    alert("login successful");
  } else {
    alert("invalid credentials");
  }
};
