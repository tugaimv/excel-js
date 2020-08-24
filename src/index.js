import './module'
import './scss/index.scss'

console.log('Hello')


async function f() {
 await setTimeout(()=>{
     console.log('async')
 }, 1)
}

f()