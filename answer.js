function copyFunction() {
    const same = document.getElementById('same');
    if (same.checked) {    
        document.getElementById('billing').value = document.getElementById('shippName').value;
        document.getElementById('Zip').value = document.getElementById('shippZip').value;
    } else {
        document.getElementById('billing').value = ''
        document.getElementById('Zip').value = ''
    }
}
