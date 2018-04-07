(function($) {
  $(function() {
    var $window = $(window);
    var $head = $('head');
    var $body = $('body');

    // Disable animations/transitions ...

    // ... until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      setTimeout(function() {
        $body.removeClass('is-loading');
      }, 100);
    });


    // Menu.
    var $menu = $('#menu');
    var $menuopeners = $menu.children('ul').find('.opener');

    // Openers.
    $menuopeners.each(function() {
      var $this = $(this);

      $this.on('click', function(event) {
        // Prevent default.
        event.preventDefault();

        // Toggle.
        $menuopeners.not($this).removeClass('active');
        $this.toggleClass('active');

        // Trigger resize (sidebar lock).
        $window.triggerHandler('resize.sidebar-lock');
      });
    });
  });
})(window.jQuery);
