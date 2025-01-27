interface ThemeSelectorH2Props {
	text: string;
}

function ThemeSelectorH2({text}: ThemeSelectorH2Props) {
	return (
		<h2 className="font-semibold text-text text-xl">{text}</h2>
	);
}

export default ThemeSelectorH2;