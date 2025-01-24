import React from 'react';
import ListItem from "./ListItem";
import router from "../Routes";
import Page from "../../interface/Page.interface";

interface Props {
	pages: Page[];
}

function PageList({pages}: Props) {
	return (
		<div className='flex items-center justify-center gap-2'>
			<div className='tablet:hidden'>
				{pages.map((page) => (
					<ListItem key={page.title} item={page} func={() => {
						router.navigate(page.path)
					}}/>
				))}
			</div>
		</div>
	);
}

export default PageList;