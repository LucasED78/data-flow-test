import counter from "../streams/counter"

const increment = (_counter = counter) => {
    _counter.next({
        initial: _counter.value.initial + 1
    })
}

export default increment