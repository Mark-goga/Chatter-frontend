import React from 'react';
import ColorBlock from "./ColorBlock";
import {Themas, ThemeValue} from "../../constants/themes";
import {useReactiveVar} from "@apollo/client";
import {themeVar} from "../../constants/apollo-client";

interface ThemeListItemProps {
	handleClick: (theme: Themas) => void;
	theme: Themas;
	themeValue: ThemeValue;
}

function ThemeListItem({handleClick,  themeValue, theme}: ThemeListItemProps) {

	const currentTheme: Themas = useReactiveVar(themeVar);

	return (
		<button
			onClick={() => handleClick(theme)}
			className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
				currentTheme === theme ? "bg-neutral" : "hover:bg-neutral"
			}`}
		>

			<div className="relative h-9 w-full rounded-md overflow-hidden" style={{backgroundColor: themeValue['--color-background']}}>
				<div className="absolute inset-0 grid grid-cols-4 gap-px p-1">

					{Object.entries(themeValue).map(([key, color]) => {
						if (key === "--color-background" || key === "--color-neutral") return null;
						return <ColorBlock key={key} value={color} />;
					})}

				</div>
			</div>

			<span className="text-[14px] text-text font-medium truncate w-full text-center">
         {theme.charAt(0).toUpperCase() + theme.slice(1)}
			</span>
		</button>
	);
}

export default React.memo(ThemeListItem);