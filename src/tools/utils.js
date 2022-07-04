export const goto = (element) => {
  document.getElementById(element).scrollIntoView({ behavior: "smooth" });
};
