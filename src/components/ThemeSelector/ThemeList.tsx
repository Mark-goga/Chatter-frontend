import React from 'react';
import {Themas, themes} from "../../constants/themes";
import useSetTheme from "../../hooks/useSetTheme";
import ThemeListItem from "./ThemeListItem";

function ThemeList() {

	const {setTheme} = useSetTheme();
	const handleThemeChange = (themes: Themas) => setTheme(themes);

	return (
		<div className="grid grid-cols-2 360:grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-2">
			{(Object.keys(themes) as Themas[]).map((themeKey: Themas) => (
				<ThemeListItem
					key={themeKey}
					theme={themeKey}
					themeValue={themes[themeKey]}
					handleClick={handleThemeChange}/>
			))}
		</div>
	);
}

export default ThemeList;