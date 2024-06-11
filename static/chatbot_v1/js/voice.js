// 음성인식 버튼 클릭 시 active
const voiceButton = document.querySelector(".voice-button");
const defaultIcon = voiceButton.querySelector(".default-icon");
const activeIcon = voiceButton.querySelector(".active-icon");
voiceButton.addEventListener("click", function () {
  voiceButton.classList.toggle("active");
  if (voiceButton.classList.contains("active")) {
    defaultIcon.style.display = "none";
    activeIcon.style.display = "block";
  } else {
    defaultIcon.style.display = "block";
    activeIcon.style.display = "none";
  }
});
