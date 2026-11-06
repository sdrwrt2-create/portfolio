const works = document.querySelectorAll("#works img");
const closeBtn = document.querySelector("#modal span")
const modal = document.querySelector("#modal");


works.forEach(el => el.addEventListener("click", () => {
  const src = el.dataset.src;
  //console.log(src)
  const iframe = modal.querySelector("iframe");
  iframe.src = `${src}${src.includes("?") ? "&" : "?"}autoplay=1`;
  modal.style.display = "block";
}))

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  const iframe = modal.querySelector("iframe");
  if(iframe){
    iframe.src = "";
  }
  const img = modal.querySelector("img")
  if(img){
    img.src = "";
  }
})

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
    const iframe = modal.querySelector("iframe");
    if(iframe){
      iframe.src = "";
    }
    const img = modal.querySelector("img")
    if(img){
      img.src = "";
    }
  }
})
