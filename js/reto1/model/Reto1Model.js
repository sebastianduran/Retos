// Copyright 2020, University of Colorado Boulder

/**
 * @author sebastian
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import reto1 from '../../reto1.js';
import Robot from './Robot.js';

/**
 * @constructor
 */
class Reto1Model {

  
  constructor( ) {
    //TODO
    this.robot = new Robot(new Dimension2(262.5, 199.1), new Vector2(0, 0), 0);
  }

  /**
   * Resets the model.
   * @public
   */
  reset() {
    //TODO
    this.robot.reset();
  }

  /**
   * Steps the model.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO
  }
}

reto1.register( 'Reto1Model', Reto1Model );
export default Reto1Model;