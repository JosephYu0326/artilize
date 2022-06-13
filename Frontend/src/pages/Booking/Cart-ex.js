import { useState } from 'react'

let storage = localStorage

var jsonData = []
if (storage['addItemList'] == null) {
  storage['addItemList'] = ''
}

let temp = storage.getItem('addItemList').split(',')

for (let i = 0; i < temp.length; i++) {
  if (temp[i] === '') continue
  jsonData.push(JSON.parse(storage.getItem(temp[i])))
}

export const shoppingListEx = jsonData
