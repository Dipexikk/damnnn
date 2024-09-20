let imageCount = 0;

function showImage() {
    const imageName = document.getElementById('imageName').value;
    const imageUrl = document.getElementById('imageUrl').value;
    
    if (!imageName || !imageUrl) {
        alert("Prosím zadej platný název a URL obrázku.");
        return;
    }
    document.getElementById('image').src = imageUrl;
    imageCount++;
    document.getElementById('imageList').innerHTML += 
        `<li><a href="${imageUrl}" target="_blank">${imageCount}. ${imageName}</a></li>`;
}
