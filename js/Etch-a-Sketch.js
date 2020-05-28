const body = document.querySelector("body");
const topDiv = document.createElement("header");
const controlsDiv = document.createElement("div");
const controlsDivStyle = controlsDiv.style;
const clearBtn = document.createElement("button");
const clearBtnStyle = clearBtn.style;
const divContainter = document.createElement("div");
const gridDivs = divContainter.childNodes;
let gridSize = 16;

bodyStyle = body.style;
bodyStyle = "1em";
topDivStyle = topDiv.style;
topDiv.textContent = "Etch a Sketch";
topDivStyle.fontSize = "50px";
topDivStyle.lineHeight = "80px";
topDivStyle.height = "80px";
topDivStyle.backgroundColor = "gray";
topDivStyle.textAlign = "center";
body.appendChild(topDiv);
controlsDivStyle.height = "70px";
body.appendChild(controlsDiv);
clearBtn.textContent = "Clear";
clearBtnStyle.display = "inline-block";
clearBtnStyle.margin = "0 auto";
controlsDiv.appendChild(clearBtn);
divStyle = divContainter.style;
divStyle.width = "500px";
divStyle.height = "500px";
divStyle.margin = "0 auto";
divStyle.setProperty('display','grid');
body.appendChild(divContainter);

constructGrid(gridSize);
etch();

function constructGrid(gridSize) {
    divStyle.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    divStyle.gridTemplateRows = `repeat(${gridSize}, 1fr`;
    for (i = 1; i <= (gridSize**2); i++) {
        console.log(gridSize**2);
        const gridDiv = document.createElement("div");
        gridDivStl = gridDiv.style;
        gridDivStl.backgroundColor = "green";
        gridDiv.classList.add("gridDiv");
        divContainter.appendChild(gridDiv);
    }
}

function etch() {
    gridDivs.forEach((div) => {
        div.addEventListener("mouseenter", (e) => {
            console.log(e);
            e.target.classList.add("mouseEnter");
        });
    });
}

clearBtn.onclick = (_) => {
    const coloredDivs = document.querySelectorAll(".mouseEnter");
    coloredDivs.forEach((div) => {
        div.classList.remove("mouseEnter");
    });
    console.log(gridDivs);
    var child = divContainter.lastElementChild;
    while (child) {
        divContainter.removeChild(child);
        console.log("div removed");
        child = divContainter.lastElementChild;
    }
    
    constructGrid(gridSize = prompt("How many squares per side do you want?", "64"));
    etch();
}