// Copyright 2013-2020, University of Colorado Boulder

/** View for the robot object, which can be dragged to translate.
 *
 * @author sebastian
 * 
 */

import Node from '../../../../scenery/js/nodes/Node.js';
import reto1 from '../../reto1.js';
import HBox from '../../../../scenery/js/nodes/HBox.js';
import Panel from '../../../../sun/js/Panel.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Color from '../../../../scenery/js/util/Color.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import FontAwesomeNode from '../../../../sun/js/FontAwesomeNode.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';

class RotationsPanel extends Node {

    /**
    * @param RotationsKeypad {model}  // fronteras del layout
    * @param Bounds2 {layoutBounds}
    */
    constructor(model){

        super();

          model.rotationsKeypad.decimalKeypad.valueStringProperty.link( function( valueString ) {
            model.rotationsKeypad.decimalText.text = valueString;
          } );

          let rotationsKeypadNode = true;
          //Boton para editar rotacion (muestra el keypad)
          const editRotations = new RectangularPushButton( {
            content: new FontAwesomeNode( 'pencil_square_o', {
              scale: 0.4,
              xMargin: 6,
              yMargin: 4
            } ),
            center: new Vector2(50,33),
            baseColor: new Color(200, 200 ,0),
            listener: function() {
              if ( rotationsKeypadNode ) {
                model.rotationsKeypad.showKeypadProperty.value = true;
                rotationsKeypadNode = false;
              }else{
                model.rotationsKeypad.showKeypadProperty.value = false;
                rotationsKeypadNode = true;
              }
            }
          } );
          this.addChild(editRotations);

          this.addChild(
             new HBox({
                spacing: 10,
                align: 'top',
                children: [
                  new Text ( 'Rotaciones', {
                              font: new PhetFont( 20 )
                            } ),
                  new Panel (model.rotationsKeypad.decimalText ,{
                    minWidth: 50})]
                //
              })
          );
    }

}
reto1.register( 'RotationsPanel', RotationsPanel );
export default RotationsPanel;