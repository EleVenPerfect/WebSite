;
"use strict";
(function($) {
	$(function() {
		$('a[data-role=open-door]').click(function() {
			var id = $(this).data('id');
			var target = $(this).attr('target');
			if (target == '_blank') {
				window.open('go/' + id);
			} else {
				window.location.href = 'go/' + id;
			}
			return false;
		});
	});
})(jQuery);