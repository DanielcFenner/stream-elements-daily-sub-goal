const progress = document.querySelector(".progress-done");
let subGoal;
let subCount = 0;

window.addEventListener("onWidgetLoad", function (obj) {
  const fieldData = obj.detail.fieldData;
  subGoal = fieldData.subGoal;
});

document.getElementById("sub-count").innerHTML = subCount;

const $testDiv = document.querySelector('#my-test-div');

window.addEventListener("onEventReceived", (obj) => {
  const listener = obj.detail.listener;
  const data = obj.detail.event;

  if (listener !== 'subscriber-latest' || data.type !== 'subscriber') {
    return;
  }

  subCount++;
  document.getElementById("sub-count").innerHTML = subCount;

  subPercent = (subCount / subGoal) * 100
  cssWidth = subPercent + "%";
  if (subPercent <= 5) {
    progress.style.height = "40%"
  } else if (subPercent >= 5 && subPercent <= 10) {
    progress.style.height = "75%"
  } else {
    progress.style.height = "100%"
  }
  progress.style.width = cssWidth;
});
