var cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function(e){
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


var reveals = document.querySelectorAll(".reveal");

var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold: 0.15 });

reveals.forEach(function(item){
  observer.observe(item);
});
