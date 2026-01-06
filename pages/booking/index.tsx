import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "../../components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
        <CancellationPolicy />
      </div>
    </div>
  );
}
