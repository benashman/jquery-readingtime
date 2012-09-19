(function($) {

	$.fn.extend({

		readingTime: function() {

			var defaults = {
				wpm: 200
			}

			var opts = $.extend(defaults, opts);

			return this.each(function(){
				var o = opts;

				var wordCount = $(this).text().split(" ").length;

				$(this).append(wordCount);

			});

		}

	});

})(jQuery);