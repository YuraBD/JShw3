/* YOUR CODE HERE! */
let boxContainer = document.querySelector('.box-container');
let id = 1;

function addEventListenersToBox(box) {
    box.addEventListener('mousedown', (ev) => {
        if (ev.which === 1) {
            ev.preventDefault();

            let currPosX = ev.clientX;
            let currPosY = ev.clientY;

            function mouseMove(e) {
                let box = ev.target
                box.style.top = (box.offsetTop - (currPosY - e.clientY)) + 'px';
                box.style.left = (box.offsetLeft - (currPosX - e.clientX)) + 'px';

                currPosX = e.clientX;
                currPosY = e.clientY;
            }

            document.addEventListener('mousemove', mouseMove);

            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', mouseMove);
            }, {once: true})
        }
    })

    box.addEventListener('contextmenu', (ev) => {
        ev.preventDefault();
        ev.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    })

    box.addEventListener('click', (ev) => {
        if (ev.shiftKey) {
            ev.target.classList.toggle('box-large');
        }
    })

    box.addEventListener('dblclick', (ev) => {
        if (ev.altKey) {
            if (boxContainer.getElementsByTagName('*').length !== 1) {
                boxContainer.removeChild(ev.target);
            }
        } else {
            id += 1;
            let clonedBox = ev.target.cloneNode(true);
            clonedBox.textContent = id;
            console.log(ev.target.offsetTop, ev.target.offsetHeight);
            clonedBox.style.top = (ev.target.offsetTop + ev.target.offsetHeight) + 'px';
            clonedBox.style.left = (ev.target.offsetLeft + ev.target.offsetWidth) + 'px'
            console.log(clonedBox.style.top);
            boxContainer.appendChild(clonedBox);
            addEventListenersToBox(clonedBox);
        }
    })

    // box.addEventListener('')
}

let box = document.querySelector('.box');
addEventListenersToBox(box);