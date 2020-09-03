import { SpeechConfig, SpeechMode } from './application-state';

export function loadSpeechConfig(): SpeechConfig {
  try {
    console.log('Attempting to load speech config');
    const text = localStorage.getItem('speechConfig');
    if (text === null) {
      throw new TypeError('No speechConfig in local storage');
    }
    const speechConfig = JSON.parse(text) as SpeechConfig;
    return {
      ...speechConfig,

      // In an abundance of caution, set speechSupport to false and then
      // let the Chrome-detect component set it and mode, as necessary.
      speechSupport: false,
      mode: SpeechMode.TEXT,
    }
  } catch (e) {
    console.log('No speechConfig in local storage');

    return {
      speechSupport: false,
      persistedMode: SpeechMode.TEXT,
      mode: SpeechMode.TEXT,
      azureSubscriptionKey: '',
      azureRegion: '',
    }
  }
}

export function saveSpeechConfig(config: SpeechConfig) {
  console.log('Saving speech config');
  console.log(`  Speech supported: ${config.speechSupport}`);
  console.log(`  Mode: ${config.mode}`);
  console.log(`  Azure Subscription Key: ${config.azureSubscriptionKey}`);
  console.log(`  Azure Region: ${config.azureRegion}`);

  const config2 = {
    ...config,
    persistedMode: config.mode
  }

  localStorage.setItem('speechConfig', JSON.stringify(config2));
}
