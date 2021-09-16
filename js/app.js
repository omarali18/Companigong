const images = ['Images/caro-1.png', 'Images/caro-2.png', 'Images/caro-3.png', 'Images/caro-4.png', 'Images/caro-5.png', 'Images/caro-6.png', 'Images/caro-7.png', 'Images/caro-8.png'];

let imgIndex = 0
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    document.getElementById("carousal-img").setAttribute("src", imgUrl)
    imgIndex++
}, 2000)

