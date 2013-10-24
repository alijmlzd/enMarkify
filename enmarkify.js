!function ($) {

  /* 
   * enMarkify
   * Ali Jamalzadeh - @alihaa
   * Detect english words in paragraphs and push them to a <span>.
   */

  $.enMarkify = function(settings){

    // Default Configs
    var config = {
      'wrapperHtmlClass' : '.paragraph',
      'spanHtmlClass'    : 'en',
    };

    if (settings) {
      $.extend(config, settings);
    }


    var words = $(config.wrapperHtmlClass).html().split(" ");
    
    var newWords = [];
    
    // Reset non-detected paragraphs
    $(config.wrapperHtmlClass).html("");
    
	  $.each(words, function(index, value) {
	  	if (value.match(/\b\w+/g)) {
        
			  var newValue = value.replace(value, '<span class="'+config.spanHtmlClass+'">'+value+'</span>');
        
        if (words.length == index) {
          $(config.wrapperHtmlClass).append(newValue);
        } else {
          $(config.wrapperHtmlClass).append(newValue+' ');
        }
        
      } else {
        
        if (words.length == index) {
          $(config.wrapperHtmlClass).append(value);
        } else {
          $(config.wrapperHtmlClass).append(value+' ');
        }
        
      }
	  });


    return this;
  };

}(window.jQuery)


$.enMarkify();