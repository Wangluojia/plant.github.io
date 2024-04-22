// //初始化controller
// var controller = new ScrollMagic.Controller()

// //滚动位置确定
// var scene = new ScrollMagic.Scene({
//     triggerElement: '.text',
//     duration:100
// }).setTween('#flower6 img', {
//     maxWidth: '600px',
//     opacity: 0.9,
//     top: '0%',
//     left: '100%',
// }).addTo(controller)



// //第一个进入动画
// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".flower6 img", {
//     scale: 1,
//     x: 0,
//     y: 20,
//     scrollTrigger: {
//       trigger: ".flower6 ",
//       start: "top bottom", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
//       end: "bottom top", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
//       scrub: true, // 表示动画可以重复执行改成false表示只执行一次
//       // markers: true, // 绘制开始位置和结束位置的线条
//       pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
//     },
//   });

// //染料植物花丛和文字进入动画
 
//   gsap.to(".huacong img", {
//       scale: 1,
//       x: 0,
//       y: 900,
//       scrollTrigger: {
//         trigger: ".huacong ",
//         start: "top bottom", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
//         end: "bottom top", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
//         scrub: true, // 表示动画可以重复执行改成false表示只执行一次
//         // markers: true, // 绘制开始位置和结束位置的线条
//         pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
//       },
//     });
  
//     gsap.to(".text1", {
//       opacity:1,
//       scrollTrigger: {
//         trigger: ".text1 ",
//         start: "top top", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
//         scrub: true, // 表示动画可以重复执行改成false表示只执行一次
//         // markers: true, // 绘制开始位置和结束位置的线条
//         pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
//       },
//     });

// //染料花丛信息可视化交互动画(触点)
// $(".chudian").mouseenter(function(){
//   $(".chudian-text").fadeIn(400);
// })
// $(".chudian").mouseleave(function(){
//   $(".chudian-text").hide();
// })



// // part2 背景更换部分
// gsap.to(".part2", {
//   opacity: 1,
//   scrollTrigger: {
//     trigger: ".part2",
//     start: "top top",
//     end: "240%", // 向下滚动 240% 距离时结束
//     scrub: true, // 表示动画可以重复执行改成false表示只执行一次
//     //   markers: true, //  绘制开始位置和结束位置的线条
//     pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
//   },
// });

// gsap.to(".blue-bg", {
//   height: "100%",
//   ease: "expo-out",
//   scrollTrigger: {
//     trigger: ".blue-bg",
//     scrub: true,
//     //   markers: true,
//   },
// });
// gsap.to(".black-bg", {
//   height: "100%",
//   scrollTrigger: {
//     trigger: ".blue-bg",
//     start: "top top",
//     end: "+1200",
//     scrub: true,
//     //   markers: true,
//   },
// });



// // 初始化controller
// var controller = new ScrollMagic.Controller()
// var scene = new ScrollMagic.Scene({
//       triggerElement: '.yunyun',
//       duration: 300
//   }).setTween('.yunyun img', {
//       y:30
//   }).addTo(controller)

//   var scene = new ScrollMagic.Scene({
//     triggerElement: '.yun2',
//     duration: 300
// }).setTween('.yun2 img', {
//     y:30
// }).addTo(controller)


// //纤维植物第一幕动态跟随
// var scene = new ScrollMagic.Scene({
//   triggerElement: '.xianwei',
//   duration: 300
// }).setTween('.xianwei img', {
//   y:0
// }).addTo(controller)



// // 图案选项点击事件
// $(".option").on("click",function(){
//   // 全部选项移除active样式
//   $(".option").removeClass("active");
//   // 为当前项添加active样式
//   $(this).addClass("active");
//   // 获取当前项下的图片地址
//   let pattern=$(this).find("img").attr("src");
//   if(!pattern){
//       // 没有图案 覆盖层渐隐
//       $(".buliao-overlay").fadeOut();
//   }else{
//       // 有图案 先把覆盖层隐藏
//       $(".buliao-overlay").css("display","none");
//       // 设置覆盖层图案
//       $(".buliao-overlay-pattern").css("background-image","url("+pattern+")");
//       // 覆盖层渐显
//       $(".buliao-overlay").fadeIn();
//   }
// })

//第一幕进入动画
gsap.registerPlugin(ScrollTrigger);
gsap.to(".flower6 img", {
    scale: 1.2,
    x: 30,
    y: 60,
    scrollTrigger: {
      trigger: ".flower6 ",
      start: "top bottom", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
      end: "bottom top", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
      scrub: true, // 表示动画可以重复执行改成false表示只执行一次
      // markers: true, // 绘制开始位置和结束位置的线条
      pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
    },
  });



// 第三幕词频转场动画
gsap.to(".cipinbg img", {
  scale: 1,
  x:-260,
  y:800,
  scrollTrigger: {
    trigger: ".cipinbg ",
    start: "top bottom", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
    end: "bottom top", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    // markers: true, // 绘制开始位置和结束位置的线条
    pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
  },
});


// 第三幕词频转场动画
gsap.to(".sang img", {
  scale:2,
  opacity:1,
  y:100,
  scrollTrigger: {
    trigger: ".sang ",
    start: "bottom bottom", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
    end: "top top", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    // markers: true, // 绘制开始位置和结束位置的线条
    pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
  },
});

//纤维植物第一幕动态跟随
var controller = new ScrollMagic.Controller()
var scene = new ScrollMagic.Scene({
  triggerElement: '.sang-tree',
  duration: 300
}).setTween('.sang-tree img', {
  y:0
}).addTo(controller)

//信息可视化交互动画(part2触点)
$(".can-chudian").mouseenter(function(){
  $(".can01").fadeIn(400);
})
$(".can-chudian").mouseleave(function(){
  $(".can01").hide();
})

$(".dama-chudian").mouseenter(function(){
  $(".dama01").fadeIn(400);
})
$(".dama-chudian").mouseleave(function(){
  $(".dama01").hide();
})

$(".zhuma-chudian").mouseenter(function(){
  $(".zhuma01").fadeIn(400);
})
$(".zhuma-chudian").mouseleave(function(){
  $(".zhuma01").hide();
})



gsap.to(".huacong img", {
  scale: 1,
  x: -10,
  y: 20,
  scrollTrigger: {
    trigger: ".huacong ",
    start: "top bottom", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
    end: "bottom bottom", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    // markers: true, // 绘制开始位置和结束位置的线条
    pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
  },
});


// part2 背景更换部分
gsap.to(".part4", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".part4",
    start: "top top",
    end: "240%", // 向下滚动 240% 距离时结束
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    //   markers: true, //  绘制开始位置和结束位置的线条
    pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
  },
});

gsap.to(".blue-bg", {
  height: "100%",
  ease: "expo-out",
  scrollTrigger: {
    trigger: ".blue-bg",
    scrub: true,
    //   markers: true,
  },
});
gsap.to(".black-bg", {
  height: "100%",
  scrollTrigger: {
    trigger: ".blue-bg",
    start: "top top",
    end: "+1200",
    scrub: true,
    //   markers: true,
  },
});


$(".yujin-chudian").mouseenter(function(){
  $(".yujin01").fadeIn(400);
})
$(".yujin-chudian").mouseleave(function(){
  $(".yujin01").hide();
})

// // 沤麻卡片 触碰显示隐藏交互
// // 打麻
// $(".gema").mouseenter(function(){
//   $(".dama-card").fadeIn(400);
// })
// $(".gema").mouseleave(function(){
//   $(".dama-card").hide();
// })
// // 挽麻团
// $(".ouma2").mouseenter(function(){
//   $(".wanmatuan").fadeIn(400);
// })
// $(".ouma2").mouseleave(function(){
//   $(".wanmatuan").hide();
// })
// // 刷浆
// $(".ouma3").mouseenter(function(){
//   $(".shuajiang").fadeIn(400);
// })
// $(".ouma3").mouseleave(function(){
//   $(".shuajiang").hide();
// })
// // bianzhi
// $(".ouma4").mouseenter(function(){
//   $(".bianzhi").fadeIn(400);
// })
// $(".ouma4").mouseleave(function(){
//   $(".bianzhi").hide();
// })

// 割麻交互卡片
const image = document.getElementById('dama02');

        document.addEventListener('mousemove', function(event) {
            const mouseX = event.clientX;
            const windowWidth = window.innerWidth;

            // 计算鼠标相对于窗口中心的偏移量
            const offsetX = mouseX - windowWidth / 4;

            // 根据偏移量计算旋转角度
            const rotateAngle = offsetX / windowWidth * 60; // 设置一个旋转角度范围

            // 应用旋转角度到图片元素上
            image.style.transform = `translate(-50%, -50%) rotateY(${rotateAngle}deg)`;
        });
        
 const gemaButton = document.getElementById('gema');
const dama02Element = document.getElementById('dama02');
      
        // 定义初始显示状态变量
        let isVisible = false;
      
        // 点击事件监听器
        gemaButton.addEventListener('click', function() {
          // 切换元素显示状态
          isVisible = !isVisible;
      
          // 根据状态设置元素显示或隐藏
          if (isVisible) {
            dama02Element.style.display = 'block';
          } else {
            dama02Element.style.display = 'none';
          }
        });


// 挽麻团交互卡片
const image1 = document.getElementById('wanmatuan02');

    document.addEventListener('mousemove', function(event) {
            const mouseX = event.clientX;
            const windowWidth = window.innerWidth;

            // 计算鼠标相对于窗口中心的偏移量
            const offsetX = mouseX - windowWidth / 4;

            // 根据偏移量计算旋转角度
            const rotateAngle = offsetX / windowWidth * 60; // 设置一个旋转角度范围

            // 应用旋转角度到图片元素上
            image1.style.transform = `translate(-50%, -50%) rotateY(${rotateAngle}deg)`;
        });
        
 const gemaButton1 = document.getElementById('ouma2');
const dama02Element1 = document.getElementById('wanmatuan02');
      
        // 定义初始显示状态变量
        let isVisible1 = false;
      
        // 点击事件监听器
        gemaButton1.addEventListener('click', function() {
          // 切换元素显示状态
          isVisible1 = !isVisible1;
      
          // 根据状态设置元素显示或隐藏
          if (isVisible1) {
            dama02Element1.style.display = 'block';
          } else {
            dama02Element1.style.display = 'none';
          }
        });


// 黄裳显示交互
const huangshang = document.getElementById('huangshang');
  const jincaoButton = document.getElementById('jincao-button');
  
  jincaoButton.addEventListener('click', function() {
    // 切换显示状态
    if (huangshang.style.display === 'none') {
      huangshang.style.display = 'block';
    } else {
      huangshang.style.display = 'none';
    }
  });

// 朱裳显示交互
const zhushang = document.getElementById('zhushang');
  const xicaoButton = document.getElementById('xicao-button');
  
  xicaoButton.addEventListener('click', function() {
    // 切换显示状态
    if (zhushang.style.display === 'none') {
      zhushang.style.display = 'block';
    } else {
      zhushang.style.display = 'none';
    }
  });