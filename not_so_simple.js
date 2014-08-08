casper.test.begin("CSS selector for selected option", 2, function(test) {
  var cwd = require('fs').workingDirectory;
  var uri = 'file://' + encodeURI(cwd + '/so_simple.html');

  casper.start(uri, function() {
    var page = this;
    casper.waitFor(function() {
      return page.evaluate(function() {
        // Prove that JQuery supports CSS selector for selected option
        return $('#payment_interval option[value="annual"]:selected').length > 0;
      });
    }, function() {
      jquery_finds_selected_option = page.evaluate(function() { return $('#payment_interval option[value="annual"]:selected').length > 0; });
      test.assert(jquery_finds_selected_option, 'JQuery finds selected option');
      test.assertExists('#payment_interval option[value="annual"]:selected', 'CasperJS finds selected option');
      test.done();
    });
  });
});

casper.run();
