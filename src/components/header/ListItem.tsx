import Page from "../../interface/Page.interface";

interface Props {
	item: Page | string;
	func: () => void;
}

function ListItem({item, func}: Props) {

	return (
		<button className='hover:bg-neutral rounded-md p-2 text-text'
			onClick={() => {func()}}>
			<p className='text-xl'>{typeof item === "string" ? item : item.title}</p>
		</button>
	);
}

export default ListItem;