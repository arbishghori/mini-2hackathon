window.addEventListener('load', function() {
    var loaderFrame = document.getElementById('loader-frame');
    loaderFrame.style.display = 'none';
  });

  function redirectToIndex(){
    window.location.href="index.html";
  }
  setTimeout(redirectToIndex,5000);
