function calculateProfit() {
    // 사용자 입력 값 가져오기
    var purchasePrice = parseFloat(document.getElementById('purchasePrice').value); // 매수 가격
    var purchaseQuantity = parseInt(document.getElementById('purchaseQuantity').value); // 매수한 주식의 수
    var salePrice = parseFloat(document.getElementById('salePrice').value); // 매도 가격
    var saleQuantity = parseInt(document.getElementById('saleQuantity').value); // 매도한 주식의 수

    // 판매한 주식에 대한 총 이익과 수익률 계산
    var profitPerSoldShare = salePrice - purchasePrice; // 팔린 주식 1주당 이익
    var totalProfit = profitPerSoldShare * saleQuantity; // 총 이익
    var profitRate = (profitPerSoldShare / purchasePrice) * 100; // 판매한 주식에 대한 수익률

    // 판매하지 않은 주식의 수
    var remainingQuantity = purchaseQuantity - saleQuantity;

    // 결과 텍스트 구성
    var resultText = "판매한 주식의 수익률: " + profitRate.toFixed(2) + "%<br>" +
                     "판매한 주식의 총 이익금액: " + totalProfit.toFixed(2) + "<br>" +
                     "남은 주식의 갯수: " + remainingQuantity;

    // 결과를 HTML 문서에 표시
    document.getElementById('result').innerHTML = resultText;
}
