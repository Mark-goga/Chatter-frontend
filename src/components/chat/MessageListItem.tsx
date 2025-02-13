import React from 'react';
import UserProfile from "../UserProfile";

interface Props {
	content: string;
	createdAt: Date;
}

function MessageListItem({content, createdAt}: Props) {
	return (
		<div className="flex items-end gap-3 mb-2 last:mb-0">
			<UserProfile avatar={undefined} name={'g'}/>
			<div className="flex flex-col">
				<div className="relative bg-primary text-text px-4 py-2 rounded-lg w-auto sm:max-w-md break-all whitespace-pre-wrap">
					<p>{content}</p>
				</div>
				<span className="text-xs text-neutral text-right">{new Date(createdAt).toLocaleTimeString()}</span>
			</div>
		</div>
	);
}

export default React.memo(MessageListItem);