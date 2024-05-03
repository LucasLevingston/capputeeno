import React from 'react';
import Header from './Header';
import { Toaster } from 'sonner';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className="flex  flex-col">
			<Header />
			<div className="h-full w-full bg-[#F0F0F5] px-5 py-[34px] md:px-40 min-h-screen">
				{children}
				<Toaster position="top-right" richColors />
			</div>
		</div>
	);
};

export default Container;
