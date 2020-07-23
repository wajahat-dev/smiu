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
    polygon_sides = 2;
    polygon_edge_length_squared = 2;
    // var n_value = document.getElementById("n_value ").value;
    var n_value = n;
    for (var i = 0; i < n_value; i++) {
        polygon_edge_length_squared = Math.sqrt(2 - 2 * (1 - polygon_edge_length_squared / 4));
        polygon_sides *= 2;
        return (polygon_sides * Math.sqrt(polygon_edge_length_squared));

    }
}



// places = 2
// old_result = None
// for n in range(10*places):
//     # Do calculations with double precision
//     getcontext().prec = 2*places
//     result = pi_archimedes(n)
//     # Print the result with single precision
//     getcontext().prec = places
//     result = +result           # do the rounding on result
//     print("%3d: %s" % (n, result))
//     if result == old_result:
//         break
//     old_result = result



function pi_archimedes(n) {
    var polygon_edge_length_squared = 2;
    var polygon_sides = 2;
    for (var i = 0; i < n; i++) {
        polygon_edge_length_squared = 2 - (2 * Math.sqrt((1 - polygon_edge_length_squared / 4)));
        polygon_sides *= 2;
    }
    return (polygon_sides * Math.sqrt(polygon_edge_length_squared));
}

function calculation() {

    places = 3;
    old_result = null;
    for (var n = 0; n < 10 * places; n++) {
        result = pi_archimedes(parseInt(n).toPrecision(8));
        result += parseInt(result).toPrecision(4);
        console.log('%d: %s', n, result.toFixed(places));
        if (result == old_result) {
            break;
        }
        old_result = result;
    }
}