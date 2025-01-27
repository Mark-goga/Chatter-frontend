import ThemeSelectorH2 from "./ThemeSelectorH2";

function ThemeSelectorHeader() {
	return (
		<div className="flex flex-col gap-1">
			<ThemeSelectorH2 text={'Theme'} />
			<p className="text-sm  text-text">Choose a theme for your chat interface</p>
		</div>
	);
}

export default ThemeSelectorHeader;