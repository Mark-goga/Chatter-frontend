
interface Props {
	item: string;
	func: () => void;
}

function ListItem({item, func}: Props) {
	return (
		<button className='hover:bg-gray-300 rounded-md p-2' onClick={() => func()}>
			<p className='text-xl'>{item}</p>
		</button>
	);
}

export default ListItem;