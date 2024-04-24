import React from 'react';
import Header from './Header';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className="flex h-full min-h-screen flex-col">
			<Header />
			<div className="h-full w-full bg-[#F0F0F5] px-5 pt-[34px] md:px-40">
				{children}
			</div>
		</div>
	);
};

export default Container;
