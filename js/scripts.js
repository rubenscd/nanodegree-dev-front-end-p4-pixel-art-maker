$(function() {
	console.log('carregou o scripts.js');
	
	// Get form data
	let grid = {
		colorActive: '#000000',
		rowsTotals: 1,
		colsTotals: 1,
		// createdGrid: [[]],
		// cleanedGrid: true,
		makeGrid: function() {
			// console.log(grid.cleanedGrid);
			// if (grid.cleanedGrid) {
				let createdGrid = "";
				for (let row = 0; row < Number(grid.rowsTotals); row++) {
					// grid.createdGrid[row] = [];
					createdGrid += '<tr id="linha-'+row+'">';
					for (let col = 0; col < Number(grid.colsTotals); col++) {
						// grid.createdGrid[row][col] = 'off';
						createdGrid += '<td id="linha-'+row+'-coluna-'+col+'" class="off">'+row+","+col+'</td>';
					}
					createdGrid += '</tr>';
				}
				grid.cleanedGrid = false;
				// console.log(grid.cleanedGrid);
				return $('#pixelCanvas').prepend(createdGrid);
			// } else {
			// 	return $('#pixelCanvas').remove();
			// }
		},
		paintingGrid: function() {

		}
	};
	// // Select color input
	// const colorActive = '#000000';
	// // Select size input
	// let rowsTotals = $('#grid-rows').val();
	// let colsTotals = $('#grid-cols').val();


	// console.log('pegou dados do form SEM submit',rowsTotals,colsTotals);

	// When size is submitted by the user, call makeGrid()
	// function makeGrid(rowsTotals,colsTotals) {
	// 	console.log('altura, largura, grade ',Number(rowsTotals),Number(colsTotals),grid);
	// 	// rowsTotals = document.sizePicker.input_height.value;
	// 	// colsTotals = document.sizePicker.input_width.value;
	// 	// return true;
	// 	for (let row = 0; row < rowsTotals; row++) {
	// 		console.log('row: ',row);
	// 		for (let col = 0; col < colsTotals[row]; col++) {
	// 			// if (numbers[row][col] % 2 === 0) {
	// 			// 	numbers[row][col] = 'even';
	// 			// } else {
	// 			// 	numbers[row][col] = 'odd';
	// 			// }
	// 			console.log('col: ',col);
	// 			console.log('grid: ',[row][col]);
	// 			// return row[col];
	// 		}
	// 	}
	// }
	$('form').on('submit', function(evt) {
		evt.preventDefault();
		// console.log($(this),evt);
		const returnForm = $("form").serializeArray();
		grid.rowsTotals = returnForm[0].value;
		grid.colsTotals = returnForm[1].value;
		// console.log('pegou dados do form COM submit',rowsTotals,colsTotals);
		// makeGrid(rowsTotals,colsTotals);
		grid.makeGrid();
		// grid.cleanGrid();
	});
});