(function () {
  var e = window.location.pathname,
      t = decodeURIComponent(window.location.search),
      n = decodeURIComponent(window.location.pathname),
      o = document.querySelector(".menu ul li > a[href*='" + n + t + "']");o && o.classList.add("select"), e.match("106fblive") || e.match("105jrhighexam.html") || e.match("12y_edu.html") || e.match("hsapp.html") ? (document.querySelector(".senior").style.display = "none", document.querySelector(".university").style.display = "none") : e.match("my_test_edu.html") || e.match("gsatanalysis") ? (document.querySelector(".junior").style.display = "none", document.querySelector(".university").style.display = "none") : e.match("specify_exam_edu.html") && (document.querySelector(".junior").style.display = "none", document.querySelector(".senior").style.display = "none");
})();