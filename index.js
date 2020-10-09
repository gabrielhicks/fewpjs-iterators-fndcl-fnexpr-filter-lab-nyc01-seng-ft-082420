// Code your solution here
const findMatching = (drivers, strings) => {
    return drivers.filter(driver => driver.toLowerCase() == strings.toLowerCase())
}

const fuzzyMatch = (drivers, strings) => {
    return drivers.filter( driver =>
        driver.toLowerCase().indexOf(strings.toLowerCase()) === 0
    )
}

const matchName = (drivers, strings) => {
    return drivers.filter(driver => driver.name === strings)
}