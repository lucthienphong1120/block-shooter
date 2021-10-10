px=py=100;
pd=30;
ps=15;
el=[];
ed=25;
es=5;
sl=[];
sd=4;
ss=7;
window.onload = function() {
	canvas=document.createElement("canvas");
	canvas.width=640;
	canvas.height=480;
	document.body.appendChild(canvas);
	context=canvas.getContext("2d");
	setInterval(update,1000/30);
	setInterval(spawn,2000);
	document.addEventListener('keydown',keyPush);
	}
	function spawn() {
		el.push({x:canvas.width,y:Math.random()*canvas.height});
	}
	function update() {
	context.fillStyle="black";
	context.fillRect(0,0,canvas.width,canvas.height);
	context.fillStyle="white";
		context.fillRect(px-pd/2,py-pd/2,pd,pd);
		context.fillStyle="lime";
		for(var s=0;s<sl.length;s++) {
			sl[s].x += ss;
			context.fillRect(sl[s].x-sd/2,sl[s].y-sd/2,sd,sd);
				for(var e=el.length-1;e>=0;e--) {
					var dx=Math.abs(el[e].x-sl[s].x);
					var dy=Math.abs(el[e].y-sl[s].y);
					var dist=Math.sqrt(dx*dx+dy*dy);
					if(dist< (sd+ed)/2) {
						el.splice(e,1);
					}
				}
			}
		context.fillStyle="red";
		for(var e=0;e<el.length;e++) {
			el[e].x -= es;
			context.fillRect(el[e].x-ed/2,el[e].y-ed/2,ed,ed);
			var dx=Math.abs(el[e].x-px);
			var dy=Math.abs(el[e].y-py);
			var dist=Math.sqrt(dx*dx+dy*dy);
			if(dist< (pd+ed)/2) {
					sl=[];
					el=[];
					px=py=100;
					break;
				}
			}
		}
		function keyPush(evt) {
		switch(evt.keyCode) {
			case 32:
				sl.push({x:px,y:py});
				break;
			case 37:
				px-=ps;
				break;
			case 38:
					py-=ps;
					break;
				case 39:
					px+=ps;
					break;
				case 40:
					py+=ps;
					break;
			}
		}