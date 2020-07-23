var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } };
$jscomp.arrayIterator = function(a) { return { next: $jscomp.arrayIteratorImpl(a) } };
$jscomp.makeIterator = function(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : $jscomp.arrayIterator(a) };

function area() {
    var a = document.getElementById("areal ").value;
    var b = document.getElementById("areaW ").value;
    a *= b;
    document.getElementById("areaR ").value = a;
    console.log("area")
}

function ratioAspect() {
    var a = document.getElementById("ratiol ").value;
    var b = document.getElementById("ratioW ").value;
    a /= b;
    document.getElementById("ratioR ").value = a;
    console.log("ratioAspect")
}

function TemperatureConverstion() {
    var a = document.querySelectorAll('input[name="optradio"]'),
        b = document.getElementById("value ").value,
        c = 0;
    a = $jscomp.makeIterator(a);
    for (var d = a.next(); !d.done; d = a.next()) {
        if (d.value.checked) { 0 == c ? (b = 9 * parseInt(b) / 5 + 32, document.getElementById("conversion ").value = b) : 1 == c ? (b = parseInt(b) + 273.15, document.getElementById("conversion ").value = b) : console.log("Error while conversing"); break }
        c += 1
    }
    console.log(22)
}

function pi_archimedes(a) { for (var b = 2, c = 2, d = 0; d < a; d++) b = 2 - 2 * Math.sqrt(1 - b / 4), c *= 2; return c * Math.sqrt(b) }

function calculation() {
    var a = document.getElementById("specifiedPrecision ").value;
    old_result = null;
    for (var b = 0; b < 10 * a; b++) {
        result = pi_archimedes(parseInt(b).toPrecision(8));
        result += parseInt(result).toPrecision(4);
        document.getElementById("pieResult ").value = parseFloat(result).toFixed(a);
        if (result == old_result) break;
        old_result = result
    }
};