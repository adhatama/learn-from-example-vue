import Vue from 'vue'

export function list () {
  return Vue.http.get('articles', {
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    'params': {
      'source': 'ars-technica',
      'apiKey': '653414ad1ba0412eaf4e64568f1a4c52'
    }
  })
}
