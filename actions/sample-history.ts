import { Cart } from 'prix-fixe';
import { HistoryItem, TextSource } from './application-state';

export function getSampleHistory(): HistoryItem[] {
  return sampleHistory.map(item => {
    return {
      source: item.source as TextSource,
      cart: item.cart || { items: []},
      timestamp: new Date(item.timestamp),
      text: item.text,
    }
  })
}

const sampleHistory = [
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:09:21.148Z",
    "text": "I'd like a grande latte"
  },
  {
    "source" : "KEYBOARD",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:09:28.101Z",
    "text": "fix that with D cup"
  },
  {
    "source" : "UNKNOWN",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:09:33.139Z",
    "text": "what's decaf"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:09:41.472Z",
    "text": "make that with pica"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:09:46.023Z",
    "text": "make that with vanilla"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:09:55.064Z",
    "text": "make that with soy"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:10:05.972Z",
    "text": "remove."
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:10:11.173Z",
    "text": "remove that"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:10:16.528Z",
    "text": "remove that"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:10:24.218Z",
    "text": "I'd like a grande iced decaf latte"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:10:32.690Z",
    "text": "make that nonfat"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:10:48.448Z",
    "text": "they stopped all"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:10:52.939Z",
    "text": "make that call"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:10:59.987Z",
    "text": "make that tall"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:11:23.056Z",
    "text": "can you add a muffin"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:11:26.878Z",
    "text": "and make that warmed"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:11:33.594Z",
    "text": "and two cups of coffee"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:11:41.326Z",
    "text": "and can I get two cups of coffee"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:11:54.369Z",
    "text": "add some cream"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:12:39.815Z",
    "text": "I'd like a grande iced decaf latte with vanilla"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:12:51.435Z",
    "text": "sorry I wasn't ready"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:12:59.939Z",
    "text": "hi I'd like a tall Grande"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:13:13.253Z",
    "text": "hey there can I get a tall iced Americano with cream no sugar"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:13:25.710Z",
    "text": "the tall latte"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:13:30.775Z",
    "text": "remove the tall latte"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:13:43.440Z",
    "text": "hi can I get a decaf iced chai latte with nonfat milk"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:13:57.858Z",
    "text": "hi can I get an iced tall decaf latte with nonfat milk"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:14:20.574Z",
    "text": "hey can you make the ice tall latte 2%"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:14:42.566Z",
    "text": "hey can you make the iced tall latte soy milk"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:14:54.989Z",
    "text": "hey can you add a pump of chocolate syrup to the ice tall latte"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:15:24.561Z",
    "text": "hey can you add a pump of vanilla syrup to the ice tall latte with nonfat milk"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:42:53.167Z",
    "text": "remove that"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T02:42:58.063Z",
    "text": "undo"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T05:33:08.729Z",
    "text": "I'll have a grande iced mocha with extra whip"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T05:33:15.072Z",
    "text": "you make decaf with two packs of sugar"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T05:33:19.148Z",
    "text": "actually remove the sugar"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T05:33:43.313Z",
    "text": "make an apple bran muffins sliced and warmed"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T05:33:50.170Z",
    "text": "can I cut an apple bran muffin sliced in warmth"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T05:33:58.467Z",
    "text": "let's get a muffin"
  },
  {
    "source" : "MICROPHONE",
    "cart": { items: [] },
    "timestamp": "2020-06-23T05:34:05.187Z",
    "text": "can you make that sliced and warmed"
  }
];

// as { source?: TextSource, cart?: Cart, timestamp: string, text: string };

