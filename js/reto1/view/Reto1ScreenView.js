// Copyright 2020, University of Colorado Boulder

/**
 * @author sebastian
 */
import GoPauseButton from './GoPauseButton.js'; 
import fondoImage from '../../../images/fondo_png.js';
import cloud1Image from '../../../images/cloud1_png.js';
import mountainsImage from '../../../images/mountains_png.js';
import aparcamientoImage from '../../../images/aparcamiento_png.js';
import reto1 from '../../reto1.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import Reto1Constants from '../common/Reto1Constants.js';
import RobotNode from './RobotNode.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import RotationsKeypadNode from './RotationsKeypadNode.js';
import Panel from '../../../../sun/js/Panel.js';
import VBox from '../../../../scenery/js/nodes/VBox.js';
import RotationsPanel from './RotationsPanel.js';
import FlexometroNode from './FlexometroNode.js';
import PowerDisplayNumberNode from './PowerDisplayNumberNode.js';
import Range from '../../../../dot/js/Range.js';
import AlertDialogNode from './AlertDialogNode.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';

class Reto1ScreenView extends ScreenView {

  /**
   * @param {Reto1Model} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem) {

    super( );//{
      //tandem: tandem,
      //layoutBounds: new Bounds2( 0, 0, 768, 504 )
    //} );
    const center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    const modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );    
  
    this.addChild( new Image( fondoImage, {
      center: center,
      scale: 1.4
    } ) );

    this.addChild( new Image( mountainsImage, {
      center: new Vector2 (500,380),
      scale: 3
    } ) );

    this.addChild( new Image( cloud1Image, {
      center: new Vector2 (600,80),
      scale: 0.5
    } ) );

    //Show the regla.
    this.addChild( new Image( aparcamientoImage, {
      centerX: this.layoutBounds.maxX /2 ,
      centerY: 385,
      scale: 2.4
    } ) );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
      },
      right: this.layoutBounds.maxX - Reto1Constants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - Reto1Constants.SCREEN_VIEW_Y_MARGIN,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    
    this.addChild( resetAllButton );

    
    //Add the go button, but only if there is a puller attached
    // i18n - ensure that the go, pause, and return buttons will fit in between the puller toolboxes
    const maxWidth = 800;
    const goPauseButton = new GoPauseButton( model, 300, tandem.createTandem( 'goPauseButton' ), {
      maxWidth: maxWidth,
      tandem: tandem.createTandem( 'goPauseButton' )
    } );
    this.addChild( goPauseButton );

    this.robotNode = new RobotNode(model.robot, modelViewTransform );
    this.addChild(this.robotNode);

    /*====== PANEL MOTOR ======*/
    const panelVector = new Vector2 (280,85);
    
    //slider de potencia
    const powerSlider = new PowerDisplayNumberNode(model, new Range(-100,100));

    const rotationsPanel = new RotationsPanel(model);


    this.addChild(
              new Panel ( new VBox ( {
                              spacing: 10,
                              children: [rotationsPanel, powerSlider ]}),{
                center: panelVector}       
          ) );
    //Cinta de medida del scenary-phet
    this.addChild( new FlexometroNode(this.layoutBounds));

    // Creates for NumberKeypad
    this.rotationsKeypadNode = new RotationsKeypadNode (model, panelVector, this);
    //this.addChild( this.rotationsKeypadNode);

    this.dialogNode = new AlertDialogNode(model, new Text('',{font: new PhetFont(20)}), this);

  }
}

reto1.register( 'Reto1ScreenView', Reto1ScreenView );
export default Reto1ScreenView;