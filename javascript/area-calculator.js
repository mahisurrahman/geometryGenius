
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
}

function calculateParalellogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('paralellogram-height');
    const area = base * height;
    setElementInnerText('paralellogram-area', area);

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
}
