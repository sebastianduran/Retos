// Copyright 2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author sebastian
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import reto1Strings from './reto1-strings.js';
import Reto1Screen from './reto1/Reto1Screen.js';

const reto1TitleString = reto1Strings.reto1.title;

const simOptions = {
  credits: {
    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
    leadDesign: 'Sebasitan Duran sjduranh@gmail.com',
    softwareDevelopment: '',
    team: '',
    qualityAssurance: '',
    graphicArts: '',
    soundDesign: '',
    thanks: ''
  }
};

// launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
SimLauncher.launch( () => {
  const sim = new Sim( reto1TitleString, [
    new Reto1Screen( Tandem.ROOT.createTandem( 'reto1Screen' ) )
  ], simOptions );
  sim.start();
} );