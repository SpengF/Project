const Mock=require('mockjs')
import baseUrl from '../api/baseurl'
import allApi from './api'
Mock.mock(`${baseUrl}index`,allApi.userInfo)