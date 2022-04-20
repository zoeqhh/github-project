import axios from 'axios'

const ajax=axios.create({
  baseURL:'https://api.github.com'
})


// 获得用户信息
const getUserInfo=(username)=>ajax.get(`/users/${username}/repos`)
// 获得用户repo的根目录
const getRepoRoots=(username)=>ajax.get(`/repos/solomonxie/gists/contents`)

export default getUserInfo
