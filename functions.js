function area() {
    var RecLen, RecWid, Area;
    RecLen = document.getElementById("areal ").value;
    RecWid = document.getElementById("areaW ").value;
    Area = RecLen * RecWid;
    document.getElementById("areaR ").value = Area
    console.log('area')
}



function ratioAspect() {
    var RecLen, RecWid, AspectRatio;
    RecLen = document.getElementById("ratiol ").value;
    RecWid = document.getElementById("ratioW ").value;
    AspectRatio = RecLen / RecWid;
    document.getElementById("ratioR ").value = AspectRatio
    console.log('ratioAspect')
}

// Write a Temperature Conversion program. Allow the user to select 
// the Unit for a temperature reading, then convert that reading into the target unit selected by the user.


function TemperatureConverstion() {
    const rbs = document.querySelectorAll('input[name="optradio"]');
    let selectedValue;
    // farenhit to celsisu
    // C = 5/9 x (F-32)

    var value = document.getElementById("value ").value;

    // 0) farenhit
    // 1) kelvin

    var counter = 0;
    for (const rb of rbs) {
        if (rb.checked) {
            if (counter == 0) {
                var convertTofarenhist = (parseInt(value) * 9 / 5) + 32;
                document.getElementById("conversion ").value = convertTofarenhist;
            } else if (counter == 1) {
                var convertTokelvin = parseInt(value) + 273.15;
                document.getElementById("conversion ").value = convertTokelvin;
            } else {
                console.log("Error while conversing");
            }
            break;
        }
        counter += 1;
    }


    console.log(22);
}






function pi_archimedes(n) {
    var length = 2;
    var polygon_sides = 2;
    for (var i = 0; i < n; i++) {
        length = 2 - (2 * Math.sqrt((1 - length / 4)));
        polygon_sides *= 2;
    }
    return (polygon_sides * Math.sqrt(length));
}

function calculation() {

    // places = 3;
    var places = document.getElementById("specifiedPrecision ").value;
    old_result = null;
    for (var n = 0; n < 10 * places; n++) {
        result = pi_archimedes(parseInt(n).toPrecision(8));
        result += parseInt(result).toPrecision(4);
        // console.log('%d: %s', n, result.toFixed(places));
        document.getElementById("pieResult ").value = parseFloat(result).toFixed(places);
        if (result == old_result) {
            break;
        }
        old_result = result;
    }
}