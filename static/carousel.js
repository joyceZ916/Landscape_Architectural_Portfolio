function makeCarousel(queryString){
    var carousel = document.querySelector(queryString);
    var images = carousel.querySelectorAll("img");

    var buttonbox = document.createElement("div");
    buttonbox.classList.add("buttonbox");
    carousel.appendChild(buttonbox);

    // A function for setting the selected image.
    function selectImage(index) {
        var whitebuttons = buttonbox.querySelectorAll(".whitebutton");
        for (var i = 0; i < whitebuttons.length; i++) {
            var whitebutton = whitebuttons[i];
            if (i === index) {
                whitebutton.classList.add("selected");
            } else {
                whitebutton.classList.remove("selected");
            }
        }

        for (var j = 0; j < images.length; j++) {
            var image = images[j];
            if (j === index) {
                image.classList.add("selected");
            } else {
                image.classList.remove("selected");
            }
        }

        currentImageIndex = index;

        clearTimeout(timeoutID);
        timeoutID = setTimeout(autoScroll, 3000);
    }

    // Add a button for each image.
    for (var i=0; i < images.length; i++){
        var aTag = document.createElement("a");
        aTag.classList.add("whitebutton");
        buttonbox.appendChild(aTag);
        aTag.href="#";
        aTag.onclick = function(target) {
            return function(e) {
                e.preventDefault();
                selectImage(target);
            };
        }(i);
    }

    var leftButton = document.createElement("a");
    leftButton.innerText = "<";
    leftButton.classList.add("leftbutton");
    leftButton.classList.add("navbutton");
    leftButton.href="#";
    carousel.appendChild(leftButton);
    leftButton.onclick = function(e) {
        e.preventDefault();
        var newIndex = (currentImageIndex + images.length - 1) % images.length;
        selectImage(newIndex);
    };

    var rightButton = document.createElement("a");
    rightButton.innerText = ">";
    rightButton.classList.add("rightbutton");
    rightButton.classList.add("navbutton");
    rightButton.href="#";
    carousel.appendChild(rightButton);
    rightButton.onclick = function(e) {
        e.preventDefault();
        var newIndex = (currentImageIndex + 1) % images.length;
        selectImage(newIndex);
    };

    var currentImageIndex = 0;
    var timeoutID = -1;
    selectImage(0, 0);

    function autoScroll() {
        selectImage((currentImageIndex + 1) % images.length);
    }
}