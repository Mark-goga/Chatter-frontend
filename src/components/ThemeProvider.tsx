import React, { ReactNode, useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import { themeVar } from '../constants/apollo-client';
import { Themas} from "../constants/themes";
import useApplyTheme from "../hooks/useApplyTheme";


interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const theme: Themas = useReactiveVar(themeVar);
	const {applyTheme} = useApplyTheme();

	useEffect(() => {
		applyTheme(theme);
	}, [theme, applyTheme]);

	return <>{children}</>;
};
