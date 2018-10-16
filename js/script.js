let block = $('.block');

$('.inputPosY').on('change', function(){
	let posY = $('.inputPosY').val();
	block.css('margin-top', posY + 'px')
})

$('.inputPosX').on('change', function(){
	let posX = $('.inputPosX').val();
	block.css('margin-left', posX + 'px')
})

$('.inputSize').on('change', function(){
	let size = $('.inputSize').val();
	block.css('width', size);
	block.css('height', size);
})

$('.inputOpacity').on('change', function(){
	let opacity = $('.inputOpacity').val();
	block.css('opacity', opacity);
})

$('button').on('click', function(){
	let option = $('select').val();
	if (option === 'circle') {
		block.css('border-radius', 50+'%'); 
	} else if (option === 'rhomb') {
		block.css('transform', 'rotate('+45+'deg)');
	} else {
		block.css('border-radius', 0);
		block.css('transform', 'rotate('+0+'deg)');
	}
})

$('.r').on('change', function(){
	block.css('background-color', 'rgba['+$('.r').val()+','+$('.g').val()+','+$('.b').val()+','+$('.a').val()+']');
})
$('.g').on('change', function(){
	block.css('background-color', 'rgba['+$('.r').val()+','+$('.g').val()+','+$('.b').val()+','+$('.a').val()+']');
})
$('.b').on('change', function(){
	block.css('background-color', 'rgba['+$('.r').val()+','+$('.g').val()+','+$('.b').val()+','+$('.a').val()+']');
})
$('.a').on('change', function(){
	block.css('background-color', 'rgba['+$('.r').val()+','+$('.g').val()+','+$('.b').val()+','+$('.a').val()+']');
})

$('.colorHEX').on('keyup', function(){
	let colorHEX = $('.colorHEX').val();
	block.css('background-color', colorHEX);
})