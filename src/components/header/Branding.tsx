import { IoMdChatboxes } from "react-icons/io";

function Branding() {

	return (
		<div className='flex items-center justify-center gap-2'>
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