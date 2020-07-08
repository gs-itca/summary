function foo(params) {
    setTimeout(() => {
        foo()
    }, 1000);
}