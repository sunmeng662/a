// 注册部分的随机图片验证码
$(window).ready(function(){
    let random = Math.floor(Math.random()*18+1);
    let src = "../img/check" + random + ".jpg";
    // console.log(random,src)
    $(".ran").attr("src",src)
});
// 注册部分随机图片验证码 点击换一张
$(function(){
    $(".ran").click(function(){
        let random = Math.floor(Math.random()*18+1);
        let src = "../img/check" + random + ".jpg";
        $(this).attr("src",src)
    });
});
// 模态窗 点击关闭且页面蒙层消失
$(function(){
    $('#pop').click(function(){
        $(this).css("display","none");
        $('#mask').css('display','none');
    });
});
// 注册信息正则判断
$(function(){
    $('.tijiaob').click(function(){
        let number = $('.number').val();
        // 判断长度是否为11位且是否为数字
        let rela = /\d{11}/;
        if(!rela.test(number)){
            // 弹窗弹出并整个页面加蒙层
            $('#pop').css('display','block');
            $('#mask').css('display','block');
            $('#pop .zhengze').html("请输入有效的手机号码")
        }else{ 
            // 手机号有效 判断用户名是否为空
            let nameb = $('.nameb').val();
            if(nameb == ''){
                $('#pop').css('display','block');
                $('#mask').css('display','block');
                $('#pop .zhengze').html("用户名不能为空")
            }else{
                // 用户名不为空 判断密码长度（不少于6位）
                let mimab = $('.mimab').val();
                if(mimab.length<6){
                    $('#pop').css('display','block');
                    $('#mask').css('display','block');
                    $('#pop .zhengze').html("密码长度至少6位哦")
                }else{
                    // 判断两次密码输入是否一致
                    let mimaba = $('.mimaba').val();
                    if(mimaba !== mimab){
                        $('#pop').css('display','block');
                        $('#mask').css('display','block');
                        $('#pop .zhengze').html("两次输入密码不一致")
                    }else{
                        // 判断用户是否注册过
                        let val1 = $('.nameb').val();
                        let val2 = $('.mimab').val();
                        if(window.localStorage){
                            if(val1 != localStorage.name){
                                localStorage.name = val1;
                                localStorage.mima = val2;
                                $('#mask').css('display','block');
                                $('#success').css('display','block');
                            }else{
                                $('#pop').css('display','block');
                                $('#mask').css('display','block');
                                $('#pop .zhengze').html("用户名已注册")
                            }
                        }
                    }
                }
            }
            // 注册成功时提示框跳转
            $('#success button').click(function(){
                $('#mask').css('display','none');
                $('#success').css('display','none');
                window.location.href = "denglu.html";
            })
        }
    })
    // 登录切换注册
    $('.deng .zc').click(function(){
        $('.deng .huadong').animate({
            left:'160px'
        },500)
        $('.dlcontent').css('display','none');
        $('.zccontent').css('display','block');
        $('.deng .dl a').css('color','#393B3D');
        $('.deng .zc a').css('color','#00AAEA');
    })
    // 注册切换登录
    $('.deng .dl').click(function(){
        $('.deng .huadong').animate({
            left:'20px'
        },500)
        $('.dlcontent').css('display','block');
        $('.zccontent').css('display','none');
        $('.deng .dl a').css('color','#00AAEA');
        $('.deng .zc a').css('color','#393B3D');
    })
    // 登录信息判断
    $('.dlcontent .tijiao').click(function(){
        let val3 = $('.name').val();
        let val4 = $('.mima').val();
        if(localStorage.name != val3){
            $('#mask').css('display','block');
            $('#go').css('display','block');
        }else{
            var val5 = $('.mima').val();
            if(val5 == ''){
                $('#pop').css('display','block');
                $('#mask').css('display','block');
                $('#pop .zhengze').html("密码名不能为空")
            }else{
                if(val5 !== localStorage.mima){
                    $('#pop').css('display','block');
                    $('#mask').css('display','block');
                    $('#pop .zhengze').html("密码错误")
                }else{
                    window.location.href = "shouye.html";
                }
            }
        }
    })
    $('#go button').click(function(){
        $('#mask').css('display','none');
        $('#go').css('display','none');
        window.location.href = "zhuce.html";
    })
})
