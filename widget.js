const $progress = document.querySelector(".progress-done");
let subGoal;
let subCount = 0;

const updateSubcount = (subCount) => {
  document.getElementById("sub-count").innerHTML = subCount;
}

const updateStyles = (subCount, subGoal) => {
  const subPercent = (subCount / subGoal) * 100;

  $progress.style.height =
    subPercent <= 5
      ? "40%"
      : subPercent >= 5 && subPercent <= 10
      ? "75%"
      : "100%";
  $progress.style.width = subPercent + "%";
};

window.addEventListener("onWidgetLoad", function (obj) {
  subGoal = obj.detail.fieldData.subGoal;
});

window.addEventListener("onEventReceived", (obj) => {
  const listener = obj.detail.listener;
  const data = obj.detail.event;

  if (
    listener !== "subscriber-latest" ||
    data.type !== "subscriber" ||
    data.bulkGifted === true
  ) {
    return;
  }

  subCount++;
  updateSubcount(subCount);
  updateStyles(subCount, subGoal);
});
