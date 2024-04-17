const makeChange = (c) => {
    const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    quarters = Math.floor(c / quarterValue);
    c %= quarterValue;

    dimes = Math.floor(c / dimeValue);
    c %= dimeValue;

    nickels = Math.floor(c / nickelValue);
    c %= nickelValue;

    pennies = c;

    return { q: quarters, d: dimes, n: nickels, p: pennies };
};

const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(parseInt(c))));
