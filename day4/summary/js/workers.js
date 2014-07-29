(function () {

var shootButton = document.getElementById("says-shoot");
var resultsPlaceholder = document.getElementById("results");

var selections = [
  "Rock",
  "Paper",
  "Scissors"
];

var saysShoot = function () {
  var randomHand = selections[Math.floor(Math.random() * selections.length)];
  resultsPlaceholder.classList.add('highlight');
  resultsPlaceholder.innerHTML = randomHand;
};

shootButton.onclick = function (evt) {
  evt.preventDefault();
  saysShoot();
};

}());