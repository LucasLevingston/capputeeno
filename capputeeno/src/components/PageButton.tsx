import React from 'react';

interface PageButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	bgColor?: string;
	disabled?: boolean;
	text?: string
}

const PageButton: React.FC<PageButtonProps> = ({ children, onClick, text, bgColor = '#E9E9F0', disabled = false }) => {
	return (
		<button
			className={`h-8 w-8 rounded-lg bg-${bgColor} ${disabled ? 'bg-white' : ''}`}
			onClick={onClick}
			style={{ backgroundColor: bgColor }}
			disabled={disabled}
		>
			<span className={'text-[16px] leading-6 flex justify-center items-center' + ` text-[${text ? text : '#737380'}] `}>{children}</span>
		</button>
	);
};

export default PageButton;
