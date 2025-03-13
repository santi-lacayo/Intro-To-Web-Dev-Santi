function toggleImages() {
    const img1 = document.getElementById("image1");
    const img2 = document.getElementById("image2"); 
    if (img1.classList.contains("hidden")) {
       img1.classList.remove("hidden");
       img1.classList.add("spin");
       img2.classList.add("hidden");
       img2.classList.remove("spin");
    } else {
       img2.classList.remove("hidden");
       img2.classList.add("spin");
       img1.classList.add("hidden");
       img1.classList.remove("spin");
    }
}