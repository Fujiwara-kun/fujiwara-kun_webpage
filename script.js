const select = document.getElementById('theme-select');

// テーマを適用
function applyTheme(theme) {
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

// 保存されてるテーマを使う
const savedTheme = localStorage.getItem('theme') || 'system';
select.value = savedTheme;
applyTheme(savedTheme);

// テーマ変更時の処理
select.addEventListener('change', () => {
  const selectedTheme = select.value;
  localStorage.setItem('theme', selectedTheme);
  applyTheme(selectedTheme);
});

// システムテーマが変わったら反映
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (localStorage.getItem('theme') === 'system') {
    applyTheme('system');
  }
});
