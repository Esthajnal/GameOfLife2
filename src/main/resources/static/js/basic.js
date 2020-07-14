function tablegenerator() {

    for (i = 0; i < 35; i++) {
        var rowDiv = document.createElement('div');
        rowDiv.className = 'rowdiw';
        document.getElementById('tablediv').appendChild(rowDiv);
        for (j = 0; j < 35; j++) {
            var cellDiv = document.createElement('div');
            cellDiv.className = 'celldiv';
            cellDiv.setAttribute("onclick", "pointgenerator()");
            rowDiv.appendChild(cellDiv);
        }
    }
}

function pointgenerator() {

    document.write = "cica";

}