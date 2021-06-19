names = []
function submit() {
    guestname = document.getElementById("ti1").value
    names.push(guestname)
    document.getElementById("display_name").innerHTML = names
    document.getElementById("ti1").value = ""
}
function show() {
    names.sort()
    document.getElementById("sorted_name").innerHTML = names
}
function search() {
    s = document.getElementById("ti2").value
    found = 0
    j = 0
    for (j = 0; j < names.length; j++) {
        if (s == names[j]) {
found=found+1
        }
    }
    document.getElementById("searched_names").innerHTML="name found "+found+" times"
}