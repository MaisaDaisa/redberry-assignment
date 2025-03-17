const delayedInvoke = <T>(fn: () => T): Promise<T> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn())
        }, 500)
    })
}

export default delayedInvoke
