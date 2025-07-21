let no_btn = document.querySelector(".no");
let yes_btn= document.querySelector(".yes");


no_btn.addEventListener("mouseover", function() {
  let rowValue = Math.floor(Math.random() * 8) + 1;
  let columnValue = Math.floor(Math.random() * 8) + 1;

  if (rowValue !== 4 && columnValue !== 3) {
    no_btn.style.gridRow = `${rowValue}/${rowValue + 1}`;
    no_btn.style.gridColumn = `${columnValue}/${columnValue + 1}`;
  }
})



no_btn.addEventListener("click", function() {
  let rowValue = Math.floor(Math.random() * 8) + 1;
  let columnValue = Math.floor(Math.random() * 8) + 1;

  if (rowValue !== 4 && columnValue !== 3) {
    no_btn.style.gridRow = `${rowValue}/${rowValue + 1}`;
    no_btn.style.gridColumn = `${columnValue}/${columnValue + 1}`;
  }
})


yes_btn.addEventListener("click", function() {
    alert("I LOVE YOU TOO BABE❤️");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
})


