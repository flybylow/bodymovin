var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data.json'
})

var illustrationContainer = document.getElementById('illustrationContainer');

var triggerContainer = document.getElementById('triggerContainer');

var triggerContainer2 = document.getElementById('triggerContainer2');

var illustrationAnim = bodymovin.loadAnimation({
  container: illustrationContainer,
  animationData: illustrationAnimData,
  renderer: 'svg',
  loop: false,
  autoplay: false
});

var buttonAnim = bodymovin.loadAnimation({
  container: triggerContainer,
  animationData: buttonAnimData,
  renderer: 'svg',
  loop: false,
  autoplay: false
});

triggerContainer.addEventListener('click', function() {
	/*illustrationAnim.goToAndPlay(0, true);*/
	illustrationAnim.playSegments([30,52],true);
});

triggerContainer2.addEventListener('click', function() {
	/*illustrationAnim.goToAndPlay(0, true);*/
	illustrationAnim.playSegments([52,92],true);
});

triggerContainer.addEventListener('mouseenter', function() {
	buttonAnim.setDirection(1);
	buttonAnim.play();
});


triggerContainer.addEventListener('mouseleave', function() {
	buttonAnim.setDirection(-1);
	buttonAnim.play();
});
