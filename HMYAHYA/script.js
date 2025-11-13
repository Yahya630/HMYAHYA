(function () {
    const KM_TO_MILES = 0.621371;
  
    const kmInput = document.getElementById('km-input');
    const convertBtn = document.getElementById('convert-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultDiv = document.getElementById('result');
    const errorP = document.getElementById('error');
  
    function showError(msg) {
      errorP.textContent = msg;
      resultDiv.textContent = '';
    }
  
    function clearError() {
      errorP.textContent = '';
    }
  
    function formatNumber(n) {
     
      return parseFloat(n.toFixed(4)).toString();
    }
  
    function convert() {
      clearError();
  
      const kmVal = kmInput.value;
  
      if (kmVal === '' || kmVal === null) {
        showError('الرجاء إدخال قيمة بالكيلومترات.');
        kmInput.focus();
        return;
      }
  
      const kmNumber = Number(kmVal);
  
      if (Number.isNaN(kmNumber)) {
        showError('الرجاء إدخال رقم صالح.');
        kmInput.focus();
        return;
      }
  
      if (!isFinite(kmNumber)) {
        showError('الرجاء إدخال رقم محدود وصالح.');
        kmInput.focus();
        return;
      }
  
      if (kmNumber < 0) {
        showError('الرجاء إدخال قيمة صفر أو أكبر (غير سالبة).');
        kmInput.focus();
        return;
      }
  
   
      const miles = kmNumber * KM_TO_MILES;
  
      resultDiv.textContent = `${formatNumber(kmNumber)} km = ${formatNumber(miles)} mi`;
    }
  
    function clearAll() {
      kmInput.value = '';
      resultDiv.textContent = '';
      clearError();
      kmInput.focus();
    }
  
  
    convertBtn.addEventListener('click', convert);
    clearBtn.addEventListener('click', clearAll);
  
  
    kmInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        convert();
      }
    });
  })();
  