import React from 'react';
import { themeVar } from "../../constants/apollo-client";
import { Themas, themes } from "../../constants/themes";
import { useReactiveVar } from "@apollo/client";
import useSetTheme from "../../hooks/useSetTheme";

export default function ThemeSelector() {
	const currentTheme = useReactiveVar(themeVar);
	const { setTheme } = useSetTheme();

	return (
		<div className="container mx-auto px-4 pt-20 pb-10 max-w-5xl">
			<div className="space-y-6">
				{/* Theme Selector Header */}
				<div className="flex flex-col gap-1">
					<h2 className="text-lg font-semibold">Theme</h2>
					<p className="text-sm text-gray-600">Choose a theme for your chat interface</p>
				</div>

				{/* Theme Selector Grid */}
				<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
					{(Object.keys(themes) as Themas[]).map((themeKey) => (
						<button
							key={themeKey}
							onClick={() => setTheme(themeKey)}
							className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
								currentTheme === themeKey ? "bg-gray-200" : "hover:bg-gray-100"
							}`}
						>
							<div
								className="relative h-8 w-full rounded-md overflow-hidden"
								data-theme={themeKey}
							>
								<div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
									<div
										className="rounded bg-primary"
										style={{
											backgroundColor: themes[themeKey]["--color-primary"],
										}}
									></div>
									<div
										className="rounded bg-secondary"
										style={{
											backgroundColor: themes[themeKey]["--color-secondary"],
										}}
									></div>
									<div
										className="rounded bg-accent"
										style={{
											backgroundColor: themes[themeKey]["--color-text"],
										}}
									></div>
									<div
										className="rounded bg-neutral"
										style={{
											backgroundColor: themes[themeKey]["--color-background"],
										}}
									></div>
								</div>
							</div>
							<span className="text-[11px] font-medium truncate w-full text-center">
                {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
              </span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
