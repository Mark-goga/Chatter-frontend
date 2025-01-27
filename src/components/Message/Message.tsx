import React from 'react';

interface MessageProps {
	text: string;
	time: string;
	isCurrentUser: boolean;
}

function Message({text, time, isCurrentUser}: MessageProps) {
	const background = isCurrentUser ? 'bg-primary' : 'bg-neutral';
	const locate = isCurrentUser ? 'justify-self-end' : 'justify-self-start';

	return (
		<div className={`${background} ${locate} p-2 rounded-lg max-w-[80%] w-max`}>
			<p className="text-sm">{text}</p>
			<p className="text-xs text-right text-text">{time}</p>
		</div>
	);
}

export default Message;