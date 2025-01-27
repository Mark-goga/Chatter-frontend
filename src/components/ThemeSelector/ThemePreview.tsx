import { IoIosSend } from "react-icons/io";
import React from "react";
import ThemeSelectorH2 from "./ThemeSelectorH2";
import Message from "../Message/Message";

function ThemePreview() {
	return (
		<div className='p-5 bg-neutral rounded-lg flex items-center justify-center shadow-md border border-gray-200'>
			<div className="p-4 rounded-lg border border-gray-200 bg-background text-text space-y-4 flex-1 max-w-xl">
				<ThemeSelectorH2 text={'Preview'}/>
				<div className="flex items-center space-x-3">
					<div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
						J
					</div>
					<div>
						<h4 className="text-sm font-medium">John Doe</h4>
						<p className="text-xs text-gray-500">Online</p>
					</div>
				</div>

				<div className="space-y-2 grid col-auto">
					<Message text={`Hey! How's it going?`} time={'12:00 PM'} isCurrentUser={false}/>
					<Message text={'I\'m doing great! Just working on some new features.'} time={'12:00 PM'} isCurrentUser={true} />
				</div>

				<div className="bg-neutral p-2 rounded-lg flex items-center">
					<input
						type="text"
						placeholder="This is a preview"
						className="flex-1 bg-transparent text-sm outline-none text-text"
					/>
					<button className="ml-2 bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors duration-300">
						<IoIosSend />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ThemePreview;
