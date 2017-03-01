$(document).ready(function() {
    console.log( "ready!" );
    var facts = $("#fact1, #fact2, #fact3, #fact4, #fact5")
    
    $(facts).click(function() {
          $(this).fadeOut("slow");
           
       }
    );
    
    $("#fact1").click(function() {
        $("#infofact1").fadeIn("1500");
    });
    
    $("#fact2").click(function() {
        $("#infofact2").fadeIn("1500");
    });
    
    $("#fact3").click(function() {
        $("#infofact3").fadeIn("1500");
    });
    
    $("#fact4").click(function() {
        $("#infofact4").fadeIn("1500");
    });
    
    $("#fact5").click(function() {
        $("#infofact5").fadeIn("1500");
    });


    
    $("#infofact1 > #mbox1").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#infofact1 > #fbox1").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#infofact1 > #mbox1").click(function() {
        $("#infofact1 > #fact1M").fadeIn("500")
    });

    $("#infofact1 > #fbox1").click(function() {
        $("#infofact1 > #fact1F").fadeIn("500")
    });





    $("#infofact1 > #malechart").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#infofact1 > #femalechart").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#malechart").click(function() {
        $("#infofact1 > #fact1num1").fadeIn("500")
    });

    $("#femalechart").click(function() {
        $("#infofact1 > #fact1num2").fadeIn("500")
    });





    $("#infofact2 > #mbox2").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#infofact2 > #fbox2").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#infofact2 > #mbox2").click(function() {
        $("#infofact2 > #fact2M").fadeIn("500")
    });

    $("#infofact2 > #fbox2").click(function() {
        $("#infofact2 > #fact2F").fadeIn("500")
    });


    $("#infofact2 > #fact2n6").click(function() { 
        $("#f6 > .fact2-4").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#m6 > .fact2-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per1m").delay(700).fadeIn("fast")
        $("#fact2per1f").delay(700).fadeIn("fast")
    });
    
    $("#infofact2 > #fact2n12").click(function() { 
        $("#f12 > .fact2-4").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#m12 > .fact2-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per2m").delay(1900).fadeIn("fast")
        $("#fact2per2f").delay(1500).fadeIn("fast")
    });
    
    $("#infofact2 > #fact2n18").click(function() { 
        $("#f18 > .fact2-4").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#m18 > .fact2-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per3m").delay(4100).fadeIn("fast")
        $("#fact2per3f").delay(2700).fadeIn("fast")
    });
    
    $("#infofact2 > #fact2n25").click(function() { 
        $("#f25 > .fact2-4").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#m25 > .fact2-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per4m").delay(1900).fadeIn("fast")
        $("#fact2per4f").delay(1300).fadeIn("fast")
    });
    
    $("#infofact2 > #fact2n35").click(function() { 
        $("#f35 > .fact2-4").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#m35 > .fact2-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per5m").delay(2300).fadeIn("fast")
        $("#fact2per5f").delay(2100).fadeIn("fast")
    });
    
    $("#infofact2 > #fact2n50").click(function() { 
        $("#f50 > .fact2-4").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#m50 > .fact2-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per6m").delay(700).fadeIn("fast")
        $("#fact2per6f").delay(1300).fadeIn("fast")
    });
    
    
    $("#infofact3 > #fact2socialmedia").click(function() { 
        $("#fan40 > .fact3-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#edm67 > .fact3-6").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per1m2").delay(2900).fadeIn("fast")
        $("#fact2per1f2").delay(1700).fadeIn("fast")
    });
    
    $("#infofact3 > #fact2online").click(function() { 
        $("#fan34 > .fact3-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#edm46 > .fact3-6").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per2m2").delay(2100).fadeIn("fast")
        $("#fact2per2f2").delay(1500).fadeIn("fast")
    });
    
    $("#infofact3 > #fact2radiotv").click(function() { 
        $("#fan57 > .fact3-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#edm42 > .fact3-6").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per3m2").delay(1900).fadeIn("fast")
        $("#fact2per3f2").delay(2300).fadeIn("fast")
    });
    
    $("#infofact3 > #fact2print").click(function() { 
        $("#fan33 > .fact3-5").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#edm23 > .fact3-6").each(function ( i ) {
            $(this).delay( i * 200 ).fadeIn("fast") 
        });
        $("#fact2per4m2").delay(900).fadeIn("fast")
        $("#fact2per4f2").delay(1300).fadeIn("fast")
    });
    
    
    
    
    $("#infofact4 > #red").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#infofact4 > #blue").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });
    
    $("#infofact4 > #grey").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#red").click(function() {
        $("#infofact4 > #fact4rednum").delay(500).fadeIn("500")
        $("#infofact4 > #fact4festtxt").fadeIn("500")
    });

    $("#blue").click(function() {
        $("#infofact4 > #fact4bluenum").delay(500).fadeIn("500")
        $("#infofact4 > #fact4musictxt").fadeIn("500")
    });
    
    $("#grey").click(function() {
        $("#infofact4 > #fact4greynum").delay(500).fadeIn("500")
        $("#infofact4 > #fact4othertxt").fadeIn("500")
    });
    
    
    
    
    $("#infofact5 > #guetta").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#infofact5 > #calvin").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });
    
    $("#infofact5 > #aoki").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });
    
    $("#infofact5 > #tiesto").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });
    
    $("#infofact5 > #skrillex").hover(function () {
       $(this).animate({'opacity':'0.5'}, 100);
    },
    function (){
       $(this).animate({'opacity':'1'}, 100);
    });

    $("#skrillex").click(function() {
        $("#infofact5 > #fact5rank4").fadeIn("500")
    });

    $("#tiesto").click(function() {
        $("#infofact5 > #fact5rank3").fadeIn("500")
    });
    
    $("#aoki").click(function() {
        $("#infofact5 > #fact5rank4").fadeIn("500")
    });
    
    $("#calvin").click(function() {
        $("#infofact5 > #fact5rank1").fadeIn("500")
    });
    
    $("#guetta").click(function() {
        $("#infofact5 > #fact5rank2").fadeIn("500")
    });
    
    
    
    
    
    
    
});