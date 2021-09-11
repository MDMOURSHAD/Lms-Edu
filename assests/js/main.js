
			// Preloader 
			function load() {
				var loading = document.getElementsByClassName('preloader');
				loading[0].style.display = "none";
			}

			$(document).ready(function() {

				// TOGGLE SEARCH BAR
				$('.search-main').click(function() {
					$('.search-form-main').toggleClass('active-class');
					$('.search-field').focus();
				});

				// Sticky Menu
				$(window).scroll(function() {
					if($(this).scrollTop() > 100) {
						$('.nav').addClass('sticky');
					} else {
						$('.nav').removeClass('sticky');
					}
				});

				// Scroll to Top
				$(window).scroll(function() {
					if($(this).scrollTop() > 100) {
						$('.scroll-top').fadeIn();
					} else {
						$('.scroll-top').fadeOut();
					}
				});
				
				// Magnific Popup Video
				$('.free_video_popup').magnificPopup({
					type: 'iframe',
					// other options
					iframe: {
						markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',
						patterns: {
							youtube: {
								index: 'youtube.com/',
								id: 'v=',
								src: 'https://www.youtube.com/embed/%id%'
							},
						},
						srcAction: 'iframe_src',
					}
				});
			});