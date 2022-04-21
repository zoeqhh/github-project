import axios from 'axios'

const ajax=axios.create({
  baseURL:'https://api.github.com'
})


// 获得用户仓库信息
const getUserStore=(username)=>ajax.get(`/users/${username}/repos`)
// 获得用户仓库的详细信息
const getStoreDetaiMsg=(storeFullName)=>ajax.get(`/repos/${storeFullName}/contents`)

export  {getUserStore,getStoreDetaiMsg}
