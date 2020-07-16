function tablegenerator() {
    if (document.getElementById('tablediv').hasChildNodes()) {
        var goalDiv = document.getElementById('goaldiv');
        goalDiv.innerHTML = 'Létezik tábla';
    } else {

        for (i = 0; i < 10; i++) {
            var rowDiv = document.createElement('div');
            rowDiv.className = 'rowdiv';
            document.getElementById('tablediv').appendChild(rowDiv);
            for (j = 0; j < 10; j++) {
                var cellDiv = document.createElement('div');
                cellDiv.className = 'celldiv';
                cellDiv.setAttribute('onclick', 'pointgenerator(event)');
                rowDiv.appendChild(cellDiv);
            }
        }
    }
}

function pointgenerator(event) {
    var div = event.currentTarget;

    if (div.hasChildNodes()) {
        var goalDiv = document.getElementById('goaldiv');
        goalDiv.innerHTML = 'Már jelölted';

    } else {
        var point = document.createElement('span');
        point.className = 'point';
        div.appendChild(point);
    }
}

function roundgenerator() {

    var divList1 = document.getElementsByClassName('rowdiv');
    var divList2 = document.getElementsByClassName('celldiv');
    var cellArray = new Array();

    for(i=0;i<divList2.length;i++){
            for(j=0; i<divList1.length;j++){
                cellArray
            }
    }
}