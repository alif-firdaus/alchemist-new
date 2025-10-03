// Import Icons //
import { CornerDownRight } from "lucide-react";

interface PrimaryButtonProps {
	text: string;
	bgColor: string;
	textColor: string;
}

const PrimaryButton = ({ text, bgColor, textColor }: PrimaryButtonProps) => {
	const bgColorClass = bgColor;
	const textColorClass = textColor;

	return (
		<button
			className={`flex items-center justify-between w-full h-fit rounded pl-[18px] pr-3 py-3 ${bgColorClass} ${textColorClass}`}
		>
			<p className="text-base font-aeonik-medium flex w-fit h-fit items-center justify-center pb-[2px]">
				{text}
			</p>
			<div className="flex items-center justify-center bg-lava rounded-[3px] h-[28px] w-[28px]">
				<CornerDownRight
					className="text-floral-white"
					size={12}
					strokeWidth={3}
				/>
			</div>
		</button>
	);
};

export default PrimaryButton;
