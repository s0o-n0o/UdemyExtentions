"use strict";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action ==="hideElement") {
        const target_element = document.querySelector(".app--row--E-WFM.app--dashboard--Z4Zxm");
        const footer_element = document.querySelector(".ud-footer");
        const height_change_element = document.getElementsByClassName('curriculum-item-view--scaled-height-limiter--lEOjL curriculum-item-view--no-sidebar--LGmz-')[0]
        if (target_element)  {
            // 現在の表示状態を確認して、切り替え
            if (target_element.style.display === "none" && footer_element.style.display==="none") {
                target_element.style.display = ""; // 表示に戻す
                footer_element.style.display ="";
                height_change_element.style.maxHeight = "80vh";
                height_change_element.style.height = "100%";
            } else {
                target_element.style.display = "none"; // 非表示にする
                footer_element.style.display = "none";
                height_change_element.style.maxHeight = "100vh";
                height_change_element.style.height = "100vh";
            }
    }
}
});

