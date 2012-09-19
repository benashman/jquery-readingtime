/*
 *	jquery.readingTime.js
 * 	Display an estimated reading time for your blog posts etc.
 * 	
 * 	@benashman
 *  
 */

(function($) {

	$.fn.readingTime = function() {

		//Set deafults
		var defaults = {
			wpm: 200,
			prefix: "Reading Time: ",
			containerClass: "reading-time"
		}

		//Extend default options with those provided
		var options = $.extend(defaults, options);

		//Apply to each article
		return this.each(function() {

			var $this = $(this);
			var o = options;

			//Get article word-count
			var wordCount = $this.text().split(" ").length;

			//Calculate estimated reading time based on default/user WPM rate
			var minutes = Math.floor(wordCount / o.wpm);
			var seconds = Math.floor(wordCount % o.wpm / (o.wpm / 60));

			//Prettify estimate
			var estimate = 	o.prefix;
				estimate += (minutes <= 9 ? "0" : "");
				estimate += minutes; 
				estimate += ":"; 
				estimate += (seconds <= 9 ? "0" : "");
				estimate += seconds;

			//Display estimated reading time for article
			$this.append('<div class="' + o.containerClass + '"><span>' + estimate + '</span></div>');
		});

	};

})(jQuery);