// thanks @alii tippy looks so nice on ur site had to steal xxxx
import {Position, Tooltip} from 'react-tippy';

/**
 * Data fo handling tooltips.
 */
export interface TooltipData {
  /**
   * Content.
   */
  data: string;

  /**
   * The position.
   */
  position: Position;
}

/**
 * Component that handles tooltips, if data exists.
 * @param props children, tooltip data
 * @constructor
 */
export function HandledTooltip(props: {children: any; tooltip?: TooltipData}) {
  if (props.tooltip) {
    const tip = props.tooltip;
    return (
      <Tooltip title={tip.data} position={tip.position}>
        {props.children}
      </Tooltip>
    );
  }
  return <>{props.children}</>;
}
