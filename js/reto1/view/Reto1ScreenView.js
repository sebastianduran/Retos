// Copyright 2020, University of Colorado Boulder

/**
 * @author sebastian
 */

import Bounds2 from '../../../../dot/js/Bounds2.js';
import GoPauseButton from './GoPauseButton.js'; 
import grassImage from '../../../images/grass_png.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import Reto1Constants from '../../common/Reto1Constants.js';
import reto1 from '../../reto1.js';
import RobotNode from './RobotNode.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import Vector2 from '../../../../dot/js/Vector2.js';

class Reto1ScreenView extends ScreenView {

  /**
   * @param {Reto1Model} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem) {

    super( {
      tandem: tandem
    } );

    const center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    const modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );
    
    //Create the sky and ground.  Allow the sky and ground to go off the screen in case the window is larger than the sim aspect ratio
    const skyHeight = 376;
    const grassY = 368;
    const groundHeight = grassY - skyHeight;

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
    

    this.addChild(new RobotNode(model.robot, modelViewTransform));

    //Show the grass.
    /*this.addChild( new Image( grassImage, {
      tandem: tandem.createTandem( 'grassImage1' ),
      x: 13,
      y: grassY
    } ) );*/

    //Add the go button, but only if there is a puller attached
    // i18n - ensure that the go, pause, and return buttons will fit in between the puller toolboxes
    const maxWidth = 800;
    const goPauseButton = new GoPauseButton( model, 300, tandem.createTandem( 'goPauseButton' ), {
      maxWidth: maxWidth,
      tandem: tandem.createTandem( 'goPauseButton' )
    } );
    this.addChild( goPauseButton );

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