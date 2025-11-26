import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [data, setData] = useState({});
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const change = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    const req = [
      "fullName",
      "email",
      "address",
      "city",
      "postalCode",
      "country",
      "cardNumber",
      "expiryDate",
      "cvv",
    ];
    req.forEach((f) => !data[f] && (e[f] = "Required"));
    if (data.email && !/\S+@\S+\.\S+/.test(data.email))
      e.email = "Invalid email";
    if (data.cardNumber && !/^\d{16}$/.test(data.cardNumber))
      e.cardNumber = "16 digits";
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setDone(true);

    setTimeout(() => navigate("/"), 2000); // Redirect to home after 2s
  };

  const field = (label, name, extra = {}) => (
    <div style={{ marginBottom: 12 }}>
      <label>{label}</label>
      <input
        name={name}
        value={data[name] || ""}
        onChange={change}
        style={styles.input}
        {...extra}
      />
      {err[name] && <p style={styles.error}>{err[name]}</p>}
    </div>
  );

  // Show thank you message after placing order
  if (done)
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <h1 style={{ color: "#1976d2" }}>Thank you for shopping!</h1>
        <p>Redirecting to home...</p>
      </div>
    );

  return (
    <div style={styles.box}>
      <h2 style={styles.title}>Checkout</h2>

      <form onSubmit={submit}>
        {field("Full Name", "fullName")}
        {field("Email", "email")}
        {field("Address", "address")}
        {field("City", "city")}
        {field("Postal Code", "postalCode")}
        {field("Country", "country")}

        <h3 style={styles.title}>Payment</h3>

        {field("Card Number", "cardNumber", { maxLength: 16 })}
        {field("Expiry (MM/YY)", "expiryDate", { maxLength: 5 })}
        {field("CVV", "cvv", { maxLength: 4, type: "password" })}

        <button type="submit" style={styles.btn}>
          Place Order
        </button>
      </form>
    </div>
  );
}

const styles = {
  box: {
    maxWidth: 420,
    margin: "auto",
    padding: 20,
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 4,
    border: "1px solid #ccc",
    borderRadius: 6,
  },
  title: { color: "#1976d2" },
  btn: {
    width: "100%",
    padding: 12,
    marginTop: 20,
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  error: { color: "red", fontSize: 12, margin: 0 },
};