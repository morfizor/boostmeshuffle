document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var top = document.getElementById("top").value;
    var topArray = top.split(" ");

    var jg = document.getElementById("jg").value;
    var jgArray = jg.split(" ");

    var mid = document.getElementById("mid").value;
    var midArray = mid.split(" ");

    var support = document.getElementById("support").value;
    var supportArray = support.split(" ");

    var adc = document.getElementById("adc").value;
    var adcArray = adc.split(" ");

    ////////////FORM VALIDATION////////////

    if (
      topArray.length === 2 &&
      topArray[0].length > 0 &&
      topArray[1].length > 0 &&
      jgArray.length === 2 &&
      jgArray[0].length > 0 &&
      jgArray[1].length > 0 &&
      midArray.length === 2 &&
      midArray[0].length > 0 &&
      midArray[1].length > 0 &&
      supportArray.length === 2 &&
      supportArray[0].length > 0 &&
      supportArray[1].length > 0 &&
      adcArray.length === 2 &&
      adcArray[0].length > 0 &&
      adcArray[1].length > 0
    ) {
      ////////////TOP JÁTÉKOS KIOSZTÁS////////////
      var randomTopIndex1 = Math.floor(Math.random() * topArray.length);
      var randomTopIndex2;
      do {
        randomTopIndex2 = Math.floor(Math.random() * topArray.length);
      } while (randomTopIndex2 === randomTopIndex1);
      ////////////JG JÁTÉKOS KIOSZTÁS////////////
      var randomJgIndex1 = Math.floor(Math.random() * jgArray.length);
      var randomJgIndex2;
      do {
        randomJgIndex2 = Math.floor(Math.random() * jgArray.length);
      } while (randomJgIndex2 === randomJgIndex1);
      ////////////MID JÁTÉKOS KIOSZTÁS////////////
      var randomMidIndex1 = Math.floor(Math.random() * midArray.length);
      var randomMidIndex2;
      do {
        randomMidIndex2 = Math.floor(Math.random() * midArray.length);
      } while (randomMidIndex2 === randomMidIndex1);
      ////////////SUPPORT JÁTÉKOS KIOSZTÁS////////////
      var randomSupportIndex1 = Math.floor(Math.random() * supportArray.length);
      var randomSupportIndex2;
      do {
        randomSupportIndex2 = Math.floor(Math.random() * supportArray.length);
      } while (randomSupportIndex2 === randomSupportIndex1);
      ////////////ADC JÁTÉKOS KIOSZTÁS////////////
      var randomAdcIndex1 = Math.floor(Math.random() * adcArray.length);
      var randomAdcIndex2;
      do {
        randomAdcIndex2 = Math.floor(Math.random() * adcArray.length);
      } while (randomAdcIndex2 === randomAdcIndex1);

      var top1 = topArray[randomTopIndex1];
      var top2 = topArray[randomTopIndex2];
      var jg1 = jgArray[randomJgIndex1];
      var jg2 = jgArray[randomJgIndex2];
      var mid1 = midArray[randomMidIndex1];
      var mid2 = midArray[randomMidIndex2];
      var support1 = supportArray[randomSupportIndex1];
      var support2 = supportArray[randomSupportIndex2];
      var adc1 = adcArray[randomAdcIndex1];
      var adc2 = adcArray[randomAdcIndex2];
      //* console.log("TEAM1", top1, jg1, mid1, support1, adc1);
      //* console.log("TEAM2", top2, jg2, mid2, support2, adc2);

      var topPlayer1 = document.createElement("p");
      topPlayer1.innerHTML = top1;
      var topPlayer2 = document.createElement("p");
      topPlayer2.innerHTML = top2;

      var jgPlayer1 = document.createElement("p");
      jgPlayer1.innerHTML = jg1;
      var jgPlayer2 = document.createElement("p");
      jgPlayer2.innerHTML = jg2;

      var midPlayer1 = document.createElement("p");
      midPlayer1.innerHTML = mid1;
      var midPlayer2 = document.createElement("p");
      midPlayer2.innerHTML = mid2;

      var adcPlayer1 = document.createElement("p");
      adcPlayer1.innerHTML = adc1;
      var adcPlayer2 = document.createElement("p");
      adcPlayer2.innerHTML = adc2;

      var supportPlayer1 = document.createElement("p");
      supportPlayer1.innerHTML = support1;
      var supportPlayer2 = document.createElement("p");
      supportPlayer2.innerHTML = support2;

      document.querySelector(".top").prepend(topPlayer1, topPlayer2);
      document.querySelector(".mid").prepend(midPlayer1, midPlayer2);
      document.querySelector(".jg").prepend(jgPlayer1, jgPlayer2);
      document.querySelector(".adc").prepend(adcPlayer1, adcPlayer2);
      document
        .querySelector(".support")
        .prepend(supportPlayer1, supportPlayer2);
    } else {
      alert("Elbasztadaneveket");
    }
  });
});

//* reset gomb megnyomásával minden appended childot töröl, kivéve az img tageset  *//
form.addEventListener("reset", function () {
  var top = document.querySelector(".top");
  var jg = document.querySelector(".jg");
  var mid = document.querySelector(".mid");
  var adc = document.querySelector(".adc");
  var support = document.querySelector(".support");

  removeNonImageChildren(top);
  removeNonImageChildren(jg);
  removeNonImageChildren(mid);
  removeNonImageChildren(adc);
  removeNonImageChildren(support);
});

function removeNonImageChildren(parent) {
  for (var i = parent.children.length - 1; i >= 0; i--) {
    var child = parent.children[i];

    if (child.tagName !== "IMG") {
      parent.removeChild(child);
    }
  }
}
