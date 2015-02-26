if (window.jQuery !== undefined) {
    $('#heading1').text('404');
    $('#heading2').text('- Page not found -');
    $('#heading1,#heading2').css('text-align', 'center');
    $('.path').text(this.window.location.pathname);
}
