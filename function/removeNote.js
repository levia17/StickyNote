import { serial } from "./addNote.js";
export function removeNote() {
  var observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if(mutation.removeNodes){
        mutation.removedNodes.forEach((node)=>{
          if(node.nodeType === 1 && node.classList.contains('btnRemove')){
            console.log('Đã xóa Note!')
          };
        });
      };
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.classList.contains("btnRemove")) {
            node.addEventListener("click", function () {
              this.parentElement.parentElement.remove();
            });
          };
        });
      };
    });
  });
  // observer.observe(document.body, { subtree: true });
  observer.observe(document.body, { childList: true, subtree: true });
}


// Chưa tìm được đúng Note để xóa, so sánh độ dài của serial với phần tử lớn nhất trong serial if serial.length < serial thì cho lặp để kiếm và lắp số.