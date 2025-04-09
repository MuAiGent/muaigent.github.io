// 当文档准备就绪时执行
document.addEventListener('DOMContentLoaded', function() {
    // 响应式导航菜单
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.insertBefore(menuToggle, sidebar.firstChild);
        
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // 为代码块添加语法高亮
    document.querySelectorAll('pre code').forEach(function(block) {
        // 如果引入了highlight.js，这里可以调用hljs.highlightBlock(block)
    });
    
    // 图片点击放大效果
    document.querySelectorAll('.post-content img').forEach(function(img) {
        img.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
}); 