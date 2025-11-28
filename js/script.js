$(".save").on("click", function () {
  const calender = $("#calender").val();
  const text_a = $("#honbun").val();

  console.log(calender, "日付チェック");
  console.log(text_a, "本文チェック");

  // localStorage に保存
  // ここでは日付をキーにして本文を値として保存する例
  if (calender && text_a) {
    // 空欄チェック
    localStorage.setItem(calender, text_a);
    alert("保存しました！");
  } else {
    alert("日付と本文の両方を入力してください");
  }
});
