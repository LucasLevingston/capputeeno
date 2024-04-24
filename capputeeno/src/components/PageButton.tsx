import React from 'react';
interface PageButtonProps {
	children: React.ReactNode;
}

const PageButton: React.FC<PageButtonProps> = ({ children }) => {
	return (
		<button className="flex  h-8 w-8 items-center justify-center rounded-lg bg-[#E9E9F0]">
			<span className="text-[16px] leading-6 text-[#737380] ">{children}</span>
		</button>
	);
};
export default PageButton;
