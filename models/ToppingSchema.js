import mongoose from "mongoose";

const toppingSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

const Topping =
  mongoose.models.Topping || mongoose.model("Topping", toppingSchema);

export default Topping;
