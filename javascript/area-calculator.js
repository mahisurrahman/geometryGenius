
document.getElementById('triangleButton').addEventListener('click', function(){
    const baseField = document.getElementById('triangle-base');
    const baseValueString = baseField.value;
    const base = parseFloat(baseValueString);

    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const height = parseFloat(heightValueString);

    const area = 0.5*base*height;

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
})


function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    const area = length*width;
    
    console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}
