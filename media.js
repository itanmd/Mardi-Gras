
document.addEventListener("click",function (e) {
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }

});

//video gallery//

document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () => {
    document.querySelector('.popup-video').style.display = 'block';
    document.querySelector('.popup-video video').src = vid.getAttribute('src');
    }
});

document.querySelector(".popup-video span").onclick = () => 
{ document.querySelector(".popup-video").style.display = "none";
document.querySelector(".popup-video video").muted = true;
};

