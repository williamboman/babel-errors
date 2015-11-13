function foo() {}

export default function () {
    return async function bar() {
        for (let id of ids) {
            const promise = promises.get(id)();
            foo(() => promise, id);
            await promise;
        }
    }
}
