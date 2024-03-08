// Set up button click listener
document.getElementById("initZebraBarcode").addEventListener("click", initZebraBarcode);
document.getElementById("registerZebraBarcodeListener").addEventListener("click", registerZebraBarcodeListener);
document.getElementById("unregisterZebraBarcodeListener").addEventListener("click", unregisterZebraBarcodeListener);
document.getElementById("isZebraBarcodeConnected").addEventListener("click", isZebraBarcodeConnected);
document.getElementById("enableZebraBarcode").addEventListener("click", enableZebraBarcode);
document.getElementById("disableZebraBarcode").addEventListener("click", disableZebraBarcode);
document.getElementById("scanZebraBarcode").addEventListener("click", scanZebraBarcode);
document.getElementById("selectScanner").addEventListener("click", selectScanner);
document.getElementById("getAvailableScannerNames").addEventListener("click", getAvailableScannerNames);

document.getElementById("isZebraBarcodeConnectedBySerialNumber").addEventListener("click", isZebraBarcodeConnectedBySerialNumber);
document.getElementById("enableZebraBarcodeBySerialNumber").addEventListener("click", enableZebraBarcodeBySerialNumber);
document.getElementById("disableZebraBarcodeBySerialNumber").addEventListener("click", disableZebraBarcodeBySerialNumber);
document.getElementById("scanZebraBarcodeBySerialNumber").addEventListener("click", scanZebraBarcodeBySerialNumber);
document.getElementById("getZebraConnectedScanners").addEventListener("click", getZebraConnectedScanners);
document.getElementById("getZebraEnabledScanners").addEventListener("click", getZebraEnabledScanners);

function initZebraBarcode() {
    EloZebraBarcodeManager.initZebraBarcode();
}

function registerZebraBarcodeListener() {
    EloZebraBarcodeManager.registerZebraBarcodeListener("ZBCRCallback");
}

function unregisterZebraBarcodeListener() {
    document.getElementById("textField").value = "hel32loo";
}

function isZebraBarcodeConnected() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraBarcodeConnectedBySerialNumber("S22281523073514");
}

function enableZebraBarcode() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraBarcodeBySerialNumber("S22281523073514");
}

function disableZebraBarcode() {
    document.getElementById("textField").value = EloZebraBarcodeManager.disableZebraBarcodeBySerialNumber("S22281523073514");
}

function scanZebraBarcode() {
    EloZebraBarcodeManager.scanZebraBarcode();
}

function ZBCRCallback(type, data, serialNumber) {
    document.getElementById("textField").value = serialNumber;
}

function selectScanner() {
    document.getElementById("textField").value = "1234";
}

function getAvailableScannerNames() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getAvailableScannerNames();
}






function isZebraBarcodeConnectedBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.isZebraBarcodeConnectedBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function enableZebraBarcodeBySerialNumber() {
    document.getElementById("textField").value = EloZebraBarcodeManager.enableZebraBarcodeBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function disableZebraBarcodeBySerialNumber() {
    EloZebraBarcodeManager.disableZebraBarcodeBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}


function scanZebraBarcodeBySerialNumber() {
    EloZebraBarcodeManager.scanZebraBarcodeBySerialNumber("S/N:E9F15329524B70498D7E95B374FAF176:9");
}

function getZebraConnectedScanners() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraConnectedScanners();
}

function getZebraEnabledScanners() {
    document.getElementById("textField").value = EloZebraBarcodeManager.getZebraEnabledScanners();
}

