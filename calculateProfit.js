
function calculateProfit() {
    // 사용자 입력 값 가져오기
    var purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    var purchaseQuantity = parseInt(document.getElementById('purchaseQuantity').value);
    var salePrice = parseFloat(document.getElementById('salePrice').value);
    var saleQuantity = parseInt(document.getElementById('saleQuantity').value);

    // 남은 주식 수 계산
    var remainingQuantity = purchaseQuantity - saleQuantity;

    // 1주에 대한 수익금과 수익률 계산
    var profitPerShare = salePrice - purchasePrice; // 1주당 수익
    var profitRatePerShare = (profitPerShare / purchasePrice) * 100; // 1주당 수익률 (%)
    var profitAmountPerShare = profitPerShare; // 1주에 대한 수익금

    // 결과 텍스트 구성
    var resultText = "1주당 수익률: " + profitRatePerShare.toFixed(2) + "%<br>" +
                     "1주당 수익금액: " + profitAmountPerShare.toFixed(2) + "<br>" +
                     "남은 갯수: " + remainingQuantity;
    
    // 결과를 HTML 문서에 표시
    document.getElementById('result').innerHTML = resultText;
}

