$(".button-collapse").sideNav();

$( "#ecole" ).click(function() 
{
	var elem = document.getElementById('liste');
	if(elem.style.display == 'none')
	{
		elem.style.display = 'block';
	}
	else
	{
		elem.style.display = 'none';
	}
});