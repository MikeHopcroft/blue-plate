import { Correctness, HistoryItem, TextSource } from './application-state';
import { historyIds } from './reducers';

export function getSampleHistoryES(): HistoryItem[] {
  return sampleHistory.map(item => {
    return {
      source: item.source as TextSource,
      cart: item.cart || { items: [] },
      id: historyIds.next(),
      timestamp: new Date(item.timestamp),
      text: item.text,
      correctness: item.correctness as Correctness,
      note: item.note,
    }
  })
}

const sampleHistory = [
  {
    "cart": {
      "items": [
        {
          "uid": 6,
          "key": "302:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 5,
              "key": "803",
              "quantity": 1,
              "children": []
            }
          ]
        }
      ]
    },
    "correctness": "UNKNOWN",
    "id": 5,
    "source": "KEYBOARD",
    "timestamp": "2020-07-06T07:35:54.560Z",
    "text": "hola quiero un café con leche descremada por favor",
    "note": "hi i want a skim milk coffee please",
  },
  {
    "cart": {
      "items": [
        {
          "uid": 6,
          "key": "302:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 5,
              "key": "803",
              "quantity": 1,
              "children": []
            }
          ]
        },
        {
          "uid": 53,
          "key": "400:0:1",
          "quantity": 1,
          "children": []
        }
      ]
    },
    "correctness": "UNKNOWN",
    "id": 6,
    "source": "KEYBOARD",
    "timestamp": "2020-07-06T07:36:05.272Z",
    "text": "también quiero un espresso",
    "note": "I also want an espresso",
  },
  {
    "cart": {
      "items": [
        {
          "uid": 6,
          "key": "302:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 5,
              "key": "803",
              "quantity": 1,
              "children": []
            }
          ]
        },
        {
          "uid": 53,
          "key": "501:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 69,
              "key": "905",
              "quantity": 1,
              "children": []
            }
          ]
        }
      ]
    },
    "correctness": "UNKNOWN",
    "id": 7,
    "source": "KEYBOARD",
    "timestamp": "2020-07-06T07:36:12.742Z",
    "text": "haga el cafe con soja por favor",
    "note": "make the coffee with soy please",
  },
  {
    "cart": {
      "items": [
        {
          "uid": 6,
          "key": "302:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 5,
              "key": "803",
              "quantity": 1,
              "children": []
            }
          ]
        },
        {
          "uid": 53,
          "key": "501:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 69,
              "key": "905",
              "quantity": 1,
              "children": []
            },
            {
              "uid": 196,
              "key": "906",
              "quantity": 1,
              "children": []
            }
          ]
        }
      ]
    },
    "correctness": "UNKNOWN",
    "id": 8,
    "source": "KEYBOARD",
    "timestamp": "2020-07-06T07:36:21.244Z",
    "text": "haga el cafe con leche de almendra",
    "note": "make the coffee with almond milk",
  },
  {
    "cart": {
      "items": [
        {
          "uid": 6,
          "key": "302:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 5,
              "key": "803",
              "quantity": 1,
              "children": []
            }
          ]
        },
        {
          "uid": 53,
          "key": "400:0:1",
          "quantity": 1,
          "children": [
            {
              "uid": 347,
              "key": "704",
              "quantity": 1,
              "children": []
            }
          ]
        }
      ]
    },
    "correctness": "UNKNOWN",
    "id": 9,
    "source": "KEYBOARD",
    "timestamp": "2020-07-06T07:36:32.275Z",
    "text": "haga el espresso descafeinado",
    "note": "make the espresso decaffeinated",
  },
  {
    "cart": {
      "items": [
        {
          "uid": 6,
          "key": "302:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 5,
              "key": "803",
              "quantity": 1,
              "children": []
            }
          ]
        },
        {
          "uid": 53,
          "key": "400:0:1",
          "quantity": 1,
          "children": [
            {
              "uid": 347,
              "key": "704",
              "quantity": 1,
              "children": []
            }
          ]
        }
      ]
    },
    "correctness": "UNKNOWN",
    "id": 10,
    "source": "KEYBOARD",
    "timestamp": "2020-07-06T07:37:02.798Z",
    "text": "quita el leche de almendra en el cafe por favor",
    "note": "remove the almond milk from the coffee please",
  },
  {
    "cart": {
      "items": [
        {
          "uid": 6,
          "key": "302:0:2",
          "quantity": 1,
          "children": [
            {
              "uid": 5,
              "key": "803",
              "quantity": 1,
              "children": []
            }
          ]
        },
        {
          "uid": 53,
          "key": "400:0:1",
          "quantity": 1,
          "children": [
            {
              "uid": 347,
              "key": "704",
              "quantity": 1,
              "children": []
            }
          ]
        },
        {
          "uid": 382,
          "key": "2000",
          "quantity": 1,
          "children": [
            {
              "uid": 381,
              "key": "100",
              "quantity": 1,
              "children": []
            }
          ]
        }
      ]
    },
    "correctness": "UNKNOWN",
    "id": 11,
    "source": "KEYBOARD",
    "timestamp": "2020-07-06T07:37:15.326Z",
    "text": "también queremos una magdalena de manzana tostado",
    "note": "we also want a toasted apple muffin",  }
];
