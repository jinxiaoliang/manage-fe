/**
 * storage 二次封装
 */
import config from '../config'
export default {
    setItem(key, val) {
        let storage = this.getStorage()
        storage[key] = val
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    getItem(key) {
        this.getStorage()[key]
    },
    getStorage() {
        return JSON.parse(window.localStorage.getItem(config.namespace) || "{}")
    },
    clearItem(key) {
        let storage = this.getStorage
        delete storage[key]
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    clearAll() {
        window.localStorage.clearAll()
    }
}