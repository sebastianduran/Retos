  // Copyright 2013-2020, University of Colorado Boulder

/**
 * View for the robot object, which can be dragged to translate.
 *
 * @author sebastian
 */

import Image from '../../../../scenery/js/nodes/Image.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import robotImage from '../../../images/robot_png.js';
import reto1 from '../../reto1.js';

class RobotNode extends Node {

  /**
   * @param {Robot} robot - the model of the robot
   * @param {ModelViewTransform2} modelViewTransform - the coordinate transform between model coordinates and view coordinates
   */
  constructor( robot, modelViewTransform ) {

    super( {

      // Show a cursor hand over the robot
      cursor: 'pointer'
    } );

    // Add the centered robot image
    this.addChild( new Image( robotImage, {
      centerX: 0,
      centerY: 0
    } ) );

    
    // Scale it so it matches the model width and height
    const scaleX = modelViewTransform.modelToViewDeltaX( robot.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( robot.size.height ) / this.height;
    this.scale( scaleX, scaleY );

    // Observe changes in model position and update the view.
    // This element always exists and does not need to be unlinked.
    robot.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    // Observe changes in model orientation and update the view.
    // This element always exists and does not need to be unlinked.
    robot.orientationProperty.link( orientation => {
      this.rotation = orientation;
    } );
  }
}

reto1.register( 'RobotNode', RobotNode );
export default RobotNode;