const layoutSwitch = document.querySelector("#layout_switch");
const testLayout = document.querySelector("#testLayout");
const body = document.body;

layoutSwitch.querySelectorAll("button")[0].addEventListener("click", function () {
  testLayout.classList.remove("layout-0", "layout-1");
  body.classList.add("mobile");
});

layoutSwitch.querySelectorAll("button")[1].addEventListener("click", function () {
  testLayout.classList.remove("layout-1");
  body.classList.remove("mobile");
  testLayout.classList.add("layout-0");
});

layoutSwitch.querySelectorAll("button")[2].addEventListener("click", function () {
  testLayout.classList.remove("layout-0");
  body.classList.remove("mobile");
  testLayout.classList.add("layout-1");
});
