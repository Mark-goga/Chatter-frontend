import React from 'react';
import ThemeSelectorHeader from "./ThemeSelectorHeader";
import ThemeList from "./ThemeList";

export default function ThemeSelector() {

	return (
		<div className="container mx-auto px-4 pt-20 pb-10 max-w-5xl">
			<div className="space-y-6">
				<ThemeSelectorHeader />
				<ThemeList />
			</div>
		</div>
	);
}
