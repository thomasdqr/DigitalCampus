/* POUR UNITY */

UnityLoader.Error.handler = function(e, t)
{
    console.log(e);
}
 
/* RESTE DU SCRIPT */

var started = false;

function GameLoaded() {
	console.log("game has load !");
	started = true;
}


function Submit() {
	var dataToSubmit = Keyword.Find(document.getElementById('input').value);
	console.log(dataToSubmit);
	gameInstance.SendMessage("Main Camera", "ReceiveData", dataToSubmit);
}

function ShowAll() {
	gameInstance.SendMessage("Main Camera", "ShowAll");
}

function ChangeFloor(floor) {
	if (floor >= -1 || floor <= 3) {
		gameInstance.SendMessage("Main Camera", "ChangeFloor", floor);
	}
}


function ShowPopup() {
	console.log("show sphere 3D : "+index);
}
