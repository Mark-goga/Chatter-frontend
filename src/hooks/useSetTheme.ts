import {themeVar} from "../constants/apollo-client";
import { Themas} from "../constants/themes";
import useApplyTheme from "./useApplyTheme";

const useSetTheme = () => {
	const {applyTheme} = useApplyTheme();

	const setTheme = (theme: Themas) => {
		localStorage.setItem('theme', theme);
		themeVar(theme);
		applyTheme(theme);
	};
	return  {setTheme}

}
export default useSetTheme;
