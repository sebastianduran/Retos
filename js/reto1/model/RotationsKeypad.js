// Copyright 2013-2020, University of Colorado Boulder

/** View for the robot object, which can be dragged to translate.
 *
 * @author Sebastian Duran
 * 
 */

import NumberKeypad from '../../../../scenery-phet/js/NumberKeypad.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import reto1 from '../../reto1.js';
import Property from '../../../../axon/js/Property.js';

class RotationsKeypad {

     /**
     * Create a new rotationskeypad model. The robott has fixed size, and mutable position and orientation.
     * @param {Bounds2} layoutBounds 
     * @param {Vector2} center
     * 
     */

    constructor(layoutBounds,center){

        this.layoutBounds = layoutBounds;

        this.center = center;

        this.decimalKeypad = new NumberKeypad( {
            decimalPointKey: true
          } );
        
          // value of decimalKeypad is displayed here
        this.decimalText = new Text('',{
            font: new PhetFont( 24 )
        } );

        this.showKeypadProperty = new Property (false);

        this.visibleKeypad = new Property(true);

    }
}

reto1.register( 'RotationsKeypad', RotationsKeypad );
export default ( RotationsKeypad );