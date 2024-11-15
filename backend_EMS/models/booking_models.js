import mongoose from "mongoose";

const booking_schema = new mongoose.Schema({
  customer_id: { type: String },
  vendor_id: { type: String },
  listings_id: { type: String },
  role: { type: String },
  name: { type: String },
  date: { type: String },
  start_time: { type: String },
  end_time: { type: String },
  persons: { type: String },
  phone: { type: String },
  event_type: { type: String },
  parking: { type: String },
  groundtype: { type: String },
  lighting_type: { type: String },
  VIP_seats: { type: String },
  ac_heating: { type: String },
  catering: { type: String },
  menu: { type: String },
  table_services: { type: String },
  projector: { type: String },
  wifi: { type: String },
  price: { type: String },
  remarks: { type: String },
});

const bookings = mongoose.model("bookings", booking_schema);
export default bookings;
