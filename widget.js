const progress = document.querySelector(".progress-done");
let subGoal;
let subCount = 0;

document.getElementById("sub-count").innerHTML = subCount;

window.addEventListener("onWidgetLoad", function (obj) {
  const fieldData = obj.detail.fieldData;
  subGoal = fieldData.subGoal;
});

window.addEventListener("onEventReceived", (obj) => {
  const listener = obj.detail.listener;
  const data = obj.detail.event;

  if (listener !== 'subscriber-latest' || data.type !== 'subscriber' || data.bulkGifted == true) {
    return;
  }

  subCount++;
  document.getElementById("sub-count").innerHTML = subCount;

  const subPercent = (subCount / subGoal) * 100
  const cssWidth = subPercent + "%";
  if (subPercent <= 5) {
    progress.style.height = "40%"
  } else if (subPercent >= 5 && subPercent <= 10) {
    progress.style.height = "75%"
  } else {
    progress.style.height = "100%"
  }
  progress.style.width = cssWidth;
});
