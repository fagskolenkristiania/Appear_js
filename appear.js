(function () {
    let activeObjects = document.querySelectorAll('.appear');
    console.log(activeObjects);

    document.addEventListener('scroll', setClasses);

    function setClasses() {
        for (let element of activeObjects) {
            let elementBoundingRect = element.getBoundingClientRect();
            // check if the box is on screen
			let offset = 0;
            if ((elementBoundingRect.top < (window.innerHeight-offset)) && (elementBoundingRect.bottom > offset)) {
                if (!element.classList.contains('visible')) element.classList.add('visible');
            } else {
                if (element.classList.contains('visible')) {
                    if(! element.hasAttribute('data-stick')) element.classList.remove('visible');
                }
            }
        }
    };
    setClasses();
}());
