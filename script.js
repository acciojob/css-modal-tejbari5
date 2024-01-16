//your JS code here. If required.
let isModal=true;
   function openModal(){
    if(isModal){
	let body =document.querySelector("body");

		let overlay = document.createElement("div");
		overlay.className = "overlay";
		body.appendChild(overlay); 
		
	let htmlElem = `
        <div class="modal">
		 <h2>Modal Header</h2>
		  <div class="body">
			   <h2>modal body content</h2>
			    <h3 onClick="closeModal()">✖</h3>
		  </div>
	 </div>
	`
	body.insertAdjacentHTML("beforeend",htmlElem);
	
	isModal=false
}
}
function closeModal(){
	let overlay  =document.querySelector(".overlay");
	 let modal  = document.querySelector(".modal");

	if(overlay){
      overlay.remove();
	}
	if(!isModal){
		isModal =true;
	    modal.remove();
	}
	
}