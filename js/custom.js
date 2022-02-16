$(document).ready(function () {
    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function () {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    $(window).scroll(function(){
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top',navHeight+"px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top',0);
        }
    });
    $('.jb_front_nav_close button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    // select2 dropdown set in all form control and placeholder
    var placeholder = $('.form-control-select2').data('placeholder');
    // var abc = "<span class='text-yellow'>*</span>";
    // var placcc = placeholder.append(abc);
    // console.log(placcc,"rw5rwsdsfv");
    
    // console.log(placeholder,"Fssdfgttttttt");
    
    
    $('.form-control-select2').select2({
        placeholder :placeholder,
    });
    // select2 dropdown set in all form control and placeholder
    
    //SET MIN HEIGHT OF PAGE CONTENT

    // Display alert message after hiding paragraphs
    $(".hide-btn").click(function () {
        $(".search-band").hide("fast", function () {
            // Code to be executed
        });
    });

    // Display alert message after showing paragraphs
    $(".show-btn").click(function () {
        $(".search-band").show("fast", function () {
            // Code to be executed
            $('#dish_name').focus();
        });
    });
    // $(".hide-quantity").click(function(){
    //     $(".quantity").hide("slow", function(){
    //     });
    // });

    // Display alert message after showing paragraphs
    // $(".show-quantity").click(function(){
    //     $(".quantity").show("slow", function(){
    //         $(".show-quantity").hide();

    //     });
    // });
    $(".show-quantity").click(function () {
        $(".show-quantity").hide();
        $(".quantity").show();
    });
    $(".hide-quantity").click(function () {
        $(".show-quantity").show();
        $(".quantity").hide();
    });


    // ------------------------------------ VIDEO JS START ------------------------------------

    // ------------------- CLICK EVENTS OF VIDEO POPUP START -------------------
    // // VIDEO PLAY/PAUSE BUTTON
    // $(".play-btn").click(function () {
    //     videoPlayPause();
    //     console.log("play-btn click called");
    // });

    // // VIDEO CLICK EVENT
    // $(".myVideo").click(function () {
    //     videoPlayPause();
    //     console.log("video click called");
    // });

    // // VIDEO PLAY ICON CLICK EVENT
    // $(".video-icon-content").click(function () {
    //     myVideo.play();
    //     console.log("on video play icon click called");
    //     $(".video-icon-content").css('display', 'none');
    //     $(".play-btn > i").addClass('pauseicon');
    //     $(".play-btn > i").removeClass('playicon');
    // });

    // // POPUP CLOSE BUTTON CLICK EVENT
    // $(".popupclosebutton").click(function () {
    //     myVideo.pause();
    //     console.log("popup close called click called");
    //     $(".play-btn > i").addClass('playicon');
    //     $(".play-btn > i").removeClass('pauseicon');
    // });

    // ------------------- CLICK EVENTS OF VIDEO POPUP END -------------------

    var vid = $('.myVideo')[0];

    vid.ontimeupdate = function () {
        var percentage = (vid.currentTime / vid.duration) * 100;
        $(".custom-seekbar span").css("width", percentage + "%");
        $(".current-video-time").text(parseInt(vid.currentTime));
        // 
        // function printCurrent() {
        var mind = vid.currentTime % (60 * 60);
        var minutes = Math.floor(mind / 60);
        if (minutes <= 9) {
            minutes = "0" + minutes;
        }
        var secd = mind % 60;
        var seconds = Math.ceil(secd);
        if (seconds <= 9) {
            seconds = "0" + seconds;
        }
        $(".current-video-time").text(minutes + ":" + seconds);
        // };
    };

    $(".custom-seekbar").on("click", function (e) {
        var offset = $(this).offset();
        var left = (e.pageX - offset.left);
        var totalWidth = $(".custom-seekbar").width();
        var percentage = (left / totalWidth);
        var vidTime = vid.duration * percentage;
        vid.currentTime = vidTime;
    });

    // ------------------------------------ VIDEO JS END ------------------------------------

});

function videoPlayPause() {
    if (myVideo.paused) {
        myVideo.play();
        $(".play-btn > i").addClass('pauseicon');
        $(".play-btn > i").removeClass('playicon');
        var vid = $('.myVideo')[0];
        var mind = vid.duration % (60 * 60);
        var minutes = Math.floor(mind / 60);
        var secd = mind % 60;
        var seconds = Math.ceil(secd);
        $(".duration-video-time").text(minutes + ":" + seconds);
        $(".video-icon-content").css('display', 'none');
    } else if (myVideo.play) {
        myVideo.pause();
        $(".play-btn > i").addClass('playicon');
        $(".play-btn > i").removeClass('pauseicon');
        $(".video-icon-content").css('display', 'block');
    }
}