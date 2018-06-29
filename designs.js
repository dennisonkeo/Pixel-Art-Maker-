// Select color input
// Select size input
var height;
var width;
var color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();

	// Call to makeGrid()
	makeGrid(height, width);
})

function makeGrid(w,h) {

// Your code goes here!
$('tr').remove();

for(var i=1; i<=w; i++)
{
	$('#pixelCanvas').append('<tr id=table' + i +'></tr>');

	for(var j=1; j<=h; j++)
	{
		$('#table'+i).append('<td></td>');
	}
}

// Now appling color to the cell
	$('td').click(function applyColor() {

		color = $('#colorPicker').val();

		if($(this).attr('style'))
		{
			$(this).removeAttr('style')

		}

		else
		{
			$(this).attr('style', 'background-color:' +color);
		}
		
	})
}
