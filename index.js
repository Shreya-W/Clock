setInterval(() => {
	 d = new Date();
    	htime = d.getHours();
	 mtime = d.getMinutes();
	 stime = d.getSeconds();
	 hrotation = 30*htime + mtime/2;
	mrotation = 6*mtime;
	srotation = 6*stime;
/* backtick ( ` ) and apostrophe ( ' ) are different operators. For this function or whatever it's requires ` and not ' */
	hour.style.transform = `rotate(${hrotation}deg)`;  /* hour hand was'nt working just cuz there was a space between rotate and (, like this rotate (). Correct is  rotate() */
	minute.style.transform = `rotate(${mrotation}deg)`;
	second.style.transform = `rotate(${srotation}deg)`;
},1000);