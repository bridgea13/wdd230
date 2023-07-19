document.querySelector("#lastModified").textContent = document.lastModified;
async function buildMultiSelect() {
    let data = await fetch('./json/data.json');
    const fruit_json = await data.json();
    const select = document.getElementById('multiselect');
    for (let count = 0; count < 3; count++) {
        const selector = document.createElement('select');
        selector.id = "select" + count;


        for (let i = 0; i < fruit_json.length; i++) {
            const option = document.createElement('option');
            option.value = fruit_json[i].name;
            option.textContent = fruit_json[i].name;
            selector.appendChild(option);
        }
        select.appendChild(selector);
    }

}
buildMultiSelect();

async function nut_facts(fruits) {
    let response = await fetch('./json/data.json')
    const data = await response.json();
    var calories = 0;
    var protien = 0;
    var carbs = 0;
    var fats = 0;
    var sugars = 0;
    for (let count = 0; count < fruits.length; count++) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === fruits[count]) {
                calories += data[i].nutritions.calories;
                protien += data[i].nutritions.protein;
                carbs += data[i].nutritions.carbohydrates;
                fats += data[i].nutritions.fat;
                sugars += data[i].nutritions.sugar;
            }
        }
    }
    document.getElementById('calories').innerHTML = "Calories: "+ Math.round(calories);
    document.getElementById('protien').innerHTML ="Protien: "+ Math.round(protien) + "g";
    document.getElementById('carbs').innerHTML ="Carbohydrates: "+ Math.round(carbs) + "g";
    document.getElementById('fat').innerHTML = "Fat: "+ Math.round(fats) + "g";
    document.getElementById('sugar').innerHTML ="Sugars: "+ Math.round(sugars) + "g";


}
function submitform(event) {
    event.preventDefault();
    reciept = document.getElementById('reciept')
    order = document.getElementById('smoothie_order')
    reciept.style.display = "block";
    order.style.display = "none";

    var name = document.getElementsByName("name")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var specialInstructions = document.getElementsByName('special_instructions')[0].value;
    var select1 = document.getElementById('select1').value;

    var select2 = document.getElementById('select2').value;

    var select3 = document.getElementById('select0').value;

    var fruits = [select1, select2, select3];
    nut_facts(fruits);

    document.getElementById('name').innerHTML = name;
    document.getElementById('email').innerHTML = email;
    document.getElementById('phone').innerHTML = phone;
    document.getElementById('special').innerHTML = "Special Instructions: "+specialInstructions;
    document.getElementById('date').innerHTML = date;

    // <h3>Order Info</h3>
  


}
