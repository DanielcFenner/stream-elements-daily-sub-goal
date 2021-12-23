const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';

console.log("its working")