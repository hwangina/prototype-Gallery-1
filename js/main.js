window.addEventListener("load", function(){
	var gallery=document.querySelector(".gallery"); // add in
	var appendul="null"; // for add ul element
	var appendHTML=""; // for add li element innerText
	
	var control=document.querySelectorAll(".controller li"); // controller
	var distance=0; // moving amount by galley ul
	
	/* load json data */
	var requestURL="data/img_path.json";
	var request=new XMLHttpRequest();
	
	function init(){
		setTimeout(function(){
			request.open("GET", requestURL);		
			request.responseType="json";
			request.send();
			
			request.addEventListener("load", function(){
				var data=request.response;

				appendul=document.createElement("ul");
				gallery.appendChild(appendul);
				for(key in data){
					appendHTML += '<li><img src="images/' + data[key] + '" alt="' + key + '"></li>\n'
				}
				appendul.innerHTML=appendHTML;
				
				for(i=0;i<control.length;i++){
					control[i].index=i; // index value
					
					control[i].addEventListener("click", function(e){
						e.preventDefault();
						
						var index=e.currentTarget.index; // index
						distance=index*400*(-1);
						appendul.style.left=distance+"px";
						for(var j=0;j<control.length;j++){
							control[j].classList.remove("on");
						}
						e.currentTarget.classList.add("on");
					});
				}
			});
		}, 10);
	}
	init();
});