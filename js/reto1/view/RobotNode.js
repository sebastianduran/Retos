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
import reto1String from '../../reto1-strings.js';
import DragListener from '../../../../scenery/js/listeners/DragListener.js';

const speedString = reto1String.speed;

class RobotNode extends Node {

  
  /**
   * @param {Robot} robot - the model of the robot
   * @param {ModelViewTransform2} modelViewTransform - the coordinate transform between model coordinates and view coordinates
   */
  constructor ( robot, modelViewTransform ) {

    super( {
      // Show a cursor hand over the bar magnet
      cursor: 'pointer'
    } );

    // Add the centered robot image
    this.addChild( new Image( robotImage, {
      centerX: 50,
      centerY: 280,
    }));

    // Scale it so it matches the model width and height
    const scaleX = modelViewTransform.modelToViewDeltaX( robot.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( robot.size.height ) / this.height;
    this.scale( scaleX, scaleY );

    // Observe changes in model position and update the view.
    // This element always exists and does not need to be unlinked.
    robot.positionProperty.link( position =>{
      this.translation = modelViewTransform.modelToViewPosition (position);
    });
  }
}


reto1.register( 'RobotNode', RobotNode );
export default RobotNode;