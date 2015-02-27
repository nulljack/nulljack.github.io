$.getJSON("server_data.json", function(data) {
    var text = "";
    var text_newline = function() {
        if (arguments[0] === 1) {
            text += "<br>"
        } else {
            text += '\n'
        }
    }
    var space_char = " ";
    text += 'Game: ' + data.game;
    text_newline(1);
    text += "Host: " + data.Host.name;
    text_newline(1);
    text += "Maxplayers: " + data.maxplayers;
    text_newline(1);
    text += "Maps;"
    if ((data.maps)[0] === "" && (data.maps).length === 0) {
        text_newline(1);
        text += "[NONE IN THE ARRAY]";
    } else {
        for (var i = 0; i < (data.maps).length; i++) {
            text_newline(1);
            text += "- " + (data.maps)[i]
        }
    }
    $('nav #about_mdl .modal-body').html(text);
    return text;
});

$('nav #about_btn').click(function() {
    $('nav #about_mdl').modal({
        show: true
    })
});
