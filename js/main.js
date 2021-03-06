    window.onload = function() {
      var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var tracker = new tracking.ObjectTracker('face');
      var task = new tracking.TrackerTask(tracker);
      
      var mask1 = document.getElementById('mask1');
      var mask2 = document.getElementById('mask2');
      var mask3 = document.getElementById('mask3');
      var button = document.getElementById('maskThmb1');
      var button2 = document.getElementById('maskThmb2');
      var button3 = document.getElementById('maskThmb3');
      button.addEventListener("mousedown", function(maskThmb) {
        document.getElementById("mask1").src="assets/rocky.png";
        document.getElementById("mask2").src="assets/colt.png"; 
        document.getElementById("mask3").src="assets/tumtum.png";
        });
      button2.addEventListener("mousedown", function(maskThmb) {
        document.getElementById("mask1").src="assets/colt.png"; 
        document.getElementById("mask2").src="assets/rocky.png";
        document.getElementById("mask3").src="assets/tumtum.png";
        }); 
      button3.addEventListener("mousedown", function(maskThmb) {
        document.getElementById("mask1").src="assets/tumtum.png";
        document.getElementById("mask2").src="assets/rocky.png";
        document.getElementById("mask3").src="assets/colt.png";
      });

      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);
      tracking.track('#video', tracker, { camera: true });
      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function(rect) {
          context.strokeStyle = '#a64ceb';
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
          context.drawImage(mask1, rect.x, rect.y, rect.width, rect.height);
          
        });
      });
     /* var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1); */
    };

