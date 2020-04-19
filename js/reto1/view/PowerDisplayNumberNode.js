// Copyright 2013-2020, University of Colorado Boulder

/** View for the robot object, which can be dragged to translate.
 *
 * @author sebastian
 * 
 */

import Node from '../../../../scenery/js/nodes/Node.js';
import reto1 from '../../reto1.js';
import VBox from '../../../../scenery/js/nodes/VBox.js';
import NumberDisplay from '../../../../scenery-phet/js/NumberDisplay.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import HSlider from '../../../../sun/js/HSlider.js';

class PowerDisplayNumberNode extends Node {

	/**
   	* @param Bounds {panelBounds}  // fronteras del layout
   	*/

	constructor(model, range){

		super();

		// Options for both NumberDisplay instances
		const numberDisplayOptions = {
			valuePattern: 'Potencia:   {{value}}',
			align: 'left'
		};

		//tratando de enviar el numero a Reto1Model
		const sliderListener = function() {
			model.powerProperty.set( property );
		};

		//Cambien la propiedad enabledProperty
		model.enableSliderProperty.link( enable =>{
			model.enableSliderProperty.set(enable);
		});

		// To demonstrate numeric value display
		const property = new NumberProperty( 0 );
		const numberDisplay = new NumberDisplay( property, range, numberDisplayOptions );
		const slider = new HSlider( property, range ,{
			enabledProperty: model.enableSliderProperty,
			endDrag: sliderListener
		});

		this.addChild( new VBox( {
			spacing: 10,
			children: [ numberDisplay, slider ]
		} ) );
	}
}

reto1.register( 'PowerDisplayNumberNode', PowerDisplayNumberNode );
export default PowerDisplayNumberNode;