import { IoMdChatboxes } from "react-icons/io";

interface Props {
	handleClick: () => void;
}

function Branding({handleClick}: Props) {

	return (
		<div className='cursor-pointer flex items-center justify-center gap-2' onClick={() => handleClick()}>
			<div >
				<IoMdChatboxes size={30}/>
			</div>
			<div>
				<h6 className='font-semibold text-2xl'>CHATTER</h6>
			</div>
		</div>
	);
}

export default Branding;