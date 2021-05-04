import { BehaviorSubject } from 'rxjs'

const counter = new BehaviorSubject({
  initial: 0
})

export default counter