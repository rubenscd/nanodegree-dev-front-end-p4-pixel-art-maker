$(function() {

	// objeto grid com todas as acoes
	let grid = {
		colorBase: '#fff',
		colorSelected: '#000',
		rowsTotals: 0,
		colsTotals: 0,
		// createdGrid: [[]],
		cleanedGrid: function() {
			/* TODO: remove grid */
			$('#pixelCanvas tr').remove();
		},
		makeGrid: function() {
			/* TODO: chama a limpeza se caso existir um grid criado */
			if ($('#pixelCanvas').find('tr')) grid.cleanedGrid();
			let createdGrid = "";
			for (let row = 0; row < Number(grid.rowsTotals); row++) {
				// grid.createdGrid[row] = [];
				createdGrid += '<tr id="linha-'+row+'">';
				for (let col = 0; col < Number(grid.colsTotals); col++) {
					// grid.createdGrid[row][col] = 'off';
					createdGrid += '<td id="linha-'+row+'-coluna-'+col+'"></td>';
				}
				createdGrid += '</tr>';
			}
			/* TODO: cria o grid com os parametros repassados do form */
			return $('#pixelCanvas').append(createdGrid);
		},
		paintingGrid: function(cell) {
			/* TODO: executa a pintura com a cor escolhida */
			$(cell).css('background-color',grid.colorSelected);
		},
		changeColor: function(color) {
			/* TODO: muda a cor a ser aplicada */
			grid.colorSelected = color;
		}
	};

	// polyfill input color
	if (!Modernizr.inputtypes.color) {
		$("#colorPicker").spectrum({
			preferredFormat: "hex"
		});
	}

	// Eventos
	// evento previne o submit do form mas envia os valores do grid para o objeto
	$("#sizePicker").on('submit', function(evt) {
		evt.preventDefault();
		const returnForm = $(this).serializeArray();
		grid.rowsTotals = returnForm[0].value;
		grid.colsTotals = returnForm[1].value;
		grid.makeGrid();
	});
	// evento escuta se dentro do grid algum td foi clicado
	$('#pixelCanvas').on('click','td', function(evt) {
		grid.paintingGrid(evt.target);
	});
	// evento muda a cor
	$('#colorPicker').on('change', function(evt){
		grid.changeColor(evt.target.value);
	});
});