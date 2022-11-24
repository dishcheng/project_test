import { LocalStorage } from 'quasar'

const TokenKey = 'token'
const UserInfoKey = 'userInfo'
const UserPermissionKey = 'userPermission'
const UserMenusKey = 'userMenus'
const VXE_TABLE_CUSTOM_COLUMN_WIDTH_KEY = 'VXE_TABLE_CUSTOM_COLUMN_WIDTH'

export function getToken () {
  return LocalStorage.getItem(TokenKey)
}

export function setToken (token) {
  return LocalStorage.set(TokenKey, token)
}

export function removeToken () {
  return LocalStorage.remove(TokenKey)
}

export function getUserInfo () {
  return LocalStorage.getItem(UserInfoKey)
}

export function setUserInfo (obj) {
  return LocalStorage.set(UserInfoKey, obj)
}

export function removeUserInfo () {
  return LocalStorage.remove(UserInfoKey)
}


export function getUserPermissions () {
  return LocalStorage.getItem(UserPermissionKey)
}

export function setUserPermissions (obj) {
  return LocalStorage.set(UserPermissionKey, obj)
}

export function removeUserPermissions () {
  return LocalStorage.remove(UserPermissionKey)
}


export function getUserMenus () {
  return LocalStorage.getItem(UserMenusKey)
}

export function setUserMenus (obj) {
  return LocalStorage.set(UserMenusKey, obj)
}

export function removeUserMenus () {
  return LocalStorage.remove(UserMenusKey)
}

//這裡必須用原生寫法
export function getVXE_TABLE_CUSTOM_COLUMN_WIDTH_KEY () {
  return localStorage.getItem(VXE_TABLE_CUSTOM_COLUMN_WIDTH_KEY)
}
//這裡必須用原生寫法
export function setGetVXE_TABLE_CUSTOM_COLUMN_WIDTH_KEY (obj) {
  return localStorage.setItem(VXE_TABLE_CUSTOM_COLUMN_WIDTH_KEY, obj)
}

