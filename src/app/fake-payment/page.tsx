"use client";


const FakePaymentPage = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-6">Payment Successful</h1>
        <p className="text-lg text-gray-600 mb-4">
          Thank you for your payment! Your transaction has been processed successfully.
        </p>
        <button
          onClick={() => alert("Payment Successful (Mock)!")}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Simulate Payment
        </button>
      </div>
    );
  };
  
  export default FakePaymentPage;