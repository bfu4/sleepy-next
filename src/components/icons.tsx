/**
 * Importing devicons into a component.
 * @param props name
 * @constructor
 */
export function DevIcon(props: {className?: string; name: string; size?: number}) {
	return (
		<div className={props.className}>
			<span className={`devicons devicons-${props.name}`} style={{fontSize: props.size ?? 20}} />
		</div>
	);
}
