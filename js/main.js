const myArray = ["img/01.jpg", 
                "img/02.jpg",
                "img/03.jpg", 
                "img/04.jpg", 
                "img/05.jpg", 
                ];

let imgAttiva = 0;

let itemsDom = document.querySelector('.items');
let imgWrapperDom = document.querySelector('.imgWrapper_container')

for ( x = 0; x < myArray.length; x++) {
    itemsDom.innerHTML += ` <div class="item">
    <img class="carousel_img" src="${myArray[x]}" alt="Immagine ${x + 1}">
    </div>`;

    imgWrapperDom.innerHTML += `<div class="imgWrapper"> 
    <img class="borderImg" src="${myArray[x]}"</div>`;
}

const imgList = document.querySelectorAll('.item');
imgList[imgAttiva].classList.add('show');

const borderImgList = document.querySelectorAll('.borderImg');
borderImgList[imgAttiva].classList.add('active');

const prevDom = document.querySelector('.prev');
const nextDom = document.querySelector('.next');

prevDom.addEventListener('click',
    function() {
        imgList[imgAttiva].classList.remove('show');
        borderImgList[imgAttiva].classList.remove('active');

        imgAttiva--;

        imgList[imgAttiva].classList.add('show');
        borderImgList[imgAttiva].classList.add('active');

        nextDom.classList.remove('hidden');
        
        if (imgAttiva == 0) {
            prevDom.classList.add('hidden');
        }
    }
);

nextDom.addEventListener('click',
    function() {
        imgList[imgAttiva].classList.remove('show');
        borderImgList[imgAttiva].classList.remove('active');

        imgAttiva++;

        imgList[imgAttiva].classList.add('show');
        borderImgList[imgAttiva].classList.add('active');

        prevDom.classList.remove('hidden');

        if (imgAttiva == imgList.length - 1) {
            nextDom.classList.add('hidden');
        }
    }
);
