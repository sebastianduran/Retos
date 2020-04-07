// Copyright 2013-2020, University of Colorado Boulder

/**
 * Model of a simple robot.
 * The robot has fixed size, and mutable position and orientation.
 *
 * @author sebastian
 */

import Property from '../../../../axon/js/Property.js';
import reto1 from '../../reto1.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import Range from '../../../../dot/js/Range.js';

/**
 * @constructor
 */
class Robot {

  /**
   * Create a new robot model. The robott has fixed size, and mutable position and orientation.
   *
   * @param {Tandem} tandem
   * 
   */

  constructor( tandem ) {

    // @public {number} - 1-D x location of the cart
    this.xProperty = new NumberProperty (0, {
      tandem: tandem.createTandem( 'xProperty' ),
      units: 'meters',
      range: new Range( -403, 403 )
    });

    // @public {number} - 1-D velocity in MKS
    this.vProperty = new NumberProperty( 0, {
      tandem: tandem.createTandem( 'vProperty' ),
      units: 'meters/second',
      range: new Range( -6, 6 )
    } );

  }

  /**
   * Restores the initial state of the Robot. This method is called when the simulation "Reset All" button is
   * pressed. Note that Robot.size is constant and does not need to be reset.
   * @public
   */
  reset() {
    this.positionProperty.reset();
    this.orientationProperty.reset();
    this.xProperty.reset();
    this.vProperty.reset();
  }
}

reto1.register( 'Robot', Robot );
export default Robot;