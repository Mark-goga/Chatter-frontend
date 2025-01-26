import FriendList from "../FriendList";

function Home() {
	return (
		<div className="flex flex-col h-screen-minus-100">
			{/*<div className="flex flex-1 overflow-hidden">*/}
				<FriendList/>
			{/*</div>*/}
		</div>
	);
}

export default Home;