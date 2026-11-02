function calculateLoan() {
    /**
     *
     * M = P * ( r * (1+r)^n ) / ( (1+r)^n  - 1 )
     *
     * M = Total monthly payment
     * P = Principal loan amount (the total money you borrowed)
     * r = Monthly interest rate (Annual interest rate divided by 12 )
     * n = Total number of months (Loan term in years multiplied by 12.
     *
     */

    const loanAmount = parseFloat(document.querySelector('#loanAmount').value);
    const interestRate = parseFloat(
        document.querySelector('#interestRate').value,
    );
    const loanTerm = parseFloat(document.querySelector('#loanTerm').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        showError('Please Enter Valid Number for all fields');
        return;
    }

    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = loanTerm;
    const t = Math.sqrt(1 + r, n);
    const monthlyPayments = (P * (r * t)) / (t - 1);
    
    const totalPayment = monthlyPayments * n;
    const totalInterest = (monthlyPayments * n) - loanAmount;



    displayResult(totalPayment, totalInterest);
}

function showError(msg) {
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = ` <p class="error">${msg}</p> `;
}

function displayResult(monthlyPayments, totalInterest) {
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = ` 
              <p><strong>Monthly Payment : ${monthlyPayments.toFixed(2)}</strong></p>
              <p><strong>Total Interest : ${totalInterest.toFixed(2)}</strong></p> 
        `;
}

const calcBtn = document.querySelector('#calcBtn');
calcBtn.addEventListener('click', calculateLoan);
