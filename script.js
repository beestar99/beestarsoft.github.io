 document.addEventListener('DOMContentLoaded', function() {
     // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.width = '100%';
            navbar.style.zIndex = '1000';
        } else {
            navbar.style.position = 'relative';
        }
    });
    
    // 消息数组
    const messages = [
         " A phone version available in the both Apple App Store and Google Play Store, A desktop version available in the Microsoft Store."
       // "Still in the lab... we haven't even named it yet. 🧪",
       // "Coming eventually. Not today. Not tomorrow. But someday. 😌",
       // "You clicked too soon. But hey, that means you're curious — we like that. 🧐",
        //"Patience is a virtue, and we're testing yours. 😇",
        //"This feature is like fine wine — it needs time to mature. 🍷",
       // "We're baking something special. Check back later! 🧑‍🍳",
        //"This feature is currently dreaming of its future. Let it sleep a bit. 😴",
      //  "You're early. Like... really early. But we love that. 💖",
      //  "We're still deciding what this button wants to be when it grows up.",
     //   "Patience, friend. Great features age like cheese. Or code. Mostly code. 🧀💻",
     //   "It's on the roadmap — we just haven’t found the map yet. 🗺️",
     //   "This button leads to the future. Unfortunately, we're still in the present. ⏳"
    ];
    
    // 获取DOM元素
    const btn1 = document.getElementById('download-btn1');
    const btn2 = document.getElementById('download-btn2');
    const floatingWindow = document.getElementById('floatingWindow');
    const floatingMessage = document.getElementById('floatingMessage');
    const closeBtn = document.getElementById('closeBtn');
    
     // 如果确定有两个按钮才这样写
    if(btn1 && btn2) {
        btn1.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止链接默认行为
            floatingMessage.textContent = showRandomMessage();
            showFloatingWindow();
        });
        
        btn2.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止链接默认行为
            floatingMessage.textContent = showRandomMessage();
            showFloatingWindow();
        });
    }

    // 显示随机消息函数
    function showRandomMessage() {
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    }
    
    // 按钮1点击事件 - 显示随机消息
    btn1.addEventListener('click', function() {
        floatingMessage.textContent = showRandomMessage();
        showFloatingWindow();
    });
    
    // 按钮2点击事件 - 显示随机消息
    btn2.addEventListener('click', function() {
        floatingMessage.textContent = showRandomMessage();
        showFloatingWindow();
    });
    
    // 关闭按钮点击事件
    closeBtn.addEventListener('click', function() {
        hideFloatingWindow();
    });
    
    // 显示浮动窗口函数
    function showFloatingWindow() {
        floatingWindow.classList.add('active');
    }
    
    // 隐藏浮动窗口函数
    function hideFloatingWindow() {
        floatingWindow.classList.remove('active');
    }
    
    // 点击窗口外部也可以关闭窗口
    window.addEventListener('click', function(event) {
        if (event.target === floatingWindow) {
            hideFloatingWindow();
        }
    });

});



