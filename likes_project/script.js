var likeCount = document.getElementById("like-counter");
var currentCount = likeCount.innerText;
function like() {
  currentCount++;
  likeCount.innerText = currentCount;
}
