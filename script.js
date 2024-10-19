function result() {
    let value = parseFloat(document.getElementById("value").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let result;

    if (isNaN(value)) {
        alert("Pleas Enter a Correct Value");
        return;
    }

    if (fromUnit === "Meters") {
        if (toUnit === "Kilometers") result = value / 1000;
        else if (toUnit === "Centimeters") result = value * 100;
        else result = value;
    } else if (fromUnit === "Kilometers") {
        if (toUnit === "Meters") result = value * 1000;
        else if (toUnit === "Centimeters") result = value * 100000;
        else result = value;
    } else if (fromUnit === "Centimeters") {
        if (toUnit === "Meters") result = value / 100;
        else if (toUnit === "Kilometers") result = value / 100000;
        else result = value;
    }

    document.getElementById("result").value = result;
}

function clearValues() {
    document.getElementById("value").value = '';
    document.getElementById("result").value = '';
    document.getElementById("fromUnit").selectedIndex = 0;
    document.getElementById("toUnit").selectedIndex = 0;
}