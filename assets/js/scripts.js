var person = [
    { name: "Chaewon", age: "00", eyeColor: "Example",},
    { name: "Kadir", age: "00", eyeColor: "Example",},
    { name: "Marwa", age: "00", eyeColor: "Example",},
    { name: "Melike", age: "00", eyeColor: "Example" },
    { name: "Olena", age: "00", eyeColor: "Example" },
    { name: "SemaIstek", age: "00", eyeColor: "Example"},
    { name: "Yidnek", age: "00", eyeColor: "Example"},
    { name: "Oleksandr", age: "00", eyeColor: "Example"}
];

var parts = document.querySelectorAll("#Part1, #Part2, #Part3, #Part4, #Part5, #Part6, #Part7, #Part8");

parts.forEach(function(part, index) {
    part.dataset.originalColor = part.style.backgroundColor;

    part.addEventListener("mouseover", function() {
        part.style.backgroundColor = "rgb(247, 171, 155)";
    });

    part.addEventListener("mouseout", function() {
        part.style.backgroundColor = part.dataset.originalColor;
    });

});

parts.forEach(function(partsElement, index) {
    partsElement.addEventListener("click", function() {
        var infoContainer = partsElement.querySelector(".info-container");
        infoContainer.innerHTML = "Name: " + person[index].name + "<br>Age: " + person[index].age + "<br>Eye Color: " + person[index].eyeColor;
        infoContainer.style.display = "block";
    });

    partsElement.addEventListener("mouseout", function() {
        var infoContainer = partsElement.querySelector(".info-container");
        infoContainer.style.display = "none";
    });
});
