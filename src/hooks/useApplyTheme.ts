import {Themas, themes} from "../constants/themes";

const useApplyTheme = () => {

	const applyTheme = (theme: Themas) => {
		const selectedTheme = themes[theme];
		Object.entries(selectedTheme).forEach(([key, value]) => {
			document.documentElement.style.setProperty(key, value);
		});
	};

	return {applyTheme};
}
export default useApplyTheme;