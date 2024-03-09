<script>
function calculateProfit() {
    var purchasePrice = document.getElementById('purchasePrice').value;
    var purchaseQuantity = document.getElementById('purchaseQuantity').value;
    var salePrice = document.getElementById('salePrice').value;
    var saleQuantity = document.getElementById('saleQuantity').value;

    var totalPurchase = purchasePrice * purchaseQuantity;
    var totalSale = salePrice * saleQuantity;
    var profit = totalSale - totalPurchase;
    var profitRate = (profit / totalPurchase) * 100;
    var remainingQuantity = purchaseQuantity - saleQuantity;

    var resultText = "수익률: " + profitRate.toFixed(2) + "%<br>" +
                     "수익금액: " + profit.toFixed(2) + "<br>" +
                     "남은 갯수: " + remainingQuantity;
    document.getElementById('result').innerHTML = resultText;
}
</script>
