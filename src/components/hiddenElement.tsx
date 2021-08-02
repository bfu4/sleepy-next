import {useState} from 'react';
import {HandledTooltip, TooltipData} from './tooltip';
import {Info, X} from 'react-feather';

/**
 * Hide an element under an info button.
 * @param props element hidden, tooltip if there is any.
 * @constructor
 */
export function HiddenElement(props: {children: any; tooltip?: TooltipData}) {
	const [open, setOpen] = useState(false);
	if (!open) {
		return (
			<HandledTooltip tooltip={props.tooltip}>
				<button
					type="button"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<a className="pink-icon">
						<Info />
					</a>
				</button>
			</HandledTooltip>
		);
	}

	return (
		<>
			<button type="button" className="close">
				<X
					onClick={() => {
						setOpen(!open);
					}}
				/>
			</button>
			{props.children}
		</>
	);
}
