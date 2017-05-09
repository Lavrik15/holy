(function() {
	window.onload = function() {
		console.log("load");
		var imageArr = document.getElementsByClassName("popup-anim-img");
		var elems = imageArr.length;
		var i = 0;
		show();
		function show() {
	    imageArr[i].style.display = "block";
	    setTimeout(function() {
	    		i++; 
	        if (i < elems) {
	          show();
	        } else {
	        	i = 0;
        		for (var j = 0; j < elems; j++) {
        			imageArr[j].style.display = "none";
        		}
	        	show();
	        }
	    }, 500);

		}
	}
})();