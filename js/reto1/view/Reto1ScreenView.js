// Copyright 2020, University of Colorado Boulder

/**
 * @author sebastian
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import Reto1Constants from '../../common/Reto1Constants.js';
import reto1 from '../../reto1.js';
import RobotNode from 'js/reto1/view/RobotNode.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';

class Reto1ScreenView extends ScreenView {

  /**
   * @param {Reto1Model} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {

    super( {
      tandem: tandem
    } );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - Reto1Constants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - Reto1Constants.SCREEN_VIEW_Y_MARGIN,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    const center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    const modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );

    this.addChild(new RobotNode(model.robot, modelViewTransform))


    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   * @public
   */
  reset() {
    //TODO
  }

  /**
   * Steps the view.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO
  }
}

reto1.register( 'Reto1ScreenView', Reto1ScreenView );
export default Reto1ScreenView;