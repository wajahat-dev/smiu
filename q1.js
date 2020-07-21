function ff() {
    var RecLen, RecWid, Area;
    RecLen = document.getElementById("l1 ").value;
    RecWid = document.getElementById("w1 ").value;
    Area = RecLen * RecWid;
    document.getElementById("r1 ").value = Area
    console.log('1')
}



function findAspectRatio() {
    var RecLen, RecWid, AspectRatio;
    RecLen = document.getElementById("length_aspect").value;
    RecWid = document.getElementById("width_aspect").value;
    AspectRatio = RecLen / RecWid;
    document.getElementById("result_aspect").value = AspectRatio
    console.log('1111')
}


function findAspectRatio1() {
    var RecLen, RecWid, AspectRatio;
    RecLen = document.getElementById("length_aspect1").value;
    RecWid = document.getElementById("width_aspect1").value;
    AspectRatio = RecLen / RecWid;
    document.getElementById("result_aspect1").value = AspectRatio
    console.log('11111')
}