let showMoreBtn = $("#showMoreBtn");
let showLessBtn = $("#showLessBtn");
let collapsibleSection = $(".collapsible-section");

function toggleCollapsibleSection() {
  collapsibleSection.toggleClass("open");
}
showMoreBtn.on("click", toggleCollapsibleSection);
showLessBtn.on("click", toggleCollapsibleSection);

$(".item").on("mouseover", function (event) {
  $(this).addClass("active");
});
$(".item").on("mouseout", function (event) {
  $(this).removeClass("active");
});
