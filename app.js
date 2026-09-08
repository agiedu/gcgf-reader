const pdfViewer = document.getElementById("pdfViewer");

const bookTitle = document.getElementById("bookTitle");

const status = document.getElementById("status");

const downloadBtn = document.getElementById("downloadBtn");

const fullscreenBtn = document.getElementById("fullscreenBtn");

const books = document.querySelectorAll(".book");


/* =========================
   PDF.js Viewer
========================= */

const PDFJS_VIEWER =
  "https://mozilla.github.io/pdf.js/web/viewer.html";


/* =========================
   加载 PDF
========================= */

function loadPDF(pdfUrl, title) {

  bookTitle.textContent = title;

  status.textContent =
    "正在加载 PDF，请稍候...";

  downloadBtn.href = pdfUrl;


  /*
    使用 PDF.js 在线阅读器
  */

  const viewerUrl =
    PDFJS_VIEWER +
    "?file=" +
    encodeURIComponent(pdfUrl);


  pdfViewer.src = viewerUrl;


  setTimeout(() => {

    status.textContent =
      "PDF 在线阅读模式";

  }, 2000);

}


/* =========================
   点击图书
========================= */

books.forEach(book => {

  book.addEventListener("click", () => {

    books.forEach(item => {

      item.classList.remove("active");

    });


    book.classList.add("active");


    const pdfUrl =
      book.dataset.pdf;


    const title =
      book.dataset.title;


    loadPDF(pdfUrl, title);

  });

});


/* =========================
   全屏
========================= */

fullscreenBtn.addEventListener("click", () => {

  const container =
    document.querySelector(".pdf-container");


  if (container.requestFullscreen) {

    container.requestFullscreen();

  }

});


/* =========================
   默认加载
========================= */

window.addEventListener("DOMContentLoaded", () => {

  const firstBook =
    document.querySelector(".book");


  if (firstBook) {

    loadPDF(

      firstBook.dataset.pdf,

      firstBook.dataset.title

    );

  }

});
