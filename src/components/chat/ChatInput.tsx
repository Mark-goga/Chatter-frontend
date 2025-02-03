import React from 'react';

function ChatInput() {
	return (
		<div className="flex items-center p-2 bg-background shadow-md rounded-lg w-full border-primary border-2">
			<input
				type="text"
				placeholder="Message"
				className="flex-1 px-3 py-2 border-none outline-none text-text bg-transparent"
			/>
			<div className="w-px h-7 bg-gray-300 mx-2"></div>
			<button className="p-2 text-primary hover:text-neutral transition-all">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 h-6"
				>
					<path d="M2.01 21L23 12 2.01 3v7l15 2-15 2v7z"/>
				</svg>
			</button>
		</div>
	);
}

export default ChatInput;