export function isCordova(): boolean {
    console.log("document.URL", document.URL);
    if (window['cordova']) return true;
    if (document.URL.indexOf("file://") != -1) return true;
    if (document.URL.toLowerCase().indexOf("http") == 0) return false;
    return false;
}
