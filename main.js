function toggleContent(showBtnId, closeBtnId, contentId) {
  var showBtn = document.getElementById(showBtnId);
  var closeBtn = document.getElementById(closeBtnId);
  var content = document.getElementById(contentId);

  if (content.style.display === "none") {
    content.style.display = "block";
    showBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
  } else {
    content.style.display = "none";
    showBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
  }
}

function scrollToTop() {
    const kotakBlibliElement = document.querySelector('.kotakblibli');
    if (kotakBlibliElement) {
      kotakBlibliElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  