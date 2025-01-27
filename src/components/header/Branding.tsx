import { IoChatboxOutline } from "react-icons/io5";

interface Props {
	handleClick: () => void;
}

function Branding({handleClick}: Props) {

	return (
		<div className='cursor-pointer flex items-center justify-center gap-2 text-primary' onClick={() => handleClick()}>
			<div className='size-[50px] bg-neutral p-[10px] rounded-md'>
				<IoChatboxOutline size={30}/>
			</div>
			<div>
				<h6 className='font-semibold text-2xl'>CHATTER</h6>
			</div>
		</div>
	);
}

export default Branding;