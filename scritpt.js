// 获取页面上的元素
const readBtn = document.getElementById('readBtn');
const content = document.getElementById('content');
const intro = document.getElementById('intro');

// 给按钮添加点击事件
readBtn.addEventListener('click', function() {
    // 切换内容的显示/隐藏状态
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        intro.textContent = '小说内容已加载！';
        readBtn.textContent = '收起内容';
    } else {
        content.classList.add('hidden');
        intro.textContent = '点击按钮开始阅读！';
        readBtn.textContent = '开始阅读';
    }
});