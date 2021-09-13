$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.specific-tip').tooltip({
        html:true,
        placement:'top',
        trigger:'click'
    });
});