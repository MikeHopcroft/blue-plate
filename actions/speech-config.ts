import { SpeechConfig } from './application-state';

export function loadSpeechConfig(): SpeechConfig {
  try {
    const text = localStorage.getItem('speechConfig');
    if (text === null) {
      throw new TypeError('no speechConfig in local storage');
    }
    const speechConfig = JSON.parse(text);
    console.log('speechConfig');
    console.log(text);
    console.log(speechConfig);
    return {
      speechSupport: false,
      ...speechConfig as SpeechConfig
    }
  } catch (e) {
    console.log('no speechConfig in local storage');
    return {
      speechSupport: false,
      useAzureSpeech: false,
      azureSubscriptionKey: '',
      azureRegion: '',
    }
  }
}

export function saveSpeechConfig(config: SpeechConfig) {
  console.log('Saving speech config');
  console.log(`  Speech supported: ${config.speechSupport}`);
  console.log(`  Use AzureSpeech: ${config.useAzureSpeech}`);
  console.log(`  Azure Subscription Key: ${config.azureSubscriptionKey}`);
  console.log(`  Azure Region: ${config.azureRegion}`);

  localStorage.setItem('speechConfig', JSON.stringify(config));
}
