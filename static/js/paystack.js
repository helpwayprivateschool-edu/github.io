
$.ajax({
    url: `payments/${payer_id}` + response.reference,
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: {

    },
    success: function (response) {
        // the transaction status is in response.data.status
    },
    error() {

    }
});
