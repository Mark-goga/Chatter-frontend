export const themes = {
	light: {
		'--color-background': '#ffffff',
		'--color-text': '#1a202c',
		'--color-primary': '#3182ce',
		'--color-secondary': '#e53e3e',
	},
	dark: {
		'--color-background': '#1a202c',
		'--color-text': '#e2e8f0',
		'--color-primary': '#63b3ed',
		'--color-secondary': '#d53f8c',
	},
	cyberpunk: {
		'--color-background': '#ffd700',
		'--color-text': '#ff00ff',
		'--color-primary': '#00ffff',
		'--color-secondary': '#ff4500',
	},
	winter: {
		'--color-background': '#eff6ff',
		'--color-text': '#1e40af',
		'--color-primary': '#3b82f6',
		'--color-secondary': '#64748b',
	},
};

export type Themas = keyof typeof themes