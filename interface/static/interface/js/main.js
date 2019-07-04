// window.onload = function() {
//   app = new App();//new Radius();
//   device = new Device(app);
//
//   flip = function() {
//     phone = document.getElementById('phone');
//     if (phone.classList.contains('flipped')) {
//       phone.classList.remove('flipped');
//     } else {
//       phone.classList.add('flipped') ;
//     }
//   }
//
//   clickStart = undefined;
//   document.addEventListener('mousedown', function() {
//     console.log('mousedown', clickStart);
//     clickStart = Date.now();
//   });
//   document.addEventListener('mouseup', function() {
//     console.log('mouseup', clickStart);
//     clickStop = Date.now();
//     clickDuration = clickStop - clickStart
//     if (clickDuration > 500) {
//       console.log('session.start()');
//       flip();
//       device.longSqueeze();
//     } else {
//       device.squeeze();
//     }
//   });
//   // var input = document.getElementById('query');
//   // parseTree.process(input.value);
//   //
//   // input.focus();
//   // input.selectionStart = input.value.length;
//   // input.selectionEnd = input.value.length;
//
//   // don't update constantly if timeOuts overlap
//   // var timeOuts = 0;
//   // document.oninput = function(event) {
//   //   var updated = false;
//   //   if (timeOuts == 0) {
//   //     parseTree.process(input.value);
//   //     var updated = true;
//   //   }
//   //   timeOuts += 1
//   //   setTimeout(function() {
//   //     timeOuts -= 1;
//   //     if (timeOuts == 0 && !updated) parseTree.process(input.value);
//   //   }, 100)
//   // };
//
//   // update at intervals if timeOuts overlap
//   // setInterval(function() {
//   //   if (timeOuts > 1) parseTree.process(input.value)
//   // }, 100);
// }
