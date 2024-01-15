const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
	  toggle = body.querySelector(".toggle"),
	  modeSwitch = body.querySelector(".activer-switch"),
	  modeText = body.querySelector(".mode-text");

	  modeSwitch.addEventListener("click", () =>{
		  body.classList.toggle("dark");

		  if(body.classList.contains("dark")){
			  modeText.innerText = "Mode Clair"
		  }else{
			  modeText.innerText = "Mode Sombre"
		  }

	  });

	  toggle.addEventListener("click", () =>{
		sidebar.classList.toggle("close");
	  })