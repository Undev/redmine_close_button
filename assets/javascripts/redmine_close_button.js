document.observe('dom:loaded', function()
{
	var ID_CLOSED = 5;
	var ID_REJECTED = 6;

	// redmine uses prototype so use it.

	var s = $('issue_status_id');
	if (s === null)
	{
		return;
	}
	var options = s.childNodes;
	var needCloseButton = false;
	for (var i = options.length - 1; i >= 0; i--)
	{
		var option = options[i];
		var v = parseInt(option.value, 10);
		if (v === ID_REJECTED)
		{
			if (option.selected)
			{
				needCloseButton = false;
				break;
			}
		}
		if (v === ID_CLOSED)
		{
			if (option.selected)
			{
				needCloseButton = false;
				break;
			}
			else
			{
				needCloseButton = true;
			}
		}
	}
	if (!needCloseButton)
	{
		return;
	}
	var f = $('issue-form');
	var area = $$('div.content>div.contextual')[0];
	if (f === null || area === null)
	{
		return;
	}
	var closer = function(e)
	{
		s.value = ID_CLOSED;
		f.submit();
	};
	var closeButtons = $$('a.redmine-close-button');
	for (var i = closeButtons.length - 1; i >= 0; i--)
	{
		var closeButton = closeButtons[i];
		closeButton.style.display = 'inline';
		closeButton.observe('click', closer);
	}
});
