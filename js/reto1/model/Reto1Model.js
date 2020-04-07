// Copyright 2020, University of Colorado Boulder

/**
 * @author sebastian
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import reto1 from '../../reto1.js';
import Robot from './Robot.js';
import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import Property from '../../../../axon/js/Property.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';

//constants
const GAME_LENGTH = 458;

/**
 * @constructor
 */
class Reto1Model {

    /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    
    //TODO

    const self = this;

    this.robot = new Robot(tandem.createTandem( 'robot' ));

    this.startedProperty = new BooleanProperty( false, {
      tandem: tandem.createTandem( 'startedProperty' )
    } );

    this.runningProperty = new BooleanProperty(false, {
      tandem: tandem.createTandem( 'runningProperty' )
    });

    this.runningProperty.link( function (running) { if (running) { self.startedProperty.set( true ); }} );

    this.timeProperty = new Property( 0, {
      // TODO: Removed this property for phet-io spam
      // tandem: tandem.createTandem( 'timeProperty' )
      // phetioType: PropertyIO(NumberIO)( 'seconds' )
    } );
    this.durationProperty = new NumberProperty( 0, {
      tandem: tandem.createTandem( 'durationProperty' ),
      units: 'seconds',
      range: new Range( 0, Number.POSITIVE_INFINITY )
    } );

    this.speedProperty = new NumberProperty( 0, {
      tandem: tandem.createTandem( 'speedProperty' ),
      units: 'meters/second',
      range: new Range( 0, 6 )
    } );
  }

  /**
   * Update the velocity and position of the robot.
   *
   * @private
   * @param  {number} newV
   * @param  {number} newX
   */
  updateRobot( newV, newX ){
    this.robot.vProperty.set( newV );
    this.robot.xProperty.set( newX );
  }

  /**
   * Resets the model.
   * @public
   */
  reset() {
    //TODO
    this.robot.reset();
    this.runningProperty.set(false);
    this.timeProperty.reset();
  }

  /**
   * Steps the model.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO
    if (this.runningProperty.get()){
      // Increment tug-of-war timer
      this.durationProperty.set( this.durationProperty.get() + dt );

      const getPower = 2000; //pasar a funcion
      // Make the simulation run at certain speed
      const newV = this.robot.vProperty.get() + getPower * dt * 0.003;
      this.speedProperty.set( Math.abs( newV ) );

      // calculate new position from velocity
      const newX = this.robot.xProperty.get() + newV * dt * 60.0;

      //If the robot made it to the end, then stop and signify completion
      const gameLength = GAME_LENGTH - this.robot.widthToWheel;
      if ( newX > gameLength || newX < -gameLength ) {
        this.runningProperty.set( false );
        this.stateProperty.set( 'completed' );

        // zero out the velocity
        this.speedProperty.set( 0 );

        // set cart and pullers back the to max position
        const maxLength = newX > gameLength ? gameLength : -gameLength;
        this.updateRobot( this.speedProperty.get(), maxLength );
      }
      else {

        // if the game isn't over yet, update cart and puller
        this.updateRobot( newV, newX );
      }
    }
    this.timeProperty.set( this.timeProperty.get() + dt );
  }
}

reto1.register( 'Reto1Model', Reto1Model );
export default Reto1Model;