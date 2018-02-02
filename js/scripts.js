$(function() {
	console.log('carregou o scripts.js');

	// polyfill input color
	if (!Modernizr.inputtypes.color) {
		$("#colorPicker").spectrum({
			preferredFormat: "hex"
		});
	}

	// Get form data
	let grid = {
		colorBase: '#fff',
		colorSelected: '#000',
		rowsTotals: 0,
		colsTotals: 0,
		// createdGrid: [[]],
		cleanedGrid: function() {
			$('#pixelCanvas tr').remove();
		},
		makeGrid: function() {
			grid.cleanedGrid();
			let createdGrid = "";
			for (let row = 0; row < Number(grid.rowsTotals); row++) {
				// grid.createdGrid[row] = [];
				createdGrid += '<tr id="linha-'+row+'">';
				for (let col = 0; col < Number(grid.colsTotals); col++) {
					// grid.createdGrid[row][col] = 'off';
					createdGrid += '<td id="linha-'+row+'-coluna-'+col+'"></td>';
					// createdGrid += '<td id="linha-'+row+'-coluna-'+col+'" class="off">'+(row+1)+","+(col+1)+'</td>';
				}
				createdGrid += '</tr>';
			}
			return $('#pixelCanvas').append(createdGrid);
		},
		paintingGrid: function(cell) {
			// console.log($(cell));
			// if ($(cell).hasClass('on')) {
			// 	$(cell).css('background-color',grid.colorBase);
			// } else {
			// 	$(cell).css('background-color',grid.colorSelected);
			// }
			$(cell).css('background-color',grid.colorSelected);
			// console.log($(celula)[0].id);
		},
		changeColor: function(color) {
			grid.colorSelected = color;
		}
	};

	// Eventos
	$("#sizePicker").on('submit', function(evt) {
		evt.preventDefault();
		const returnForm = $(this).serializeArray();
		grid.rowsTotals = returnForm[0].value;
		grid.colsTotals = returnForm[1].value;
		grid.makeGrid();
	});
	$('#pixelCanvas').on('click','td', function(evt) {
		grid.paintingGrid(evt.target);
	});
	$('#colorPicker').on('input', function(evt){
		// console.log(evt.target.value);
		// console.log($('#colorPicker').spectrum("get"));
		grid.changeColor(evt.target.value);
	});
	// $("#colorPicker").on('change', function(color) {
	// 	console.log(color.toHexString());
	// });
	// console.log($('#colorPicker').spectrum("get"));
});