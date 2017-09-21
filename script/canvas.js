var rowsc;
var colsc;

function createCanvas() {
	var canvas = document.getElementById("canvas_table");
	canvas.innerHTML = "";
	while(canvas.rows.length > 0)
		canvas.deleteRow(0);
	rowsc = document.getElementById("canvas_height").value;
	colsc = document.getElementById("canvas_width").value;
	for (var x = 0; x < rowsc; x++) {
		var canvas_row = canvas.insertRow(x);
    canvas_row.setAttribute("class", "row");
    for (var y = 0; y < colsc; y++) {
		var column_cell = canvas_row.insertCell(y);
	column_cell.addEventListener('click', function(e) {
        e.target.style.backgroundColor = document.getElementById("cellcolor").value;
        this.style.borderColor="#fff34f";
        this.style.boxShadow="0 0 11px #fff34f";
			});
		}
	}
	return false;
}

document.getElementById("gridsize").addEventListener("submit", function(e) {
	e.preventDefault();
	createCanvas();
});
