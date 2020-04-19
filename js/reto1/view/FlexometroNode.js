// Copyright 2013-2020, University of Colorado Boulder

/** View for the robot object, which can be dragged to translate.
 *
 * @author sebastian duran
 * 
 */

import Node from '../../../../scenery/js/nodes/Node.js';
import reto1 from '../../reto1.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Property from '../../../../axon/js/Property.js';
import MeasuringTapeNode from '../../../../scenery-phet/js/MeasuringTapeNode.js';
import Vector2Property from '../../../../dot/js/Vector2Property.js';

class FlexometroNode extends Node {

  /**
   * @param Bounds2 {layoutBounds}  // fronteras del layout
   */
  constructor(layoutBounds){

    super();

    const measuringTapeUnitsProperty = new Property( { name: 'mm', multiplier: 0.7 } );

    this.addChild(new MeasuringTapeNode( measuringTapeUnitsProperty, new Property( true ), {
        textColor: 'black',
        textBackgroundColor: 'rgba( 255, 0, 0, 0.1 )', // translucent red
        textBackgroundXMargin: 10,
        textBackgroundYMargin: 3,
        textBackgroundCornerRadius: 5,
        basePositionProperty: new Vector2Property( new Vector2( layoutBounds.centerX, 2 * layoutBounds.centerY - 50) ),
        tipPositionProperty: new Vector2Property( new Vector2( layoutBounds.centerX + 100, 2 * layoutBounds.centerY - 50 ) )
      } ) );
  }
}

reto1.register( 'FlexometroNode', FlexometroNode );
export default FlexometroNode;