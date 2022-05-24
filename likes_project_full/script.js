function like(user) {
  var likeCount = 0;
  var currentCount = 0;
  likeCount = document.getElementById(user);
  currentCount = likeCount.innerText;
  currentCount++;
  likeCount.innerText = currentCount;
}
