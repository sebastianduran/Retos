// Copyright 2020, University of Colorado Boulder

/**
 * @author sebastian
 */

import reto1 from '../../reto1.js';
import Robot from './Robot.js';
import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import Property from '../../../../axon/js/Property.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import StringProperty from '../../../../axon/js/StringProperty.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import RotationsKeypad from './RotationsKeypad.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import Range from '../../../../dot/js/Range.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import AlertDialogModel from './AlertDialogModel.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';

//constants
const GAME_LENGTH = 508;
const initPosY = -30;
const initPosX = -450;
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

    this.robot = new Robot(new Dimension2(262.5, 196,8), new Vector2  (initPosX,initPosY), 0);

    /* == Propiedades del boton gopausebutto ===*/
    this.startedProperty = new BooleanProperty( false, {
      tandem: tandem.createTandem( 'startedProperty' )
    } );

    this.runningProperty = new BooleanProperty(false, {
      tandem: tandem.createTandem( 'runningProperty' )
    });

    this.runningProperty.link( function (running) { 
      if (running) {
         self.startedProperty.set( true );
      }
    } );

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

    // Propiedades del Keypad
    this.rotationsKeypad = new RotationsKeypad( new Bounds2(0,0,738,450), new Vector2(2 * GAME_LENGTH -100,120) );
    
    // Slider de potencia
    //this.powerSlider = new PowerSlider(0,true);
    this.powerProperty = new NumberProperty (0);
    this.enableSliderProperty = new Property (true);

    //dialogo alert
    this.dialogTooLongProperty = new BooleanProperty(false);
    this.alertDialogModel = new AlertDialogModel('mensaje inicial');
    
  }


  /**
   * Resets the model.
   * @public
   */
  reset() {
    //TODO
    this.robot.reset();
    this.runningProperty.set(false);
    this.enableSliderProperty.set(true);
  }

  /**
   * Steps the model.
   * @param {number} dt - time step, in seconds
   * @public
   */
  
  step( dt ) {
    //TODO
    if (this.runningProperty.get()){
      
      if ( isNaN(parseFloat( this.rotationsKeypad.decimalText.text)))
      {
        this.alertDialogModel.dialogTextProperty.set("vacio");
        this.runningProperty.set(false);
      }
      else{
        this.enableSliderProperty.set(false);
        // Increment tug-of-war timer
        this.durationProperty.set( this.durationProperty.get() + dt );
        //posición actual del robot en X
        const posX = this.robot.positionProperty.value.x;
        
        // Slider de potencia
        var power = this.powerProperty.value.value;
        if (power === undefined){
          power = 0;
        }
        //Movimiento del robot //
        this.robot.positionProperty.value = new Vector2( posX + 1 * (power /20), initPosY);

        // calculo de la posición final calculada con una costante de rotación
        const constRotacion = 207; // tamaño en pixeles del diametro de la rueda
        const finalpos = initPosX + (parseFloat(this.rotationsKeypad.decimalText.text)*constRotacion);

        if ( posX >=  finalpos || posX >2000 || posX <-2000 ) {
          this.runningProperty.set( false );
          // zero out the velocity
          this.speedProperty.set( 0 );
          console.log(posX);
          if ( posX > 298 && posX < 301){
            this.alertDialogModel.dialogTextProperty.set("completado");
          }
          else if (posX < -2000 || posX > 2000){
            this.alertDialogModel.dialogTextProperty.set("desbordado");
          }
          else {
            this.alertDialogModel.dialogTextProperty.set("parado");
          }

          

        }

      }
    }
    else{
      this.enableSliderProperty.set(true);
      this.alertDialogModel.dialogTextProperty.set(" ");
    }
    this.timeProperty.set( this.timeProperty.get() + dt );
  }
}

reto1.register( 'Reto1Model', Reto1Model );
export default Reto1Model;