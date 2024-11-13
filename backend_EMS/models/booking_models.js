import mongoose from "mongoose";

const booking_schema = new mongoose.Schema({

  // user_id:{ type:mongoose.Schema.Types.ObjectId ,  unique: true, ref: "users" },
  listing_id: { type:String },
  customer_id: { type: String },
  role:{type:String},
  date:{ type: String },
  start_time:{ type: String },
  end_time:{ type: String },
  persons:{ type: String },
  phone:{ type: String },
  event_type:{type:String},
  parking:{ type:String},
  groundtype:{ type:String},
  lighting_type:{ type:String},
  VIP_seats:{ type:String},
  ac_heating:{type:String},
  catering:{type:String},
  menu:{type:String},
  table_services:{type:String},
  projector:{type:String},
  wifi:{type:String},
  notification:{type:Number},
  status: { type: String },
  price:{type:String}

});

const bookings = mongoose.model("bookings", booking_schema);
export default bookings;
