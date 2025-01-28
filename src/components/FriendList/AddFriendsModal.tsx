import {forwardRef, useState} from "react";

interface AddFriendsModalProps {
	isOpen: boolean;
}

const AddFriendsModal = forwardRef<HTMLDivElement, AddFriendsModalProps>(({isOpen}, ref) => {
	const [isPrivate, setIsPrivate] = useState<boolean>(true);
	const handleSave = () => {};

	return (
		<div ref={ref} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[500px] h-[250px] flex
		${isOpen ? 'animate-modalOpen' : 'animate-modalClose'}`}>
			<div
				className="fixed z-50 flex items-center justify-center size-full flex-1"
			>
				<div
					className="relative flex-1 bg-background border-2 border-primary rounded-2xl shadow-xl p-6"
				>
					<h2 className="text-xl font-semibold text-text mb-4">Add Chat</h2>

					<div className="mb-4">
						<label className="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								checked={isPrivate}
								onChange={(e) => setIsPrivate(e.target.checked)}
								className="accent-primary"
							/>
							<span className="text-text">Private</span>
						</label>
					</div>

					{isPrivate ? (
						<div className="flex items-center bg-neutral rounded-lg p-2 mb-4 border border-primary">
							<input
								type="text"
								placeholder="Search Users"
								className="flex-grow bg-transparent border-none outline-none text-text placeholder-gray-500 px-2"
							/>
							<button className="text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 15.75L19.5 19.5M10.5 17.25a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"
									/>
								</svg>
							</button>
						</div>
					) : (
						<div className="mb-4">
							<input
								type="text"
								placeholder="Name"
								className="w-full bg-neutral rounded-lg border border-primary p-2 pl-4 outline-none text-text placeholder-gray-500"
							/>
						</div>
					)}

					<button
						onClick={() => handleSave()}
						className="w-full bg-primary text-background py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	)
});

export default AddFriendsModal;