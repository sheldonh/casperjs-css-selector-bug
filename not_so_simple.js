casper.on('remote.message', function(msg) { this.echo('remote message caught: ' + msg); });

casper.test.begin("CSS selector for selected option", 2, function(test) {
  var cwd = require('fs').workingDirectory;
  var uri = 'file://' + encodeURI(cwd + '/so_simple.html');

  casper.start(uri, function() {
    var page = this;

    test.assertExists({
      type: 'xpath',
      path: '//select[@id="payment_interval"]/option[@selected and @value="annual"]',
    }, 'CasperJS XPath selector finds selected option');

    var jquery_finds_selected_option = page.evaluate(function() {
      return $('#payment_interval option[value="annual"]:selected').length > 0;
    });
    test.assert(jquery_finds_selected_option, 'JQuery CSS selector finds selected option');

    test.assertExists('#payment_interval option[value="annual"]:selected', 'CasperJS CSS selector finds selected option');

    test.done();
  });
});

casper.run();
