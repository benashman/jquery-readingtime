/*
 *	jquery.readingTime.js
 * 	Display an estimated reading time for your blog posts etc.
 * 	
 * 	@benashman
 *  
 */

(function($) {

	$.fn.readingTime = function() {

		//Pre-define common reading speeds
		var slow 	= 150;
		var average = 200;
		var fast 	= 250;

		//Set deafults
		var defaults = {

			//Set read-rate - Deafult is national average
			wordsPerMinute: average,

			//Set a prefix message if required.
			prefix: "Reading Time: ",

			//Set the MMSS separator - Default is colon
			separator: ":",

			//Set the container class
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
			var minutes = Math.floor(wordCount / o.wordsPerMinute);
			var seconds = Math.floor(wordCount % o.wordsPerMinute / (o.wordsPerMinute / 60));

			//Prettify estimate
			var estimate = 	o.prefix;

				//Format minutes
				estimate += (minutes <= 9 ? "0" : "");
				estimate += minutes; 

				estimate += o.separator; 

				//Format seconds
				estimate += (seconds <= 9 ? "0" : "");
				estimate += seconds;

			//Display estimated reading time for article
			$this.append('<div class="' + o.containerClass + '"><span>' + estimate + '</span></div>');
		});

	};

})(jQuery);