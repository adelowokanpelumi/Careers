 var imageSources = ["dist/img/1.1.png",
 					 "dist/img/2.png", 
 					 "dist/img/3.png",
 					  "dist/img/4.png"]

      var index = 0;
      setInterval(function(){
        if (index === imageSources.length) {
          index = 0;
        }
        document.getElementById("changing").src = imageSources[index];
        index++;
      }, 10000);



 