const body = document.querySelector("body");
const topDiv = document.createElement("header");
const controlsDiv = document.createElement("div");
const controlsDivStyle = controlsDiv.style;
const clearBtn = document.createElement("button");
const clearBtnStyle = clearBtn.style;
const modeBtn = document.createElement("select");
const modeBtnStyle = modeBtn.style;
const labelModeBtn = document.createElement("label");
const blackMode = document.createElement("option");
const randomMode = document.createElement("option");
const gradateMode = document.createElement("option");
const divContainter = document.createElement("div");
let gridSize = 16;

bodyStyle = body.style;
bodyStyle = "1em";
topDivStyle = topDiv.style;
topDiv.textContent = "Etch a Sketch";
topDivStyle.fontSize = "50px";
topDivStyle.lineHeight = "80px";
topDivStyle.height = "80px";
topDivStyle.backgroundColor = "#e66875";
topDivStyle.textAlign = "center";
body.appendChild(topDiv);
body.appendChild(controlsDiv);
clearBtn.textContent = "Clear Canvas";
controlsDiv.appendChild(clearBtn);
labelModeBtn.textContent = "Sketching Mode";
labelModeBtn.setAttribute("for", "dropdown");
controlsDiv.appendChild(labelModeBtn);
modeBtn.setAttribute("id", "dropdown");
controlsDiv.appendChild(modeBtn);
blackMode.textContent = "Black";
blackMode.setAttribute("checked", "checked");
modeBtn.appendChild(blackMode);
randomMode.textContent = "Random Color Brush";
modeBtn.appendChild(randomMode);
gradateMode.textContent = "Grayscale";
modeBtn.appendChild(gradateMode);
controlsDivStyle.textAlign = "center";
divStyle = divContainter.style;
divStyle.width = "500px";
divStyle.height = "500px";
divStyle.margin = "0 auto";
divStyle.setProperty('display','grid');
body.appendChild(divContainter);

constructGrid(gridSize);
activateBrush();

function constructGrid(gridSize) {
    divStyle.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    divStyle.gridTemplateRows = `repeat(${gridSize}, 1fr`;
    for (i = 1; i <= (gridSize**2); i++) {
        console.log(gridSize**2);
        const gridDiv = document.createElement("div");
        gridDivStl = gridDiv.style;
        gridDivStl.backgroundColor = "rgb(255,255,255)";
        gridDiv.classList.add("gridDiv");
        divContainter.appendChild(gridDiv);
    }
}

function activateBrush() {
    const gridDivs = Array.from(divContainter.childNodes);
    gridDivs.forEach(div => div.addEventListener("mouseenter", colorGrid));
}
        
function colorGrid(e) {
    if (modeBtn.options.selectedIndex == 0) {
        e.target.style.backgroundColor = "rgb(0,0,0)";
    }
    else if (modeBtn.options.selectedIndex == 1) {
        e.target.style.backgroundColor = `${generateRGB()}`;
    }
    else {
        e.target.style.backgroundColor = (`${gradateToBlack(e.target.style.backgroundColor)}`);
    }
}       

function generateRGB() {
    return `rgb(${generateValue()},${generateValue()},${generateValue()})`;
    function generateValue() {
        return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    }
}

function gradateToBlack(lastPass) {
    const RGBValues = lastPass.slice(4, lastPass.lastIndexOf(")"));
    let RGBArray = RGBValues.split(",");
    RGBArray.forEach((value, index, arr) => {
        arr[index] = value - 25.5;
            }   
        );
    return `rgb(${RGBArray.toString()})`;
}

clearBtn.onclick = (_) => {
    clearCanvas();
    constructGrid(gridSize = prompt("How many squares per side do you want?", "16"));
    activateBrush();
}

function clearCanvas() {
    var child = divContainter.lastElementChild;
    while (child) {
        divContainter.removeChild(child);
        child = divContainter.lastElementChild;
    }
}