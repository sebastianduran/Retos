// Copyright 2020, University of Colorado Boulder

/**
 * @author sebastian
 */

import Text from '../../../../scenery/js/nodes/Text.js';
import reto1 from '../../reto1.js';
import Dialog from '../../../../sun/js/Dialog.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Vector2 from '../../../../dot/js/Vector2.js';

class AlertDialogNode extends Node {

    /**
    * @param reto1 {model}  
    */

    constructor(model){

        super();

        model.alertDialogModel.dialogTextProperty.link( function ( value ) {

            if(value === 'parado'){
                createDialog('Revisa que Bahazy se encuentre en la Zona Verde P');
            }
            if( value === 'vacio'){
                createDialog('Ingresa el numero de rotaciones de la rueda de Bahazy');
            }
            if( value === 'desbordado'){
                createDialog('Bahazy salió de los límites');
            }
            if( value === 'completado'){
                createDialog('Muy bien Bahazy, llegó a la posición exacta');
            }
        });
    }
}

reto1.register( 'AlertDialogNode', AlertDialogNode );

const createDialog = function(mensaje){
    return new Dialog( new Text(mensaje, { font: new PhetFont( { size: 20 } ) }), {
    titleAlign: 'center',
    modal: false,
    hasCloseButton: true,
    center: new Vector2(200,700),
    title: new Text( '', { font: new PhetFont( { size: 12 } ) } )
  } ).show();
};
export default AlertDialogNode;