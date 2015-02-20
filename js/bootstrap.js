function bootstrap_custom1(elem) {
  // to of made this crap into a js string I had to go to http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/ !
    var bootstrap = "";
    var newline_html = function() {
        bootstrap += "\n";
    }
    bootstrap += "<nav class=\"navbar navbar-default\">";
    newline_html();
    bootstrap += "<div class=\"navbar-header\">";
    newline_html();
    bootstrap += "<button data-target=\"#bs-example-navbar-collapse-1\" data-toggle=\"collapse\" type=\"button\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation<\/span><span class=\"icon-bar\"><\/span><span class=\"icon-bar\"><\/span><span class=\"icon-bar\"><\/span><\/button><a href=\"#\" class=\"navbar-brand\"><span>»<\/span>NavyCommander<span>«<\/span><\/a>";
    newline_html();
    bootstrap += "<\/div>";
    newline_html();
    bootstrap += "<div id=\"bs-example-navbar-collapse-1\" class=\"collapse navbar-collapse\">";
    newline_html();
    bootstrap += "<ul class=\"nav navbar-nav\">";
    newline_html();
    bootstrap += "<li class=\"dropdown\"><a data-toggle=\"dropdown\" href=\"#\" class=\"dropdown-toggle\">Dropdown<strong class=\"caret\"><\/strong><\/a>";
    newline_html();
    bootstrap += "<ul class=\"dropdown-menu\">";
    newline_html();
    bootstrap += "<li><a href=\"#\" onclick=\"location = location.origin\">HOME<\/a><\/li>";
    newline_html();
    bootstrap += "<li><a href=\"#\" onclick=\"location = location.origin+&quot;\/&quot;+&quot;About&quot;+&quot;\/&quot;\">About<\/a><\/li>";
    newline_html();
    bootstrap += "<li><a href=\"#\" onclick=\"location = location.origin+&quot;\/&quot;+&quot;Gaming&quot;+&quot;\/&quot;\">Gaming<\/a><\/li>";
    newline_html();
    bootstrap += "<\/ul>";
    newline_html();
    bootstrap += "<\/li>";
    newline_html();
    bootstrap += "<\/ul>";
    newline_html();
    bootstrap += "<ul class=\"nav navbar-nav navbar-right\">";
    newline_html();
    bootstrap += "<li><a href=\"#\">_BLANK_<\/a><\/li>";
    newline_html();
    bootstrap += "<\/ul>";
    newline_html();
    bootstrap += "<\/div>";
    newline_html();
    bootstrap += "<\/nav>";
    $(elem).text(html)
}
