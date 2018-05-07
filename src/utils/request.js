import { store } from '../store'
import { push } from 'react-router-redux'
import { getCookie } from './cookie'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  if (response.status === 401) {
    store.dispatch(push('/login'))
    return response
  }
  // const errortext = codeMessage[response.status] || response.statusText
  // const error = new Error(errortext)
  // error.name = response.status
  // error.response = response
  // throw error
}

export default function request (url, options) {
  console.log(options)
  const accessToken = getCookie('accessToken')
  let newOptions
  const defaultOptions = {
    credentials: 'include'
  }
  if (accessToken) {
    newOptions = {
      headers: {
        Authorization: `${getCookie('tokenType')} ${getCookie('accessToken')}`
      },
      ...options
    }
  } else {
    newOptions = {
      ...options,
      ...defaultOptions
    }
  }
  console.log(newOptions)
  if (newOptions.method === 'POST' || newOptions.method === 'put') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers
    }
  }
  newOptions.body = JSON.stringify(newOptions.body)
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(res => res.json())
    .catch((err) => {
      console.log(err)
    })
}
