$(document).ready(function() {
	var ID_CLOSED = 5, ID_REJECTED = 6;

	// Redmine uses jQuery so use it.

	var s = $('#issue_status_id');
	if (!s[0]) {
		return;
	}
	var options = s[0].childNodes;
	var needCloseButton = false;
	for (var i = options.length - 1; i >= 0; i--) {
		var option = options[i];
		var v = parseInt(option.value, 10);
		if (v === ID_REJECTED) {
			if (option.selected) {
				needCloseButton = false;
				break;
			}
		}
		if (v === ID_CLOSED) {
			if (option.selected) {
				needCloseButton = false;
				break;
			} else {
				needCloseButton = true;
			}
		}
	}
	if (!needCloseButton) {
		return;
	}
	var f = $('#issue-form');
	var all_areas = $('div#content > div.contextual');
	var areas = [];
	for (var ai = 0; ai < all_areas.length; ai++) {
		if ($(all_areas[ai]).find('a.icon').length > 0) {
			areas.push($(all_areas[ai]));
		}
	}
	all_areas = null;
	if (!f[0] || !areas.length) {
		return;
	}
	var done_ratio = $('#issue_done_ratio');
	var closer = function(e) {
		s.value = ID_CLOSED;
		if (done_ratio) {
			done_ratio[0].value = 100;
		}
		f.submit();
	};
	var closeButtonTemplate = $('a.redmine-close-button');
	for (ai = 0; ai < areas.length; ai++) {
		var area = areas[ai];
		var closeButton = closeButtonTemplate
			.clone()
			.css('display', 'inline')
			.click(closer);

		var delButton = area.find('a.icon-del');
		if (delButton[0]) {
			closeButton.insertBefore(delButton);
		} else {
			area.append(closeButton);
		}
	}
});

