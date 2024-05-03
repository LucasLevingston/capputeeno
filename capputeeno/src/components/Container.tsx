import React from 'react';
import { Toaster } from 'sonner';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className="flex  flex-col">
			{children}
			<Toaster position="top-right" richColors />
		</div >
	);
};

export default Container;
