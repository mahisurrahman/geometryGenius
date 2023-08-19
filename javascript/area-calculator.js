
document.getElementById('triangleButton').addEventListener('click', function(){
    const baseField = document.getElementById('triangle-base');
    const baseValueString = baseField.value;
    const base = parseFloat(baseValueString);

    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const height = parseFloat(heightValueString);

})
