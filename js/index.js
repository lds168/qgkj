$("#RYZS  .bGcol").click(e=>{
   var $wy= $("#RYZS>.col-md-9>.cs1");
    $wy.removeClass("cs1").siblings().addClass("cs1");
    e.preventDefault();
});
$("[data-toggle=shanye]").click(e=>{
    $("#RYZS .col-md-9>.row:first-child").removeClass("cs1").siblings().addClass("cs1");
    e.preventDefault();
});
$("[data-toggle=jinrong]").click(e=>{
    $("#RYZS .col-md-9>.row:last-child").removeClass("cs1").siblings().addClass("cs1");
    e.preventDefault();
});

$( "span.menu" ).click(function() {
    $( ".top-menu" ).slideToggle( "slow", function() {
    });
});