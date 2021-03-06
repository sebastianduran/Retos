// Copyright 2013-2020, University of Colorado Boulder

/** View for the robot object, which can be dragged to translate.
 *
 * @author sebastian duran
 * 
 */

import reto1 from '../../reto1.js';
import Property from '../../../../axon/js/Property.js';

class AlertDialogModel {


    constructor(message){


        this.dialogTextProperty = new Property (message);

    }

}

reto1.register( 'AlertDialogModel', AlertDialogModel );
export default ( AlertDialogModel );