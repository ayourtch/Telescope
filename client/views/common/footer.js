Template.footer.helpers({
	footerCode: function(){
		return getSetting('footerCode');
	}
	,analyticsCode: function(){
		return getSetting('analyticsCode');
	}
	,tlkioChannel: function(){
		return getSetting('tlkioChannel');
	}
});

Template.footer.rendered = function(){


}

Template.footer.events = {
	'click .open-chat': function(e){
		e.preventDefault();
		if(!window.chat_loaded){
			if(tlkioChannel=getSetting('tlkioChannel')){
			    var target_element  = document.getElementById('tlkio'),
			        channel_name    = target_element.getAttribute('data-channel'),
			        custom_css_path = target_element.getAttribute('data-theme'),
			        iframe          = document.createElement('iframe');

			    var iframe_src = 'http://embed.tlk.io/' + channel_name;

			    if (custom_css_path && custom_css_path.length > 0) {
			      iframe_src += ('?custom_css_path=' + custom_css_path);
			    }

			    iframe.setAttribute('src', iframe_src);
			    iframe.setAttribute('width', '100%');
			    iframe.setAttribute('height', '100%');
			    iframe.setAttribute('frameborder', '0');

			    target_element.appendChild(iframe);
		    }
		    window.chat_loaded=true;
		}
		$('body').toggleClass('chat-open');
		$('#tlkio').toggleClass('open');
	}
}