import React from 'react';

interface PageButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	bgColor?: string;
	disabled?: boolean;
}

const PageButton: React.FC<PageButtonProps> = ({ children, onClick, bgColor = '#E9E9F0', disabled = false }) => {
	return (
		<button
			className={`h-8 w-8 rounded-lg bg-${bgColor} ${disabled ? 'opacity-50' : ''}`}
			onClick={onClick}
			style={{ backgroundColor: bgColor }}
			disabled={disabled}
		>
			<span className="text-[16px] leading-6 text-[#737380] flex justify-center items-center">{children}</span>
		</button>
	);
};

export default PageButton;
