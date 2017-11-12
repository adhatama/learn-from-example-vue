import Vue from 'vue'

export function list () {
  return Vue.http.get('users', {})
}

export function create (name, job) {
  return Vue.http.post('users', {
    'name': name,
    'job': job
  })
}
