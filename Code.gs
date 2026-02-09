function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Perpustakaan Digital SMAN 1 Magetan')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Fungsi untuk menerima data dari formulir HTML dan menyimpannya ke Google Sheets
 */
function processData(formData) {
  try {
    // Masukkan ID Spreadsheet Anda di sini (Lihat di URL browser)
    const sheetId = '1nflccYG5ov-uQQ_SfLorhqPzghJViTTd0cY-Xne8lLM'; 
    
    const ss = SpreadsheetApp.openById(sheetId);
    const sheet = ss.getSheets()[0]; 
    
    const timestamp = new Date();
    const rowData = [
      timestamp,
      formData.entryType,
      formData.studentName,
      formData.studentClass,
      formData.bookTitle
    ];
    
    sheet.appendRow(rowData);
    
    // Memberikan respon balik ke browser
    return {
      status: "success",
      message: "Data berhasil dicatat di database sekolah."
    };
  } catch (error) {
    return {
      status: "error",
      message: "Gagal menyimpan ke Sheet: " + error.toString()
    };
  }
}
