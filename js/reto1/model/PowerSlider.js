
import reto1 from '../../reto1.js';
import NumberDisplay from '../../../../scenery-phet/js/NumberDisplay.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import Range from '../../../../dot/js/Range.js';
import Property from '../../../../axon/js/Property.js';
import BooleanProperty from '../../../../axon/js/BooleanProperty.js';

class PowerSlider {

    constructor(power, enabled){

        this.powerProperty = new NumberProperty(power);
        this.enableSliderProperty = new Property(enabled);

    }

    reset(){
        this.powerProperty.reset();
    }

}

reto1.register( 'PowerSlider', PowerSlider );
export default ( PowerSlider );