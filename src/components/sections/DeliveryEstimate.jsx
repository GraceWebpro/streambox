import { useEffect, useState } from "react"

const DeliveryEstimate = () => {
  const [location, setLocation] = useState("Lagos")

  // Simple demo location detection
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setLocation("Your Area"),
        () => setLocation("Lagos")
      )
    }
  }, [])

  return (
    <section className="py-16 px-6 text-center bg-gradient-to-r from-primary to-secondary text-white">
      <h2 className="text-3xl font-bold">
        🚚 Delivery to {location}
      </h2>

      <p className="mt-4 text-lg opacity-90">
        Estimated delivery time: 25 – 30 minutes
      </p>

      <div className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold">
        Fast & Reliable Delivery
      </div>
    </section>
  )
}

export default DeliveryEstimate