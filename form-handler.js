document.getElementById('submitBtn').addEventListener('click', function () {
    const form = document.getElementById('myForm');
    const output = document.getElementById('output');
  
    // 1. 處理 Radio 按鈕
    const gender = form.querySelector('input[name="gender"]:checked');
    const genderValue = gender ? gender.value : '未選擇';
  
    // 2. 處理 Checkbox
    const hobbies = Array.from(form.querySelectorAll('input[name="hobby"]:checked'))
      .map(checkbox => checkbox.value);
    const hobbiesValue = hobbies.length ? hobbies.join(', ') : '未選擇';
  
    // 3. 處理 Textarea
    const comments = form.querySelector('#comments').value || '無輸入';
  
    // 4. 處理 Select
    const city = form.querySelector('#city').value || '未選擇';
  
    // 顯示結果
    output.innerHTML = `
      <h3>表單結果：</h3>
      <p><strong>性別：</strong> ${genderValue}</p>
      <p><strong>興趣：</strong> ${hobbiesValue}</p>
      <p><strong>意見：</strong> ${comments}</p>
      <p><strong>城市：</strong> ${city}</p>
    `;
  });
  