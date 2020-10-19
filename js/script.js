var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function deleteButton() {
	delButton=document.createElement("button");
	delButton.appendChild(document.createTextNode("del"));
	listItems[i].appendChild(delButton);
	delButton.onclick = removeParent;
}

function removeParent(click){
	click.target.parentNode.remove();
}

function listLength(){
	return listItems.length;
}

for(var i=0; i < listLength(); i++) {
	deleteButton();
}

function inputLength() {
	return input.value.length;
}

function pressEnter() {
	if (event.keyCode === 13) {
		return true;}
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

	delButton=document.createElement("button");
	delButton.appendChild(document.createTextNode("del"));
	li.appendChild(delButton);
	delButton.onclick = removeParent;
}

function addItemAfterClick () {
	if(inputLength() > 0) {
		createListElement();
	} else {alert("Please add a valid input");}
}

function addItemAfterEnter(event) {
	if(inputLength() > 0 && pressEnter() == true){
		createListElement();}
}

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}


button.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterEnter);

