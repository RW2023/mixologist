//src/components/ui/ThemeSwitcher.tsx
import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>('light');
  const themes: string[] = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset',
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {themes.map((themeName) => (
        <button type='button'
          key={themeName}
          className={`btn btn-xs ${
            theme === themeName ? 'btn-active' : 'btn-ghost'
          }`}
          onClick={() => handleThemeChange(themeName)}
        >
          {themeName}
        </button>
      ))}
    </div>
  );
};

const ThemeSettingsPage = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          <i className="fas fa-palette mr-2"></i>
          Theme Customization
        </h1>
        <div className="text-center mb-4">
          <p className="text-lg">
            <i className="fas fa-eye mr-2"></i>
            Explore and apply different themes:
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default ThemeSettingsPage;
