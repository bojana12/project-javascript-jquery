import $ from 'jquery';
import swal from 'sweetalert2';
import randomColor from 'randomcolor';

$(document).ready(function() {
	$('#new').on('click', function() {
		$('form').toggle();
		$('.grid table').hide();
	});

	$('#submit').on('click', function(event) {
		event.preventDefault();
		let number = $('input').val();

		if(number > 30 || number < 0) {
			swal(
				'Error!',
				'Number must be from 0-30!'
			)
		} else {
			$('.grid table').show();
			$('.grid table').html('');

			for (let i = 0; i < number; i++) {
				$('.grid table').append('<tr></tr>');
			}

			for (let y = 0; y < number; y++) {
				$('.grid table tr').each(function() {
					$(this).append('<td></td>');

					$('.grid table td').hover(function() {
						let color = randomColor({
							luminosity: 'light',
   						hue: 'blue'
						});

						$(this).css('background', color);
					});
				});
			}

			$('form').hide();
		}
	});
});







