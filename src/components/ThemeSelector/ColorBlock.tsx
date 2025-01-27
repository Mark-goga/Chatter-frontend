import React from "react";

interface ColorBlockProps {
	value: string,
}

const ColorBlock = ({value}: ColorBlockProps) => {
	return (
		<div
			className="rounded"
			style={{
				backgroundColor: value,
			}}
		></div>
	);
}

export default React.memo(ColorBlock);