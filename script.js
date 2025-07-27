const select = document.getElementById('theme-select');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(theme) {
      if (theme === 'system') {
        document.documentElement.setAttribute('data-bs-theme', prefersDark.matches ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
      }
    }

    const savedTheme = localStorage.getItem('theme') || 'system';
    select.value = savedTheme;
    applyTheme(savedTheme);

    select.addEventListener('change', () => {
      const selectedTheme = select.value;
      localStorage.setItem('theme', selectedTheme);
      applyTheme(selectedTheme);
    });

    prefersDark.addEventListener('change', () => {
      if (localStorage.getItem('theme') === 'system') {
        applyTheme('system');
      }
    });
