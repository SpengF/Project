const Mock=require('mockjs')
import baseUrl from '../api/baseurl'
import allApi from './api'
Mock.mock(`${baseUrl}index`,allApi.userInfo)
Mock.mock(`${baseUrl}inputSearch`,allApi.inputSearch)
Mock.mock(`${baseUrl}wordDetails`,allApi.wordDetails)
Mock.mock(RegExp(`${baseUrl}level/`+".*"),allApi.level)  //把level的全部拦截住