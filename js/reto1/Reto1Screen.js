// Copyright 2020, University of Colorado Boulder

/**
 * @author sebastian
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import reto1 from '../reto1.js';
import Reto1Model from './model/Reto1Model.js';
import Reto1ScreenView from './view/Reto1ScreenView.js';

class Reto1Screen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    super(
      () => new Reto1Model( tandem.createTandem( 'model' ) ),
      model => new Reto1ScreenView( model, tandem.createTandem( 'view' ),  )
    );
  }
}

reto1.register( 'Reto1Screen', Reto1Screen );
export default Reto1Screen;