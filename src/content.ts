import {changeAvatarsShape} from './features/changeAvatarShape';
import {changeScrollbarStyling} from './features/changeScrollbars';
import {changeTweetActionsStyling} from './features/changeTweetActions';
import {getValidatedSettings} from './services/backgroundSettings';
import {injectInTD} from './services/injectInTD';
import {setupReactRoot} from './services/setupBTDRoot';

(async () => {
  // Setup the React components.
  await setupReactRoot();
  // Add our own class to the body.
  document.body.classList.add('btd-loaded');
  // Inject some scripts
  await injectInTD();

  // Get the settings from the browser.
  const settings = await getValidatedSettings();
  changeAvatarsShape(settings);
  changeTweetActionsStyling(settings);
  changeScrollbarStyling(settings);
})();
