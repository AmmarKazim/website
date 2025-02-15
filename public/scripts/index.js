jQuery(document).ready(() => {
  // fading-in the page when rendering
  $("body").fadeIn(1000);
  $("body").css("display", "flex");

  addYearInFooter();
});

const addYearInFooter = () => {
  const yearSpan = $("footer span#year");
  const year = new Date().getFullYear();
  yearSpan.text(year);
};
