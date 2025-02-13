import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { snackVar } from "../../constants/snack";

function Snackbar() {
	const snack = useReactiveVar(snackVar);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		let hideTimeout: NodeJS.Timeout;
		let removeTimeout: NodeJS.Timeout;

		if (snack) {
			setShowContent(true);
			hideTimeout = setTimeout(() => {
				setShowContent(false);
				removeTimeout = setTimeout(() => {
					snackVar(undefined);
				}, 200);
			}, 2000);
		}

		return () => {
			clearTimeout(hideTimeout);
			clearTimeout(removeTimeout);
		};
	}, [snack]);

	return (
		<>
			{snack && (
				<div
					className={`absolute bottom-6 left-6 p-2 bg-error rounded-md flex items-center gap-2 min-w-[200px] justify-between transition-all duration-200
          ${showContent ? "animate-fadeIn" : "animate-fadeOut"}`}
				>
					<p className="font-medium text-[18px] text-text">{snack}</p>
					<div onClick={() => snackVar(undefined)} className="cursor-pointer">
						<IoClose size={18} />
					</div>
				</div>
			)}
		</>
	);
}

export default Snackbar;
