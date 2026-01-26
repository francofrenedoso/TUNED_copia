import React, { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

type TContainerBreakpoint =
	| 'container'
	| 'sm:container'
	| 'md:container'
	| 'lg:container'
	| 'xl:container'
	| '2xl:container'
	| null;

interface IContainerProps {
	children: ReactNode;
	className?: string;
	breakpoint?: TContainerBreakpoint;
	tuned?: boolean;
}

const Container = forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
	const { children, className, tuned = false, breakpoint = 'container', ...rest } = props;

	return (
		<div
			ref={ref}
			data-component-name='Container'
			/* template origin
				className={classNames('mx-auto p-4', breakpoint, className)}
			 */

			// TUNED
			className={classNames('mx-auto', { 'p-4': !tuned }, breakpoint, className)}
			{...rest}>
			{children}
		</div>
	);
});
Container.displayName = 'Container';

export default Container;
