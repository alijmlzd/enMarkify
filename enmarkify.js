!function ($) {

  /* 
   * enMarkify
   * Ali Jamalzadeh - @alijmlzd
   * Detect english words in paragraphs and push them to a <span>.
   */

  $.enMarkify = function(settings){

    // Default Configs
    var config = {
      wrapperHtmlClass : '.paragraph',
      spanHtmlClass    : 'en',
      elementTag       : 'span',
    };

    if (settings) {
      $.extend(config, settings);
    }
    
    $(config.wrapperHtmlClass).each(function(i, v) {
      
      var thisParagraph = $(this);
      
      var words = thisParagraph.html().split(" ");
    
      // Reset non-detected paragraphs
      thisParagraph.html("");
      
      $.each(words, function(index, value) {
        if (value.match(/^[a-zA-Z]/)) {
          
          var newValue = value.replace(value, '<'+config.elementTag+' class="'+config.spanHtmlClass+'">'+value+'</'+config.elementTag+'>');
          
          if (words.length == index) {
            thisParagraph.append(newValue);
          } else {
            thisParagraph.append(newValue+' ');
          }
          
        } else {
          
          if (words.length == index) {
            thisParagraph.append(value);
          } else {
            thisParagraph.append(value+' ');
          }
          
        }
      
      });

    });

    return this;
  };

}(window.jQuery)
