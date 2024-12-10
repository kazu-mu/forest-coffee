// loading
document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    
    // 初回訪問かどうかをチェック
    if (!localStorage.getItem('firstVisit')) {
        // 初回訪問の場合、ローディングを表示
        loading.style.display = 'flex';
        
        // ビデオの再生が終了したら、ローディングをフェードアウト
        const video = loading.querySelector('video');
        video.addEventListener('ended', () => {
            // フェードアウト開始
            loading.classList.add('fade-out');
            
            // アニメーション終了後に要素を完全に削除
            loading.addEventListener('transitionend', () => {
                loading.style.display = 'none';
                // 初回訪問フラグを設定
                localStorage.setItem('firstVisit', 'true');
            }, { once: true });
        });
    } else {
        // 2回目以降の訪問の場合、ローディングを非表示にする
        loading.style.display = 'none';
    }
});




// 
$(document).ready(function () {
    $(".slide_in_read").each(function () {
        $(this).addClass("slide_in_active");
    });
});

$(function(){
    // ハンバーガー
    $(".hamburger").on("click",function(){
        $("header").toggleClass("open");
    });
    $(".menu_list a").on("click",function(){
        $("header").toggleClass("open");
    });
    $(".mask").on("click",function(){
        $("header").toggleClass("open");
    });

    //スクロールアニメーション
    $(window).scroll(function () {
        var classes = [
            { base: "slide_in", active: "slide_in_active" },
            { base: "fade_up", active: "fade_up_active" }
        ];
    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    
        for (var i = 0; i < classes.length; i++) {
            $("." + classes[i].base).each(function () {
                var target = $(this).offset().top;
                if (scroll > target - windowHeight + 50) {
                    $(this).addClass(classes[i].active);
                }
            });
        }
    });

    // FAQ
    $(".toggle_btn").on("click", function () { 
        // クリックされたボタンの直後の.accordion_answerを取得
        var answer = $(this).closest(".accordion_question").next(".accordion_answer");
        answer.toggleClass("open");
    
        // 2つ目のspanの角度をトグル
        $(this).find("span:nth-child(2)").toggleClass("rotated");
    });
    
})