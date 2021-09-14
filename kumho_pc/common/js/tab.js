// $(document).ready(function() {        
// // 키보드 tab 처리//
//             $('li.gnbmenu .depth1').bind('focus', function () {        
//                     $('li.gnbmenu ul').slideDown('normal');
//                     $('.menu_box').slideDown('fast');
//             });
//             $('li.m5 li:last').find('a').bind('blur', function () {        
//                     $('li.gnbmenu ul').slideUp('fast');
//                     $('.menu_box').slideUp('normal');
//             });
// });

$(document).ready(function() {        
        // 키보드 tab 처리//
                    $('li.gnbmenu .depth1').bind('focus', function () {        
                            $('li.gnbmenu ul').slideDown('normal');
                            $('.nav_box').slideDown('fast');
                    });
                    $('li.m5 li:last').find('a').bind('blur', function () {        
                            $('li.gnbmenu ul').slideUp('fast');
                            $('.nav_box').slideUp('normal');
                    });
        });