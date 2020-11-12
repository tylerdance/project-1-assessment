const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')
const input = document.getElementById('input-field')
document.getElementById('input-field').defaultValue = 0
value = Number(input.value)

addBtn.addEventListener('click', (e) => {
    e.preventDefault
    const currentValue = Number(input.value);
    input.value = currentValue + 1
    document.getElementById('display').textContent = currentValue + 1
})

subtractBtn.addEventListener('click', (e) => {
    e.preventDefault
    const currentValue = Number(input.value);
    input.value = currentValue - 1
    document.getElementById('display').textContent = currentValue - 1
})

function negative() {
    if (value < 0) {
        input.style.color = "red";
    }
}