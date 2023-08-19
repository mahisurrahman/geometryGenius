
document.getElementById('triangleButton').addEventListener('click', function () {
    const baseField = document.getElementById('triangle-base');
    const baseValueString = baseField.value;
    const base = parseFloat(baseValueString);

    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const height = parseFloat(heightValueString);

    const area = 0.5 * base * height;

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);
})


function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    const area = length * width;

    console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}

function calculateParalellogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('paralellogram-height');
    const area = base * height;
    setElementInnerText('paralellogram-area', area);

    //Add to Calculation Entry//
    addToCalculationEntry('Paralellogram', area)

}

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function calculateEllipseArea() {
    const majorRadius = getInputValue('majorRadius');
    const minorRadius = getInputValue('minorRadius');
    const area = 3.14 * majorRadius * minorRadius;

    setElementInnerText('ellipse-area', area);

    addToCalculationEntry('Ellipse', area);
}

//Add to Calculation Entry //
/*Following the Dynamic HTML Creation Method*/
function addToCalculationEntry(areaType, area){
    console.log('adding soon');
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm">Convert to m<sup>2</sup></button>`;

    calculationEntry.appendChild(p);

}