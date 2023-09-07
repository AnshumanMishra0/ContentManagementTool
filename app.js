document.addEventListener("DOMContentLoaded", function () {
    const addTextButton = document.getElementById("addText");
    const addImageButton = document.getElementById("addImage");
    const addVideoButton = document.getElementById("addVideo");
    const contentContainer = document.getElementById("content");

    addTextButton.addEventListener("click", function () {
        const textElement = createDraggableElement("Text Element");
        contentContainer.appendChild(textElement);
    });

    addImageButton.addEventListener("click", function () {
        const imageElement = createDraggableElement('<img src="image.jpg" alt="Image">');
        contentContainer.appendChild(imageElement);
    });

    addVideoButton.addEventListener("click", function () {
        const videoElement = createDraggableElement('<video controls><source src="video.mp4" type="video/mp4"></video>');
        contentContainer.appendChild(videoElement);
    });

    function createDraggableElement(content) {
        const element = document.createElement("div");
        element.className = "draggable-element";
        element.innerHTML = content;

        element.draggable = true;
        element.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text/plain", content);
        });

        return element;
    }

    contentContainer.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    contentContainer.addEventListener("drop", function (event) {
        event.preventDefault();
        const content = event.dataTransfer.getData("text/plain");
        const element = createDraggableElement(content);
        contentContainer.appendChild(element);
    });
});
