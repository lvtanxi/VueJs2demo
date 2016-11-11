const STORAGE_KEY = "user_info"

export default {
  STORAGE_KEY,
  fetch(defVal){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || defVal)
  },
  save (obj){
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
  },
  delete (key){
    window.localStorage.removeItem(key)
  }
}
